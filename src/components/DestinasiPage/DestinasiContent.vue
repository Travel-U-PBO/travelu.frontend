<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <q-card
        class="my-card zoom-container"
        style="
          transition: transform 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: none; /* No shadow by default */
        "
      >
        <div class="col-4 text-left q-px-lg">
          <q-img
            :src="destinasi.img"
            style="max-height: 30vh; width: 100%; object-fit: cover"
          />
          <h2 class="text-center" style="font-weight: 400">
            {{ destinasi.name }}
          </h2>
          <h4 class="text-center" style="font-weight: 400">
            {{ destinasi.kota }}
          </h4>
        </div>
        <div
          class="col-8 q-pl-xl"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div>
            <p class="value">
              {{ destinasi.deskripsi }}
            </p>
            <div>
              <hr />
            </div>
            <q-btn class="btn btn-primary">Pesan sekarang</q-btn>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  destinasi: Object,
});
</script>

<style scoped>
/* Centering the container */
.container {
  display: flex;
  height: 100vh; /* Full viewport height */
}

/* Ensure the row is also a flex container */
.row {
  display: flex;
  width: 100%; /* Ensure it takes full width */
}

/* Gaya untuk container rounded rectangle */
.hover-effect {
  box-shadow: 0 4px 8px #0077b6;
}
.limit-lines {
  display: -webkit-box; /* For Safari */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis (...) at the end */
}
/* Gaya untuk value */
.value {
  color: #333; /* Warna lebih gelap untuk value */
  font-size: 1.2rem; /* Ukuran font lebih besar untuk value */
  font-weight: bold; /* Berat font bold */
}

/* Tombol Dropdown */
.dropdown-container {
  position: relative;
}
.dropdown-btn {
  background-color: #a3b8d8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.dropdown-btn:hover {
  background-color: #91a8cc;
}
.dropdown-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  min-width: 200px;
  z-index: 1000;
}
.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}
</style>
