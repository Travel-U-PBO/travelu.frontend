<template>
  <q-header :class="{ scrolled: isScrolled }" elevated>
    <q-toolbar :style="toolbarStyle" class="q-pa-sm">
      <a href="/" class="q-pa-lg">
        <img
          :src="isScrolled ? blackLogo : whiteLogo"
          style="max-height: 7vh"
        />
      </a>
      <span
        style="font-weight: bold; font-size: 2rem"
        :style="{ color: isScrolled ? 'black' : 'white' }"
        class="q-mr-lg"
        >Travel-U</span
      >

      <div>
        <a href="" :style="{ color: isScrolled ? 'black' : 'white' }">
          <q-btn flat size="1.3rem" style="font-weight: 400" label="Beranda" />
        </a>
        <a href="/complain" :style="{ color: isScrolled ? 'black' : 'white' }">
          <q-btn flat size="1.3rem" style="font-weight: 400" label="Komplain" />
        </a>
        <a href="/about-us" :style="{ color: isScrolled ? 'black' : 'white' }">
          <q-btn
            flat
            size="1.3rem"
            style="font-weight: 400"
            label="Tentang Kami"
          />
        </a>
      </div>
      <q-toolbar-title> </q-toolbar-title>

      <q-col style="display: flex; align-items: center">
        <a
          class="q-pr-md"
          href="/register"
          :style="{ color: isScrolled ? 'black' : 'white' }"
        >
          <q-btn
            flat
            size="1.3rem"
            :style="{
              color: isScrolled ? 'white' : 'black',
              backgroundColor: isScrolled ? 'black' : 'white',
            }"
            label="register"
          />
        </a>
        <a
          class="q-pr-lg"
          href="/login"
          :style="{ color: isScrolled ? 'black' : 'white' }"
        >
          <q-btn
            flat
            size="1.3rem"
            :style="{
              color: isScrolled ? 'white' : 'black',
              backgroundColor: isScrolled ? 'black' : 'white',
            }"
            label="login"
          />
        </a>
      </q-col>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      whiteLogo: "/logo-text.png",
      blackLogo: "/logo-text-black.png",
      isScrolled: false,
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login"); // Redirect to login page
    },
    goToRegister() {
      this.$router.push("/register"); // Redirect to register page
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10; // Change this value to adjust scroll sensitivity
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.q-header {
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
}

.scrolled {
  background-color: rgba(255, 255, 255, 1); /* Faded white background */
  color: black; /* Change text color to black */
}

.q-toolbar {
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for toolbar */
}

.q-toolbar .q-btn {
  transition: color 0.3s ease; /* Smooth transition for button color */
}
</style>
