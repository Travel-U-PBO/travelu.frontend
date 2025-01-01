<template>
  <div class="q-pa-lg flex flex-center">
    <div class="col q-pt-lg" style="width: 90%">
      <!-- Informasi Pemesan -->

      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
          :class="statusClass"
        >
          <span
            class="q-pl-lg"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Informasi Pemesanan</span
          >
        </div>

        <div class="row q-my-sm">
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Ticket Code</div>
            <div class="value">
              #{{
                pembayaran.noInvoice
                  ? pembayaran.noInvoice.toUpperCase()
                  : "N/A"
              }}
            </div>
            <div class="span">Total Payment</div>
            <div class="value">Rp.{{ pembayaran.harga }}</div>
          </div>

          <div class="col q-mb-xl" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Invoice Number</div>
            <div class="value">
              {{ pembayaran.invoice }}
            </div>
          </div>
        </div>
      </div>

      <!-- Pilihan Pembayaran -->

      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <div
          class="row q-mt-xl"
          style="font-size: 2rem; margin-left: 25px; margin-top: 10px"
        ></div>
        <div style="outline: 0px solid #0077b6; border-radius: 5px">
          <div class="row q-my-sm">
            <div class="col-8" style="margin-left: 25px; margin-top: 10px">
              <div
                class="span"
                v-if="
                  ['BCA', 'BRI', 'MANDIRI', 'BSI', 'BNI'].includes(
                    pembayaran.metode
                  )
                "
              >
                Virtual Account
              </div>
              <div class="span" v-else>E-Money</div>
              <div class="value">{{ pembayaran.metode }}</div>
            </div>

            <div
              class="col q-mb-xl"
              style="margin-left: 25px; margin-top: 10px"
            >
              <div class="span">Virtual Account Number</div>
              <div class="value">
                {{ pembayaran.vAnumber }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
          :class="statusClass"
        >
          <span
            class="q-pl-lg"
            v-if="pembayaran.status == 'BELUM_BAYAR'"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Mohon selesaikan pembayaran sebelum {{ expired }}
          </span>
          <span
            class="q-pl-lg"
            v-if="pembayaran.status == 'LUNAS'"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Terima kasih sudah melakukan pembayaran
          </span>
        </div>
      </div>

      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <q-btn
          class="q-my-sm q-py-sm"
          v-if="pembayaran.status == 'BELUM_BAYAR'"
          @click="continuePayment"
          style="border-radius: 5px; width: 100%"
          color="primary"
        >
          <span style="color: white; font-weight: 400; font-size: 1rem">
            Cek Status Pembayaran
          </span>
        </q-btn>
        <q-btn
          class="q-my-sm q-py-sm"
          v-if="pembayaran.status == 'LUNAS'"
          @click="downloadPDF"
          style="border-radius: 5px; width: 100%"
          color="primary"
        >
          <span style="color: white; font-weight: 400; font-size: 1rem">
            Download Tiket
          </span>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

import { useRoute, useRouter } from "vue-router"; // Import useRouter
import { api } from "boot/axios";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter(); // Initialize the router
    const convertTimeToMinutes = (timeString) => {
      const [hours, minutes] = timeString.split(":").map(Number);
      return hours * 60 + minutes; // Convert to total minutes
    };
    const formatToTwoDigits = (num) => {
      return num < 10 ? `0${num}` : `${num}`;
    };
    // Access query parameters
    const departureId = route.query.departure;
    const destinationId = route.query.destination;
    const jadwalId = route.query.jadwalId;
    const pembayaranId = route.query.pembayaran;
    const passengerCount = route.query.passengerCount;
    const date = ref(new Date(route.query.date));

    // Reactive properties to hold the fetched data
    const departureLabel = ref("");
    const destinationLabel = ref("");
    const departureKota = ref("");
    const destinationKota = ref("");
    const method = ref("");
    const passengerList = ref([]);

    const timeLeft = ref(0); // Time left in seconds
    const timer = ref(null); // Timer reference
    const formattedExpiredDate = ref("");
    const hover = ref(false);
    const termsDialog = ref(false);
    const termsAccepted = ref(false);
    const isOpen = ref(false);
    const jadwal = ref("");
    const pembayaran = ref("");
    const expired = ref(""); // This will hold the expired date
    let paymentResponse = ref(null);

    const showTerms = () => {
      termsDialog.value = true; // Show the modal
    };

    function generateSignature(clientId, requestId, requestTimestamp) {
      var signatureComponents =
        "Client-Id:" +
        clientId +
        "\n" +
        "Request-Id:" +
        requestId +
        "\n" +
        "Request-Timestamp:" +
        requestTimestamp +
        "\n" +
        "Request-Target:/orders/v1/status/" +
        pembayaran.value.invoice;

      var signatureHmacSha256 = CryptoJS.HmacSHA256(
        signatureComponents,
        "SK-AuDMLLbZzjkjqu2GRMVG"
      );
      var signatureBase64 = CryptoJS.enc.Base64.stringify(signatureHmacSha256);

      console.log("Signature Components: " + signatureComponents);
      console.log("Signature HMACSHA256: " + signatureHmacSha256);
      console.log("Signature: " + signatureBase64);

      return "HMACSHA256=" + signatureBase64;
    }

    const continuePayment = async () => {
      // Check if a payment method is selected and terms are accepted
      if (true) {
        console.log("Proceeding to payment...");
        console.log(jadwal.value);
        console.log(Number(jadwal.value.hargaTiket) * passengerCount);
        // Create the body for the API request
        const body = {
          order: {
            invoice_number: `INV-${Date.now()}`, // Generate invoice number
            amount: Number(jadwal.value.hargaTiket) * passengerCount, // Calculate total amount
          },
          virtual_account_info: {
            expired_time: 60,
            reusable_status: true,
            info1: "Pemesanan Tiket Travelu",
          },
          customer: {
            name: pembayaran.value.name, // Use the reactive full name
            email: pembayaran.value.email, // Use the reactive email
          },
        };

        // Define headers for the API request
        const uuid = uuidv4();
        const headers = {
          "Content-Type": "application/json",
          "Client-Id": "BRN-0217-1724227511460",
          "Request-Id": uuid, // Generate a unique request ID
          "Request-Timestamp": new Date().toISOString().slice(0, 19) + "Z", // Current timestamp
          Signature: generateSignature(
            "BRN-0217-1724227511460",
            uuid, // Use the same request ID for the signature
            new Date().toISOString().slice(0, 19) + "Z"
          ),
        };

        try {
          // Make the API call based on the selected payment method
          paymentResponse.value = await api.get(
            `https://api-sandbox.doku.com/orders/v1/status/${pembayaran.value.invoice}`,
            { headers }
          );
          console.log(
            "Invoice:",
            paymentResponse.value.data.transaction.status
          );

          const existingPaymentResponse = await api.get(
            `/pembayarans/${pembayaranId}`
          );
          const existingPaymentData = existingPaymentResponse.data;
          let status = "";
          if (paymentResponse.value.data.transaction.status == "SUCCESS") {
            status = "LUNAS"; // Payment completed successfully
          } else if (
            paymentResponse.value.data.transaction.status == "PENDING"
          ) {
            status = "BELUM_BAYAR"; // Payment is pending
          } else {
            status = "BATAL"; // Payment failed or was canceled
          }

          const updateBody = {
            ...existingPaymentData,
            status: status, // Set the payment method
          };

          console.log(updateBody);

          // Call the PUT API to update the payment record
          const orderUpdate = await api.put(
            `/pembayarans/${pembayaranId}`,
            updateBody
          );
          console.log("Payment record updated:", orderUpdate.data);

          // Extract the expiration date from the response

          // Handle successful response (e.g., navigate to a confirmation page)
        } catch (error) {
          console.error("Error during payment:", error);
        }
      } else {
        console.warn("Payment method not selected or terms not accepted.");
      }
    };

    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Fetch departure details
        const departureResponse = await api.get(`/cabangs/${departureId}`);
        departureLabel.value = departureResponse.data; // Assuming the response has a 'label' field
        const departureKotaResponse = await api.get(
          `/kotas/${departureResponse.data.kotaId}`
        ); // Assuming the kota ID is in the response
        departureKota.value = departureKotaResponse.data; // Assuming the response has a 'kota' field

        const jadwalResponse = await api.get(`/jadwals/${jadwalId}`);
        const pembayaranResponse = await api.get(
          `/pembayarans/${pembayaranId}`
        );
        pembayaran.value = pembayaranResponse.data;
        expired.value = new Date(pembayaran.value.expiredDate + "Z");

        const options = {
          timeZone: "Asia/Jakarta", // WIB timezone
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // 24-hour format
        };
        expired.value =
          expired.value.toLocaleTimeString("en-US", options) + " WIB";

        // Assign the filtered list to jadwalList
        jadwal.value = jadwalResponse.data;

        const passengerResponse = await api.get(`/pemesanans`);
        const filteredPassengerList = passengerResponse.data.filter(
          (passenger) => passenger.pembayaranId == pembayaranId
        );

        passengerList.value = filteredPassengerList;

        // Fetch destination details
        const destinationResponse = await api.get(`/cabangs/${destinationId}`);
        destinationLabel.value = destinationResponse.data; // Assuming the response has a 'label' field
        const destinationKotaResponse = await api.get(
          `/kotas/${destinationResponse.data.kotaId}`
        ); // Assuming the kota ID is in the response
        destinationKota.value = destinationKotaResponse.data; // Assuming the response has a 'kota' field
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const formatDate = (date) => {
      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const dayOfWeek = days[date.getDay()];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${dayOfWeek}, ${day} ${month} ${year}`;
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData();
    });

    watch(timeLeft, (newValue) => {
      if (newValue <= 0) {
        clearInterval(timer.value);
      }
    });

    return {
      departureLabel,
      destinationLabel,
      departureKota,
      destinationKota,
      method,
      passengerCount,
      passengerList,
      date,
      jadwal,
      formatDate,
      pembayaran,
      hover,
      isOpen,
      termsDialog,
      termsAccepted,
      expired,
      showTerms,
      continuePayment,
      convertTimeToMinutes,
      formatToTwoDigits,
      formattedExpiredDate,
      timeLeft,
    };
  },
  computed: {
    statusClass() {
      switch (this.pembayaran.status) {
        case "BELUM_BAYAR":
          return "bg-warning"; // Quasar warning class
        case "LUNAS":
          return "bg-positive"; // Quasar success class
        case "BATAL":
          return "bg-negative"; // Quasar danger class
        default:
          return ""; // Default class if needed
      }
    },
  },
};
</script>

<style scoped>
/* Gaya untuk container rounded rectangle */
.row.q-my-sm {
  border-radius: 15px; /* Membuat sudut membulat */
  overflow: hidden; /* Opsional, untuk memastikan isi container tetap rapi */
}

/* Gaya untuk label */
.span {
  color: #555; /* Warna abu-abu untuk label */
  font-size: 0.9rem; /* Ukuran font lebih kecil untuk label */
  font-weight: normal; /* Berat font normal */
}

/* Gaya untuk value */
.value {
  color: #333; /* Warna lebih gelap untuk value */
  font-size: 1.2rem; /* Ukuran font lebih besar untuk value */
  font-weight: bold; /* Berat font bold */
}

/* Tombol Dropdown */
.dropdown-container {
  position: relative;
}
.dropdown-btn {
  background-color: #a3b8d8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.dropdown-btn:hover {
  background-color: #91a8cc;
}
.dropdown-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  min-width: 200px;
  z-index: 1000;
}
.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Tombol Continue */
.custom-btn {
  background-color: #a3b8d8;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}
.custom-btn:hover {
  background-color: #91a8cc;
}
.payment-button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f0f0f9;
  font-size: 16px;
  transition: background-color 0.3s;
}
</style>
