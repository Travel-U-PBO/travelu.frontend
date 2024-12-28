<template>
  <div class="row justify-center q-pa-xl">
    <div class="col-12">
      <div class="row">
        <div class="col-12 text-center">
          <h3><b>✈️ Ayo Rencanakan Liburanmu!</b></h3>
        </div>
      </div>
      <div class="col-12 row justify-center">
        <div
          class="col-md-4 col-sm-6 q-pa-sm"
          v-for="itinerary in ItinerariList.slice(0, 6)"
          :key="itinerary.id"
        >
          <a
            :href="`/itinerari/${itinerary.id}/${toKebabCase(itinerary.title)}`"
            style="text-decoration: none; color: inherit; user-select: none"
          >
            <q-card
              class="my-card zoom-container"
              style="
                transition: transform 0.2s;
                height: 100%;
                display: flex;
                flex-direction: column;
              "
              v-ripple
            >
              <q-img :src="itinerary.img" :style="{ height: '200px' }">
                <div
                  class="absolute-top text-h6 q-p-md"
                  style="background-color: rgba(0, 0, 0, 0.5); color: white"
                >
                  {{ itinerary.listDestinasi.length }} Destinasi
                </div>
              </q-img>
              <div class="q-pa-md">
                <div class="text-h6">{{ itinerary.title }}</div>
              </div>
            </q-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  ItinerariList: Array,
});

const toKebabCase = (str) => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, "") // Trim hyphens from start
    .replace(/-+$/, ""); // Trim hyphens from end
};
</script>

<style scoped>
.zoom-container {
  transition: transform 0.3s ease; /* Smooth transition */
}

.zoom-container:hover {
  transform: scale(1.05); /* Zoom in slightly */
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle box-shadow */
}

.zoom-container:active {
  transform: scale(0.98); /* Slightly reduce the scale */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduce the shadow to create a pressed effect */
}
</style>
