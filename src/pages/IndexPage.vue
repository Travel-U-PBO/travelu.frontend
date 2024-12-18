<template>
  <q-page>
    <div class="page">
      <BannerHome class="content-infinite" />
      <ClickAndGo
        :KotaList="KotaList"
        :CabangList="CabangList"
        class="content-infinite"
      />
      <ItinerariWisata :ItinerariList="ItinerariList" class="content" />
      <DestinasiWisata :DestinasiList="DestinasiList" class="content" />
    </div>
  </q-page>
</template>

<script>
import BannerHome from "../components/IndexPage/BannerHome.vue";
import ClickAndGo from "../components/IndexPage/ClickAndGo.vue";
import ItinerariWisata from "../components/IndexPage/ItinerariWisata.vue";
import DestinasiWisata from "../components/IndexPage/DestinasiWisata.vue";
import { ref, onMounted } from "vue";
import { api } from "boot/axios";

export default {
  name: "IndexPage",
  components: {
    BannerHome,
    ClickAndGo,
    DestinasiWisata,
    ItinerariWisata,
  },
  setup() {
    const loadedKota = ref(false);
    const loadedCabang = ref(false);
    const loadedItinerari = ref(false);
    const loadedDestinasi = ref(false);
    const KotaList = ref([]);
    const CabangList = ref([]);
    const ItinerariList = ref([]);
    const DestinasiList = ref([]);

    function loadKota() {
      api
        .get("/kotas")
        .then((response) => {
          KotaList.value = response.data;
          loadedKota.value = true; // Corrected variable name
        })
        .catch((error) => {
          console.error("Error fetching Kota list:", error); // Error handling
        });
    }
    function loadCabang() {
      api
        .get("/cabangs")
        .then((response) => {
          CabangList.value = response.data;
          loadedCabang.value = true; // Corrected variable name
        })
        .catch((error) => {
          console.error("Error fetching Cabang list:", error); // Error handling
        });
    }
    function loadItinerari() {
      api
        .get("/itineraris")
        .then((response) => {
          ItinerariList.value = response.data;
          loadedItinerari.value = true; // Corrected variable name
        })
        .catch((error) => {
          console.error("Error fetching Cabang list:", error); // Error handling
        });
    }
    function loadDestinasi() {
      api
        .get("/destinasiItineraris")
        .then((response) => {
          DestinasiList.value = response.data;
          loadedDestinasi.value = true; // Corrected variable name
        })
        .catch((error) => {
          console.error("Error fetching Cabang list:", error); // Error handling
        });
    }

    onMounted(() => {
      loadKota();
      loadCabang();
      loadItinerari();
      loadDestinasi();
    });

    return {
      loadedKota,
      loadedCabang,
      loadedItinerari,
      loadedDestinasi,
      KotaList,
      CabangList,
      ItinerariList,
      DestinasiList,
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
