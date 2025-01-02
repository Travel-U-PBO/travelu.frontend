<template>
  <div class="q-pa-lg flex flex-center">
    <div class="col q-pt-lg" style="width: 90%">
      <!-- Informasi Utama -->
      <div class="row" style="font-size: 2rem">
        <div class="col-7 text-align text-black">
          <span style="text-transform: uppercase">
            {{ departureKota.name }}, {{ departureLabel.name }} -
            {{ destinationKota.name }}, {{ destinationLabel.name }} <br />
          </span>
          <span style="font-size: 1.5rem">
            {{ formatDate(date) }} | {{ passengerCount }} Penumpang
          </span>
        </div>
      </div>

      <hr class="row" style="border: 1px solid black; margin: 10px 0" />

      <!-- Informasi Pemesan -->

      <div class="row" style="font-size: 2rem">
        <b>Informasi Utama</b>
      </div>
      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
        >
          <span
            class="q-pl-lg"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Informasi Pemesanan</span
          >
        </div>

        <div class="row q-my-sm">
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Departure</div>
            <div class="value">
              {{ departureKota.name }}, {{ departureLabel.name }}
            </div>
            <div class="span">Departure Date & Time</div>
            <div class="value">
              {{ formatDate(date) }}, At {{ jadwal.waktu }} WIB
            </div>
          </div>

          <div class="col" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Destination</div>
            <div class="value">
              {{ destinationKota.name }}, {{ destinationLabel.name }}
            </div>
            <div class="span">Total Passenger</div>
            <div class="value">{{ passengerCount }} Penumpang</div>
          </div>
        </div>
        <div class="row">
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Ticket Code</div>
            <div class="value">
              #{{
                pembayaran.noInvoice
                  ? pembayaran.noInvoice.toUpperCase()
                  : "N/A"
              }}
            </div>
            <div class="span">Order's Name</div>
            <div class="value">
              {{ pembayaran.name }}
            </div>
          </div>

          <div class="col" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Phone Number</div>
            <div class="value">
              {{ pembayaran.noTelp }}
            </div>
            <div class="span">Email</div>
            <div class="value">{{ pembayaran.email }}</div>
          </div>
          <div class="col-8 q-mb-sm" style="margin-left: 25px">
            <div class="span">Address</div>
            <div class="value">
              {{ pembayaran.address }}
            </div>
          </div>
        </div>
      </div>

      <!-- Informasi Penumpang -->

      <div
        style="outline: 0px solid #0077b6; border-radius: 5px"
        v-for="(passenger, index) in passengerList"
        :key="passenger.id"
      >
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
        >
          <span
            class="q-pl-lg"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Informasi Pelanggan Nomor {{ index + 1 }}</span
          >
        </div>
        <div class="row">
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Passenger's Name</div>
            <div class="value">
              {{ passenger.panggilan }} {{ passenger.namaCustomer }}
            </div>
            <div class="span">Address</div>
            <div class="value">
              {{ passenger.alamat }}
            </div>
          </div>

          <div class="col q-mb-sm" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Phone Number</div>
            <div class="value">
              {{ passenger.noTelp }}
            </div>
            <div class="span">Seat Number</div>
            <div class="value">{{ passenger.id }}</div>
          </div>
        </div>
      </div>

      <!-- Pilihan Pembayaran -->
      <div class="row q-mt-xl" style="font-size: 2rem">
        <b>Pilih Metode Pembayaran</b>
      </div>
      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <q-card class="q-my-md">
          <q-expansion-item
            expand-icon="expand_more"
            :header-class="{ 'text-weight-bold': true }"
          >
            <template v-slot:header>
              <div class="text-h5">Virtual Account</div>
            </template>
            <q-card-section class="row items-center q-pa-md">
              <q-btn-toggle
                v-model="method"
                spread
                toggle-color="grey"
                :options="[
                  { value: 'BCA', slot: 'BCA' },
                  { value: 'MANDIRI', slot: 'MANDIRI' },
                  { value: 'BNI', slot: 'BNI' },
                  { value: 'BRI', slot: 'BRI' },
                  { value: 'BSI', slot: 'BSI' },
                ]"
              >
                <template v-slot:BCA>
                  <div class="q-ma-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1280px-Bank_Central_Asia.svg.png"
                      alt="Placeholder Image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </template>
                <template v-slot:MANDIRI>
                  <div class="q-ma-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
                      alt="Placeholder Image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </template>
                <template v-slot:BNI>
                  <div class="q-ma-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo .svg.png"
                      alt="Placeholder Image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </template>
                <template v-slot:BRI>
                  <div class="q-ma-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg"
                      alt="Placeholder Image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </template>
                <template v-slot:BSI>
                  <div class="q-ma-xl">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0jV5mJRr6kq1jqh-oGQRB6UuKulC6ObjXg&s"
                      alt="Placeholder Image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </template>
              </q-btn-toggle>
            </q-card-section>
          </q-expansion-item>
        </q-card>
        <q-card class="q-my-md">
          <q-expansion-item
            expand-icon="expand_more"
            :header-class="{ 'text-weight-bold': true }"
          >
            <template v-slot:header>
              <div class="text-h5">E-Money</div>
            </template>
            <q-btn-toggle
              v-model="method"
              style="width: 40%"
              spread
              toggle-color="primary"
              :options="[
                { value: 'OVO', slot: 'OVO' },
                { value: 'SHOPEEPAY', slot: 'SHOPEEPAY' },
              ]"
            >
              <template v-slot:OVO>
                <div class="q-ma-xl">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgIPTZHiPIpvARDKLxabgOHd0UZt0x2ZPzg&s"
                    alt="Placeholder Image"
                    width="100%"
                    height="100%"
                  />
                </div>
              </template>
              <template v-slot:SHOPEEPAY>
                <div class="q-ma-xl">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC8J0HHOLKSppss14Im84sOJ5D-qB0LAKsxZ8esss0VNs2LJhNYR4S9KCDV7q-U332uEe9BlF1E7rzW6tqvrZfGiivxobhls2I2E9dWgok7LzdJuNOp_s-h4RmUvc4ENhs-RZ9hVEgrPkK9DUlTvhzOFY-WW0CYEAI_xgSFRjmLLYf77QOxNC5yg/w320-h141/ShopeePay%20Logo%20-%20%20(Koleksilogo.com).png"
                    alt="Placeholder Image"
                    width="100%"
                    height="100%"
                  />
                </div>
              </template>
            </q-btn-toggle>
          </q-expansion-item>
        </q-card>
      </div>

      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <div class="row q-my-sm">
          <div class="col-12" style="margin-left: 25px; margin-top: 10px">
            <q-select
              filled
              v-model="discounts"
              use-input
              multiple
              :options="formattedDiscountList"
              input-debounce="0"
              label="Select Discount"
              behavior="menu"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </div>
      <div style="outline: 0px solid #0077b6; border-radius: 5px">
        <div class="row q-my-sm">
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Harga Tiket</div>
            <div class="value">Rp.{{ jadwal.hargaTiket }}</div>
          </div>

          <div class="col" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Total Harga</div>
            <div class="value">Rp.{{ calculateTotalPrice }}</div>
          </div>
        </div>
      </div>

      <div
        class="row q-my-sm"
        style="font-size: 2rem; background-color: #f0f0f9"
      >
        <div
          class="terms-container"
          style="margin-left: 30px; margin-top: 15px; margin-bottom: 15px"
        >
          <div class="col" style="display: flex">
            <q-btn rounded color="primary" @click="showTerms">
              <span style="font-size: 1rem">
                Read Online Reservation Terms & Conditions
              </span>
            </q-btn>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="terms-checkbox"
              v-model="termsAccepted"
            />
            <label for="terms-checkbox" class="span" style="margin-left: 5px">
              Please check the box as proof that you comply with the terms &
              conditions imposed by the travel management.
            </label>
          </div>
        </div>
      </div>

      <div class="row" style="height: 5vh; display: flex; align-items: center">
        <div class="col" style="display: flex; justify-content: flex-end">
          <q-btn
            rounded
            color="primary"
            :disabled="method == null || !termsAccepted"
            @click="continuePayment"
          >
            Continue Payment
          </q-btn>
        </div>
      </div>
      <!-- Modal for Terms and Conditions -->
      <q-dialog v-model="termsDialog" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">Terms and Conditions</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Close" @click="termsDialog = false" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
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
    const discountList = ref([]);
    const discounts = ref([]);

    const hover = ref(false);
    const termsDialog = ref(false);
    const termsAccepted = ref(false);
    const isOpen = ref(false);
    const jadwal = ref("");
    const pembayaran = ref("");
    const loadedJadwal = ref(false);
    let formattedDiscountList = ref([]);

    let paymentResponse = ref(null);

    const showTerms = () => {
      termsDialog.value = true; // Show the modal
    };

    const totalDiskon = computed(() => {
      let total = 0;
      discounts.value.forEach((discount) => {
        const discountData = discountList.value.find((d) => d.id === discount);
        if (discountData) {
          total += discountData.harga;
        }
      });
      return total;
    });

    // Calculate total price
    const calculateTotalPrice = computed(() => {
      return (
        jadwal.value.hargaTiket * passengerCount -
        passengerCount * totalDiskon.value
      );
    });

    function generateSignature(body, clientId, requestId, requestTimestamp) {
      const jsonBody = JSON.stringify(body);
      var digestSHA256 = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(jsonBody));
      var digestBase64 = CryptoJS.enc.Base64.stringify(digestSHA256);
      console.log("Digest Component: " + jsonBody);
      console.log("Digest sha256: " + digestSHA256);
      console.log("Digest: " + digestBase64);

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
        "Request-Target:/bca-virtual-account/v2/payment-code" +
        "\n" +
        "Digest:" +
        digestBase64;

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
      if (method.value && termsAccepted.value) {
        console.log("Proceeding to payment...");
        console.log(jadwal.value);
        console.log(Number(jadwal.value.hargaTiket) * passengerCount);
        // Create the body for the API request

        const discountValues = discounts.value.map(
          (discount) => discount.value
        );
        const applicableDiscounts = discountList.value.filter((discount) =>
          discountValues.includes(discount.id)
        );
        const totalDiscount = applicableDiscounts.reduce((total, discount) => {
          return total + discount.harga; // Assuming harga is the discount amount
        }, 0);

        // Example values for calculation

        // Step 3: Calculate the total price after applying discounts
        const totalHarga =
          passengerCount * Number(jadwal.value.hargaTiket) * passengerCount -
          totalDiscount;

        console.log(totalHarga);

        const body = {
          order: {
            invoice_number: `INV-${Date.now()}`, // Generate invoice number
            amount: totalHarga, // Calculate total amount
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
            body,
            "BRN-0217-1724227511460",
            uuid, // Use the same request ID for the signature
            new Date().toISOString().slice(0, 19) + "Z"
          ),
        };

        try {
          // Make the API call based on the selected payment method
          paymentResponse.value = await api.post(
            "https://api-sandbox.doku.com/bca-virtual-account/v2/payment-code",
            body,
            { headers }
          );
          console.log(
            "Invoice:",
            paymentResponse.value.data.order.invoice_number
          );
          console.log(
            "VA Number:",
            paymentResponse.value.data.virtual_account_info
              .virtual_account_number
          );
          console.log(
            "Expired Date:",
            paymentResponse.value.data.virtual_account_info.expired_date_utc
          );

          const existingPaymentResponse = await api.get(
            `/pembayarans/${pembayaranId}`
          );
          const existingPaymentData = existingPaymentResponse.data;

          const updateBody = {
            ...existingPaymentData,
            metode: method.value, // Set the payment method
            harga: totalHarga,
            status: "BELUM_BAYAR", // Set the payment method
            invoice: paymentResponse.value.data.order.invoice_number,
            expiredDate:
              paymentResponse.value.data.virtual_account_info.expired_date_utc,
            vAnumber:
              paymentResponse.value.data.virtual_account_info
                .virtual_account_number,
          };

          console.log(updateBody);

          // Call the PUT API to update the payment record
          const orderUpdate = await api.put(
            `/pembayarans/${pembayaranId}`,
            updateBody
          );
          console.log("Payment record updated:", orderUpdate.data);
          router.push({
            path: "/payment/status",
            query: {
              departure: departureId,
              destination: destinationId,
              pembayaran: pembayaranId,
              harga: calculateTotalPrice,
              passengerCount: passengerCount,
              date: date.value.toISOString(), // Convert date to ISO string if needed
              jadwalId: jadwalId, // Add the clicked jadwal's ID
            },
          });

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
        jadwal.value = jadwalResponse.data;

        const discountResponse = await api.get(`/diskons`);
        discountList.value = discountResponse.data;
        formattedDiscountList.value = discountList.value.map((discount) => ({
          label: discount.code, // Use 'nama' as the label
          value: discount.id, // Use 'id' as the value
        }));
        const pembayaranResponse = await api.get(
          `/pembayarans/${pembayaranId}`
        );
        pembayaran.value = pembayaranResponse.data;

        // Assign the filtered list to jadwalList

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
      discounts,
      pembayaran,
      hover,
      isOpen,
      termsDialog,
      totalDiskon,
      calculateTotalPrice,
      formattedDiscountList,
      termsAccepted,
      showTerms,
      continuePayment,
      convertTimeToMinutes,
      formatToTwoDigits,
      discountList,
      filterFn(val, update, abort) {
        if (val.length < 5) {
          abort();
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
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
