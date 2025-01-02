<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <q-card
        class="my-card zoom-container"
        style="
          transition: transform 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: none; /* No shadow by default */
        "
      >
        <!-- Gambar Utama -->
        <div class="col-4 text-left q-px-lg">
          <q-img
            :src="Itinerari.img"
            style="max-height: 30vh; width: 100%; object-fit: cover"
          />
          <h2 class="text-center" style="font-weight: 400">
            {{ Itinerari.title }}
          </h2>
          <h4 class="text-center" style="font-weight: 400"></h4>
        </div>

        <!-- Deskripsi -->
        <div
          class="col-8 q-pl-xl"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div>
            <p class="value">{{ Itinerari.deskripsi }}</p>
            <hr />

            <!-- Slider -->

            <div class="col-12 row justify-center" v-if="loadedDestinasi">
              <div
                class="col-md-3 col-sm-6 q-pa-sm"
                v-for="destinasi in DestinasiList.slice(0, 4)"
                :key="destinasi.id"
              >
                <a
                  :href="`/destinasi/${destinasi.id}/`"
                  style="
                    text-decoration: none;
                    color: inherit;
                    user-select: none;
                  "
                >
                  <q-card
                    class="my-card zoom-container"
                    style="
                      transition: transform 0.2s;
                      height: 100%;
                      display: flex;
                      flex-direction: column;
                      box-shadow: none; /* No shadow by default */
                    "
                    v-ripple
                  >
                    <q-img
                      :src="destinasi.img"
                      style="height: 25vh; object-fit: cover"
                    ></q-img>
                    <q-card-section>
                      <h5 style="margin: 0; padding: 0">
                        {{ destinasi.name }}
                      </h5>
                      <h6 style="margin: 0; padding: 0">
                        {{ destinasi.kota }}
                      </h6>
                      <p style="margin: 0; padding: 0">
                        {{ destinasi.deskripsi }}
                      </p>
                    </q-card-section>
                  </q-card>
                </a>
              </div>
            </div>
            <!-- Tombol Pesan -->

            <div
              class="btn btn-primary"
              style="margin-top: 20px; margin-bottom: 40px"
            >
              <q-btn
                style="background-color: #0077b6; width: 100%; color: white"
                @click="forwardData"
                >Pesan sekarang</q-btn
              >
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";

const props = defineProps({
  Itinerari: Object,
});

// Create a ref to hold the destinasi list
const DestinasiList = ref([]);
const loadedDestinasi = ref(false);

// Function to load destinasi based on itinerari.listDestinasi
async function loadDestinasi() {
  // Check if itinerari.listDestinasi exists and is an array
  if (
    Array.isArray(props.Itinerari.listDestinasi) &&
    props.Itinerari.listDestinasi.length > 0
  ) {
    try {
      // Create an array of promises for each destinasi ID
      const destinasiPromises = props.Itinerari.listDestinasi.map((id) =>
        api.get(`/destinasiItineraris/${id}`)
      );

      // Wait for all promises to resolve
      const responses = await Promise.all(destinasiPromises);

      // Extract the data from the responses
      DestinasiList.value = responses.map((response) => response.data);
      console.log(DestinasiList.value);
      loadedDestinasi.value = true; // Mark as loaded
    } catch (error) {
      console.error("Error fetching Destinasi list:", error); // Error handling
    }
  } else {
    console.warn("No destinasi IDs found in itinerari."); // Handle case where no IDs are present
  }
}

const forwardData = async () => {
  router.push({
    path: "/order/itinerari",
    query: {
      destinasi: departureId,
    },
  });
};

// Call loadDestinasi when the component is mounted
onMounted(() => {
  loadDestinasi();
});
</script>

<style scoped>
/* Gaya untuk container rounded rectangle */
.hover-effect {
  box-shadow: 0 4px 8px #0077b6;
}
.limit-lines {
  display: -webkit-box; /* For Safari */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis (...) at the end */
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
