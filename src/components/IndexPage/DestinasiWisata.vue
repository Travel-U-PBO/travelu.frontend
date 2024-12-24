<template>
  <div class="row justify-center q-pa-xl">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h3><b>Temukan Berbagai Destinasi Wisata 🏨</b></h3>
        </div>
      </div>
      <div class="col-12 row justify-center">
        <div
          class="col-md-3 col-sm-6 q-pa-sm"
          v-for="destinasi in DestinasiList.slice(0, 4)"
          :key="destinasi.id"
        >
          <a
            :href="`/destinasi/${destinasi.id}/${toKebabCase(destinasi.name)}`"
            style="text-decoration: none; color: inherit; user-select: none"
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
                  {{ truncateDescription(destinasi.deskripsi) }}
                </p>
              </q-card-section>
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
  DestinasiList: Array,
});

const hover = ref(false);
const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;
};

// Function to convert a string to kebab-case
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
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for both transform and box-shadow */
}

.zoom-container:hover {
  transform: scale(1.05); /* Zoom in slightly */
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle box-shadow on hover */
}

.zoom-container:active {
  transform: scale(0.98); /* Slightly reduce the scale */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduce the shadow to create a pressed effect */
}
</style>
