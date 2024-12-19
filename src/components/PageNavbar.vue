<template>
  <q-header :class="{ scrolled: isScrolled }" elevated>
    <q-toolbar :style="toolbarStyle" class="q-pa-sm">
      <a href="/">
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
        <img
          src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
          alt="User  Pic"
          class="q-mr-lg"
          style="height: 4rem; border-radius: 50%"
        />
        <span
          class="q-mr-sm"
          :style="{
            color: isScrolled ? 'black' : 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }"
        >
          {{ username }}
        </span>
        <q-btn
          flat
          icon="menu"
          size="1.75rem"
          @click="toggleMenu"
          aria-label="Toggle Menu"
          :style="{ color: isScrolled ? 'black' : 'white' }"
        >
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item @click="goToLogin" clickable>
                <q-item-section>Login</q-item-section>
              </q-item>
              <q-item @click="goToRegister" clickable>
                <q-item-section>Register</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-col>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      username: "Hanif",
      whiteLogo: "/logo-text.png",
      blackLogo: "/logo-text-black.png",
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu; // Toggle menu state
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

.q-toolbar .q-btn,
.q-toolbar span {
  transition: color 0.3s ease; /* Smooth transition for button and text color */
}
</style>
