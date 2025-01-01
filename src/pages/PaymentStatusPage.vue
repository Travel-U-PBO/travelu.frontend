<template>
  <q-page>
    <PaymentStatusContent />
  </q-page>
</template>

<script>
import PaymentStatusContent from "src/components/PaymentPage/PaymentStatusContent.vue";

export default {
  name: "PaymentStatusPage",
  components: {
    PaymentStatusContent,
  },
};
</script>

<style scoped>
/* Add styles specific to IndexPage here if needed */
</style>
