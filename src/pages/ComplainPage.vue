<template>
  <q-page>
    <div class="page">
      <ComplainContent class="content-infinite" />
    </div>
  </q-page>
</template>

<script>
import ComplainContent from "src/components/ComplainPage/ComplainContent.vue";

export default {
  name: "ComplainPage",
  components: {
    ComplainContent,
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
