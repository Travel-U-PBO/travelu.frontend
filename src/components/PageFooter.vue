<template>
  <div
    class="row q-pt-lg"
    style="
      background-color: #202c44;
      color: black;
      font-size: 3vh;
      color: white;
    "
  >
    <!-- Footer Section -->
    <div
      class="col-3 column"
      style="display: flex; justify-content: center; align-items: center"
    >
      <q-img
        :src="logo"
        class="q-pa-sm q-ma-md col"
        style="max-width: 50%; height: auto"
        fit="contain"
      />

      <!-- Contact Us Section -->
      <div class="col-5 text-center" style="font-size: 1.5rem; color: white">
        Kontak Kami
        <div style="display: flex; justify-content: center; gap: 10px">
          <a :href="'https://facebook.com/travelu'" target="_blank">
            <img
              src="/facebook.webp"
              alt="Facebook"
              style="width: 30px; height: 30px"
            />
          </a>
          <a :href="'https://instagram.com/travelu'" target="_blank">
            <img
              src="/instagram.webp"
              alt="Instagram"
              style="width: 30px; height: 30px"
            />
          </a>
          <a :href="'https://x.com/travelu'" target="_blank">
            <img src="/x.png" alt="X" style="width: 30px; height: 30px" />
          </a>
          <a :href="'https://whatsapp.com/travelu'" target="_blank">
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              style="width: 30px; height: 30px"
            />
          </a>
        </div>

        <!-- Phone Number Section -->
        <div class="col-1 text-center">
          <q-icon name="phone" class="q-mr-sm" />
          022 123 456 789
        </div>
      </div>

      <!-- Sosmed Section -->
    </div>
    <div class="col-4 column">
      <div class="col-1 q-pb-xl">Layanan Kami</div>
      <div class="col-1">Tentang Kami</div>
    </div>
    <div class="col-2 column q-pr-xl">
      <div class="col-1 q-pb-xl desktop-only">Download Aplikasi Travel-U</div>
      <a
        :href="'https://instagram.com/travelu'"
        target="_blank"
        class="col-3 q-pb-xl"
      >
        <img
          src="/download-appstore.png"
          alt="Instagram"
          style="width: 90%; height: auto"
        />
      </a>
      <a
        :href="'https://instagram.com/travelu'"
        target="_blank"
        class="col-3 q-pt-lg"
      >
        <img
          src="/download-googleplay.png"
          alt="Instagram"
          style="width: 90%; height: auto"
        />
      </a>
    </div>
    <div class="col-3 column q-pr-sm">
      <div class="col-1 q-mb-md desktop-only">Alamat Kami</div>
      <div class="col-1 q-mb-lg" style="font-size: 1rem">
        Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung,
        Jawa Barat 40267
      </div>
      <div class="col q-pa-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.355746281806!2d107.628157!3d-6.969282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1732170325528!5m2!1sid!2sid"
          style="border: 0; width: 100%; height: auto"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define the reactive state for the current slide
const slide = ref(1);
const logo = "/logo-text.png";
// Define an array of slides for better maintainability
const slides = [
  { name: 1, imgSrc: "https://cdn.quasar.dev/img/mountains.jpg" },
  { name: 2, imgSrc: "https://cdn.quasar.dev/img/parallax1.jpg" },
  { name: 3, imgSrc: "https://cdn.quasar.dev/img/parallax2.jpg" },
  { name: 4, imgSrc: "https://cdn.quasar.dev/img/quasar.jpg" },
];
</script>

<style scoped></style>
