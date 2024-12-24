<template>
  <div class="container mt-5" id="app">
    <div class="row">
      <div class="col-4 text-left">
        <img
          alt="Placeholder image of a scenic destination"
          class="img-fluid"
          src="https://storage.googleapis.com/a1aa/image/9N2giRh2TwZcNBnNoTC2OjWcBILxQc8pFOwT61tZ7ek12AfTA.jpg"
          style="width: 75%"
        />
        <h2 class="text-center font-weight-bold mt-3">Title</h2>
        <p class="text-center">Kota</p>
      </div>
      <div class="col-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <h5>List Destinasi</h5>
          <hr />
          <h5>List Destinasi</h5>
          <hr />
          <h5>List Destinasi</h5>
          <hr />
          <h5>List Destinasi</h5>
          <hr />
          <h5>List Destinasi</h5>
          <hr />
        </div>
        <div class="text-right mt-3">
          <q-btn class="btn btn-primary">Pesan sekarang</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { api } from "boot/axios";

export default {
  setup() {
    const route = useRoute();

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

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData();
    });

    return {
    };
  },
};
</script> -->

<style scoped></style>
