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

        <div
          class="col-5"
          style="display: flex; justify-content: flex-end; position: relative"
        >
          <br />
          <div class="dropdown-container">
            <button class="dropdown-btn" @click="toggleDropdown">
              Ganti Destinasi
              <span class="dropdown-arrow"></span>
            </button>
            <ul v-if="isOpen" class="dropdown-menu">
              <li class="dropdown-item">Option 1</li>
              <li class="dropdown-item">Option 2</li>
              <li class="dropdown-item">Option 3</li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="row" style="border: 1px solid black; margin: 10px 0" />

      <!-- Select Departure Time -->
      <div
        class="row q-my-sm"
        v-for="jadwal in jadwalList"
        :key="jadwal.id"
        style="
          font-size: 1.2rem;
          border-radius: 10px;
          transition: box-shadow 0.5s ease-in-out;
          outline: 1px solid #0077b6;
        "
        :class="{ 'hover-effect': hover }"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <!-- Section 1 -->
        <div class="row q-my-sm q-mx-lg" style="width: 100%">
          <div class="col-6">
            <div class="row q-pb-sm">
              <img
                src="https://cdn4.iconfinder.com/data/icons/delivery-shipping-4/32/delivery-25-512.png"
                alt="BCA Mobile Logo"
                style="height: 2rem; width: 2rem"
              />
              <span style="font-weight: bold">Travel-U</span>
            </div>
            <div class="value" style="font-size: 1.1rem">
              {{ Math.floor(convertTimeToMinutes(jadwal.waktu) / 60) }}:{{
                formatToTwoDigits(
                  Math.floor(convertTimeToMinutes(jadwal.waktu) % 60)
                )
              }}
              Pool
              {{ departureLabel.name }}
            </div>
            <br />
            <div class="value" style="font-size: 1rem">
              {{ Math.floor(jadwal.durasi / 60) }}
              j
              {{ jadwal.durasi % 60 }} m
            </div>
            <br />
            <div class="value" style="font-size: 1rem">
              {{
                Math.floor(
                  (convertTimeToMinutes(jadwal.waktu) + jadwal.durasi) / 60
                )
              }}:{{
                formatToTwoDigits(
                  Math.floor(
                    (convertTimeToMinutes(jadwal.waktu) + jadwal.durasi) % 60
                  )
                )
              }}
              Pool
              {{ destinationLabel.name }}
            </div>
          </div>
          <div
            class="col-6 text-right"
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <span class="value" style="font-size: 1rem"
              >Rp {{ jadwal.hargaTiket }}/seat</span
            >
            <span class="value" style="font-size: 1rem">8 Capacity</span>
            <div class="row justify-end">
              <q-btn
                color="primary"
                label="Pesan Sekarang!"
                size="lg"
                @click="redirectToOrderDetail(jadwal.id)"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="row q-my-sm"
        style="
          font-size: 1.2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        "
      >
        <!-- Section 1 -->
        <div
          class="row q-my-sm q-mx-lg q-pb-sm"
          style="width: 100%; display: flex; justify-content: center"
        >
          <div class="text-center" style="width: 75%; font-weight: 500">
            Anda sudah mencapai batas hasil dari pencarian, silahkan lakukan
            pencarian kembali di hari atau rute berbeda untuk mendapatkan lebih
            banyak keberangkatan
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
    const passengerCount = route.query.passengerCount;
    const date = ref(new Date(route.query.date));

    // Reactive properties to hold the fetched data
    const departureLabel = ref("");
    const destinationLabel = ref("");
    const departureKota = ref("");
    const destinationKota = ref("");

    const hover = ref(false);
    const isOpen = ref(false);
    const jadwalList = ref([]);
    const loadedJadwal = ref(false);

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

        const jadwalResponse = await api.get(`/jadwals`);
        const filteredJadwalList = jadwalResponse.data.filter(
          (jadwal) =>
            jadwal.asalCabangId == departureId &&
            jadwal.destinasiCabangId == destinationId
        );

        // Assign the filtered list to jadwalList
        jadwalList.value = filteredJadwalList;

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

    const redirectToOrderDetail = (jadwalId) => {
      // Construct the new URL with parameters
      router.push({
        path: "/orderdetail",
        query: {
          departure: departureId,
          destination: destinationId,
          passengerCount: passengerCount,
          date: date.value.toISOString(), // Convert date to ISO string if needed
          jadwalId: jadwalId, // Add the clicked jadwal's ID
        },
      });
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
      passengerCount,
      date,
      jadwalList,
      formatDate,
      hover,
      isOpen,
      convertTimeToMinutes,
      formatToTwoDigits,
      redirectToOrderDetail, // Return the new method
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
