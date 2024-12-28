<template>
  <q-page>
    <div class="page">
      <DestinasiContent
        :destinasi="destinasi"
        v-if="loadedDestinasi"
        class="content q-pt-xl"
      />
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";
import DestinasiContent from "src/components/DestinasiPage/DestinasiContent.vue";

export default {
  name: "IndexPage",
  components: {
    DestinasiContent,
  },
  setup() {
    const loadedDestinasi = ref(false);
    const destinasi = ref(null);

    function loadDestinasi() {
      const route = useRoute(); // Get the current route
      const id = route.params.id;
      api
        .get(`/destinasiItineraris/${id}`)
        .then((response) => {
          destinasi.value = response.data;
          loadedDestinasi.value = true; // Corrected variable name
          console.log(destinasi.value);
        })
        .catch((error) => {
          console.error("Error fetching Cabang list:", error); // Error handling
        });
    }

    onMounted(() => {
      // loadItinerari();
      loadDestinasi();
    });

    return {
      loadedDestinasi,
      destinasi,
    };
  },
};
</script>

<style>
/* Add styles specific to IndexPage here if needed */
.page {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: CENTER;
}
.content {
  max-width: 1400px;
  width: 100%;
}
.content-infinite {
  max-width: infinite;
  width: 100%;
}
</style>
