<template>
  <q-page>
    <div class="page">
      <ItinerariContent
        :Itinerari="Itinerari"
        v-if="loadedItinerari"
        class="content q-pt-xl"
      />
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";
import ItinerariContent from "src/components/ItinerariPage/ItinerariContent.vue";

export default {
  name: "IndexPage",
  components: {
    ItinerariContent,
  },
  setup() {
    const loadedItinerari = ref(false);
    const Itinerari = ref(null);
    //   const loadedDestinasi = ref(false);
    //   const DestinasiList = ref([]);

    function loadItinerari() {
      const route = useRoute(); // Get the current route
      const id = route.params.id;
      api
        .get(`/itineraris/${id}`)
        .then((response) => {
          Itinerari.value = response.data;
          loadedItinerari.value = true; // Corrected variable name
          console.log(Itinerari.value);
        })
        .catch((error) => {
          console.error("Error fetching Cabang list:", error); // Error handling
        });
    }
    //   function loadDestinasi() {
    //     api
    //       .get("/destinasiItineraris")
    //       .then((response) => {
    //         DestinasiList.value = response.data;
    //         loadedDestinasi.value = true; // Corrected variable name
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching Cabang list:", error); // Error handling
    //       });
    //   }

    onMounted(() => {
      loadItinerari();
      // loadDestinasi();
    });

    return {
      loadedItinerari,
      // loadedDestinasi,
      Itinerari,
      // DestinasiList,
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
