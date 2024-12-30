<template>
  <q-page>
    <div class="page">
      <PaymentMethodContent class="content q-pt-xl" />
    </div>
  </q-page>
</template>

<script>
import PaymentMethodContent from "src/components/PaymentPage/PaymentMethodContent.vue";

export default {
  name: "PaymentMethodPage",
  components: {
    PaymentMethodContent,
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
