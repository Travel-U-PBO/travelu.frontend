<template>
  <q-page
    style="display: flex; justify-content: center; align-items: flex-start"
  >
    <OrderItinerariContent style="width: 90%" />
  </q-page>
</template>

<script>
import OrderItinerariContent from "src/components/OrderItinerariPage/OrderItinerariContent.vue";

export default {
  name: "OrderItinerariPage",
  components: {
    OrderItinerariContent,
  },
};
</script>

<style scoped>
/* Add styles specific to IndexPage here if needed */
</style>
