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

      <div
        class="row q-my-sm q-py-sm"
        style="background-color: #1976d2; border-radius: 5px"
      >
        <span
          class="q-pl-lg"
          style="color: white; font-weight: 400; font-size: 2rem"
          >Data Pemesanan</span
        >
      </div>

      <div style="outline: 1px solid #0077b6; border-radius: 5px">
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
        >
          <span
            class="q-pl-lg"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Masukkan data anda dengan tepat</span
          >
        </div>

        <form class="q-px-xl q-py-xl" style="font-size: 1rem">
          <div class="q-py-sm">
            <span>Nama Pemesan:</span>
            <input
              type="text"
              id="fullName"
              name="fullName"
              style="
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
            />
          </div>
          <div class="q-py-sm">
            <span>Nomor Telepon:</span>
            <input
              type="text"
              id="telephone"
              name="telephone"
              style="
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
            />
          </div>
          <div class="q-py-sm">
            <span>Email:</span>
            <input
              type="text"
              id="email"
              name="email"
              style="
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
            />
          </div>
          <div class="q-py-sm">
            <span>Alamat Lengkap:</span>
            <input
              type="text"
              id="address"
              name="address"
              style="
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
            />
          </div>
        </form>
      </div>

      <div
        style="outline: 1px solid #0077b6; border-radius: 5px"
        v-for="index in passengerCount"
        :key="index"
      >
        <div
          class="row q-my-sm q-py-sm"
          style="background-color: #1976d2; border-radius: 5px"
        >
          <span
            class="q-pl-lg"
            style="color: white; font-weight: 400; font-size: 1.5rem"
            >Data Pelanggan Nomor {{ index }}</span
          >
        </div>
        <form class="q-px-xl q-pb-sm row" style="font-size: 1rem">
          <div class="col q-pr-sm">
            <div class="q-py-sm">
              <span>Nama Pemesan:</span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                style="
                  width: 100%;
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                "
              />
            </div>
            <div class="q-py-sm">
              <span>Nomor Telepon:</span>
              <input
                type="text"
                id="telephone"
                name="telephone"
                style="
                  width: 100%;
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                "
              />
            </div>
          </div>
          <div class="col q-pl-sm">
            <div class="q-py-sm">
              <span>Panggilan:</span>
              <select
                id="title"
                name="title"
                style="
                  width: 100%;
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                "
              >
                <option value="" disabled selected>Pilih Panggilan</option>
                <option value="Tn.">Tn.</option>
                <option value="Ny.">Ny.</option>
              </select>
            </div>
            <div class="q-py-sm">
              <span>Alamat Lengkap:</span>
              <input
                type="text"
                id="address"
                name="address"
                style="
                  width: 100%;
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                "
              />
            </div>
          </div>
        </form>
      </div>
      <q-btn
        class="full-width q-mt-lg q-py-sm"
        color="primary"
        @click="forwardData"
      >
        <span style="font-size: 1rem">Pilih Metode Pembayaran</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { api } from "boot/axios";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const fullName = ref("");
    const telephone = ref("");
    const email = ref("");
    const address = ref("");
    const passengerFullNames = ref(
      Array(Number(route.query.passengerCount)).fill("")
    );
    const passengerTelephones = ref(
      Array(Number(route.query.passengerCount)).fill("")
    );
    const passengerTitles = ref(
      Array(Number(route.query.passengerCount)).fill("")
    );
    const passengerAddresses = ref(
      Array(Number(route.query.passengerCount)).fill("")
    );

    const generateInvoiceNumber = () => {
      return Math.floor(Math.random() * 0xffffffff)
        .toString(16)
        .padStart(8, "0");
    };

    const departureId = route.query.departure;
    const destinationId = route.query.destination;
    const jadwalId = route.query.jadwalId;
    const passengerCount = Number(route.query.passengerCount);
    const date = ref(new Date(route.query.date));

    // Reactive properties to hold the fetched data
    const departureLabel = ref("");
    const destinationLabel = ref("");
    const departureKota = ref("");
    const destinationKota = ref("");

    const hover = ref(false);
    const isOpen = ref(false);

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
    const jadwalValue = ref(null); // Reactive variable to hold jadwal data

    // Function to fetch jadwal data
    const fetchJadwalData = async () => {
      try {
        const jadwalResponse = await api.get(`/jadwals/${jadwalId}`);
        jadwalValue.value = jadwalResponse.data; // Store the response data
      } catch (error) {
        console.error("Error fetching jadwal data:", error);
      }
    };

    const forwardData = async () => {
      const noInvoice = generateInvoiceNumber();
      const payload = {
        id: 0, // Assuming this will auto-increment on the server
        metode: "CASH", // Use the specific passenger's name
        harga: Number(jadwalValue.value.hargaTiket) * passengerCount,
        noInvoice: noInvoice, // Generate random invoice number
      };
      let pembayaranId = 0;

      try {
        // Send POST request to the pemesanans endpoint for each passenger
        pembayaranId = await api.post("/pembayarans", payload);
        // Handle the response if needed
        console.log(`Response:`, pembayaranId.data);
      } catch (error) {
        console.error(`Error on creating pembayaran:`, error);
      }

      // Loop through each passenger and create a POST request for each

      for (let i = 0; i < passengerCount; i++) {
        console.log(passengerFullNames.value[i]);
        const payload = {
          id: 0, // Assuming this will auto-increment on the server
          namaCustomer: passengerFullNames.value[i], // Use the specific passenger's name
          statusPembayaran: "BELUM_BAYAR", // Default value
          pelangganId: 1, // Assuming this is a static value for now
          pembayaranId: pembayaranId.data, // Assuming this is a static value for now
          noInvoice: noInvoice,
          jadwalId: jadwalId, // Use the jadwalId from the query parameters
        };
        try {
          // Send POST request to the pemesanans endpoint for each passenger
          const response = await api.post("/pemesanans", payload);
          // Handle the response if needed
          console.log(`Response for passenger ${i + 1}:`, response.data);
        } catch (error) {
          console.error(`Error forwarding data for passenger ${i + 1}:`, error);
        }
      }
      console.log(jadwalValue.value.hargaTiket);

      // Optionally, navigate to another page or show a success message after all requests
      router.push("/paymentmethod");
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData();
      fetchJadwalData();
    });

    return {
      departureLabel,
      destinationLabel,
      departureKota,
      destinationKota,
      passengerCount,
      date,
      formatDate,
      hover,
      isOpen,
      fullName,
      telephone,
      email,
      address,
      passengerFullNames,
      passengerTelephones,
      passengerTitles,
      passengerAddresses,
      forwardData,
    };
  },
};
</script>

<style scoped>
/* Gaya untuk container rounded rectangle */
.hover-effect {
  box-shadow: 0 4px 8px #0077b6;
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
</style>
