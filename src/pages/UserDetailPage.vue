<template>
  <q-page style="display: flex; justify-content: center; align-items: flex-start">
    <UserDetailContent style="width:80%"/>
  </q-page>
</template>

<script>
import UserDetailContent from "src/components/UserDetailPage/UserDetailContent.vue";

export default {
  name: "UserDetailPage",
  components: {
    UserDetailContent,
  },
};
</script>

<style scoped>
/* Add styles specific to IndexPage here if needed */
</style>
