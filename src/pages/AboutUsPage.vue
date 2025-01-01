<template>
  <q-page>
    <AboutUsContent />
  </q-page>
</template>

<script>
import AboutUsContent from "src/components/AboutUsPage/AboutUsContent.vue";
import LoginContent from "../components/LoginPage/LoginContent.vue";

export default {
  name: "AboutUsPage",
  components: {
    AboutUsContent,
  },
};
</script>

<style scoped>
/* Add styles specific to IndexPage here if needed */
</style>
