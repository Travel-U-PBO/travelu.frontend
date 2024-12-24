<template>
  <q-page
    style="display: flex; justify-content: center; align-items: flex-start"
  >
    <orderDetailContent style="width: 90%" />
  </q-page>
</template>

<script>
import orderDetailContent from "src/components/OrderPage/orderDetailContent.vue";

export default {
  name: "orderDetailPage",
  components: {
    orderDetailContent,
  },
};
</script>

<style scoped>
/* Add styles specific to IndexPage here if needed */
</style>
