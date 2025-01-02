<template>
  <div class="">
    <!-- Carousel -->
    <q-carousel
      v-model="slide"
      animated
      arrows
      infinite
      autoplay
      height="50vh"
      :autoplay-speed="3000"
      :navigation="false"
    >
      <q-carousel-slide
        v-for="slide in slides"
        :key="slide.name"
        :name="slide.name"
        :img-src="slide.imgSrc"
      />
    </q-carousel>
    <!-- Set the speed for auto sliding (3000ms = 3 seconds) -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define the reactive state for the current slide
const slide = ref(1);

// Define an array of slides for better maintainability
const slides = [
  {
    name: 1,
    imgSrc:
      "https://reservasi.mylintas.co.id/assets/uploads/promo//d3870d063be2c7af107e708ca6e9a3a0.jpg",
  },
  {
    name: 2,
    imgSrc:
      "https://www.joglosemarbus.com/uploads/slider/slider20230410163827.web-banner-joglosemar-conv-1-2.png",
  },
  {
    name: 3,
    imgSrc:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e874107714719.5fad336f21e5b.png",
  },
  {
    name: 4,
    imgSrc:
      "https://st4.depositphotos.com/1049680/20730/i/1600/depositphotos_207302164-stock-photo-young-african-american-man-holding.jpg",
  },
];
</script>

<style scoped>
/* Carousel */
.q-carousel-slide img {
  object-fit: cover;
  height: 300px;
}

/* Click And Go Section */
.click-and-go {
  text-align: center;
  margin: 40px 0;
}

.click-and-go h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.dropdown {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.date-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

/* Footer Section */
.footer-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #dbe9f6;
  margin-top: 40px;
}

.footer-content {
  flex: 1;
  margin: 0 10px;
}

.footer-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-content p {
  font-size: 14px;
  margin: 5px 0;
}

.app-store,
.google-play {
  width: 120px;
  margin-top: 10px;
}
</style>
