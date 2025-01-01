<template>
  <q-page>
    <div class="page">
      <PaymentStatusContent class="content" />
    </div>
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
