<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Page Navbar -->
    <PageNavbar />

    <!-- Page Body -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Page Footer -->
    <footer>
      <!-- Add your footer content here -->
      <PageFooter />
    </footer>
  </q-layout>
</template>

<script setup>
import PageNavbar from "src/components/UnauthorizedNavbar.vue"; // Ensure the path is correct
import PageFooter from "src/components/PageFooter.vue"; // Ensure the path is correct

// Define component options
defineOptions({
  name: "UnauthorizedLayout",
});
</script>

<style scoped>
/* Add styles specific to MainLayout here if needed */
</style>
