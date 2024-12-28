<template>
  <div>
    <div class="row">
      <div class="col-4 text-left justify-center q-px-lg">
        <q-img
          :src="Itinerari.img"
          style="max-height: 30vh; width: 100%; object-fit: cover"
        />
        <h2 class="text-center" style="font-weight: 400">
          {{ Itinerari.title }}
        </h2>
      </div>
      <div class="col-8 q-pl-xl">
        <p class="value">
          {{ Itinerari.deskripsi }}
        </p>
        <div>
          <h5>List Destinasi</h5>
          <div
            v-for="destinasi in DestinasiList.slice(0, 4)"
            :key="destinasi.id"
          >
            <div
              class="row q-my-sm"
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
              <div
                class="row q-my-sm q-mx-lg q-pb-md"
                style="width: 100%; display: flex"
              >
                <div
                  class="col-3 r d-flex align-items-center justify-content-center"
                >
                  <q-img
                    :src="destinasi.img"
                    style="
                      width: 80%;
                      height: auto;
                      object-fit: cover;
                      border-radius: 10px;
                    "
                  />
                </div>
                <div
                  class="col-9 d-flex flex-column justify-content-between"
                  style="height: 100%"
                >
                  <b>{{ destinasi.name }}</b>
                  <p class="limit-lines">{{ destinasi.deskripsi }}</p>
                  <span class="value" style="font-size: 1rem">{{
                    destinasi.kota
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
        <div class="text-right mt-3">
          <q-btn class="btn btn-primary">Pesan sekarang</q-btn>
        </div>
      </div>
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
