<template>
  <q-page>
    <div class="page">
      <CheckComplain class="content-infinite" />
    </div>
  </q-page>
</template>

<script>
import CheckComplain from "src/components/ComplainPage/CheckComplain.vue";

export default {
  name: "CheckComplainPage",
  components: {
    CheckComplain,
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
