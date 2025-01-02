<template>
  <div class="q-px-lg">
    <div
      class="col justify-content-center align-items-center text-center"
      style="text-align: center"
    >
      <!-- I swear to god how to center a div in html -->
      <div class="row text-center" style="text-align: center">
        <q-img
          :src="destinasi.img"
          style="max-height: 30vh; width: 100%; object-fit: cover"
        />
      </div>
      <div class="row text-center">
        <h2
          class="text-center"
          style="font-weight: 400; text-align: center; width: 100%"
        >
          {{ destinasi.name }}
        </h2>
      </div>
      <div class="row text-center">
        <h4
          class="text-center"
          style="font-weight: 400; text-align: center; width: 100%"
        >
          {{ destinasi.kota }}
        </h4>
      </div>
      <div class="row text-center">
        <h5 class="text-center">
          {{ destinasi.deskripsi }}
        </h5>
      </div>
      <hr />
      <form>
        <div
          class="col-12 row"
          style="
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          "
        >
          <div class="row">
            <div class="col">
              <q-select
                class="col-5 q-pa-md"
                v-model="departure"
                :options="groupedCabangOptions"
                label="Pilih Keberangkatan"
                options-selected-class="text-deep-orange"
              >
                <template v-slot:option="scope">
                  <q-item
                    v-if="!scope.opt.group"
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                  >
                    <q-item-section>
                      <q-item-label>{{ scope.opt.label }}</q-item-label>
                      <q-item-label caption>{{
                        scope.opt.description
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-if="scope.opt.group"
                    v-bind="scope.itemProps"
                    v-on="scope.itemEvents"
                  >
                    <q-item-label header>{{ scope.opt.group }}</q-item-label>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="col" v-if="destination">
              <q-select
                options-selected-class="text-deep-orange"
                v-model="destination.name"
                label="Pilih Destinasi"
                class="col-5 q-pa-md"
                disable
              >
              </q-select>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <q-select
                v-model="passengerCount"
                :options="passengerOptions"
                label="Jumlah Penumpang"
                class="col-3 q-pa-md"
                :max="4"
              />
            </div>
            <div class="col">
              <q-input
                class="col-3 q-pa-md"
                filled
                v-model="date"
                mask="date"
                :rules="['date']"
                :min="minDate"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date" :min="minDate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </form>
      <q-btn
        style="background-color: #0077b6; width: 100%; color: white"
        class="q-mb-xl"
        @click="forwardData"
        >Pesan sekarang</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";

const router = useRouter();
const props = defineProps({
  KotaList: Array,
  CabangList: Array,
  destinasi: Object,
});
const departure = ref(null);
const destination = ref(null);
const passengerCount = ref(null);
const date = ref("");
const minDate = new Date().toISOString().split("T")[0];

const passengerOptions = Array.from({ length: 4 }, (_, i) => ({
  label: `${i + 1} Penumpang`,
  value: i + 1,
}));

// Group Cabang options by Kota
const groupedCabangOptions = computed(() => {
  const options = [];
  props.KotaList.forEach((kota) => {
    const cabangs = props.CabangList.filter(
      (cabang) => cabang.kotaId === kota.id
    );
    options.push({
      value: kota.id,
      group: kota.name,
      disable: true,
    });
    if (cabangs.length > 0) {
      cabangs.forEach((cabang) => {
        if (departure.value != null) {
          if (cabang.id != departure.value.id)
            options.push({
              label: cabang.name,
              kota: kota.name,
              id: cabang.id,
              kotaId: kota.id,
            });
        } else {
          options.push({
            label: cabang.name,
            kota: kota.name,
            id: cabang.id,
            kotaId: kota.id,
          });
        }
      });
    }
  });
  return options;
});

// Set default destination based on the condition
onMounted(async () => {
  try {
    const response = await api.get(`/cabangs/${props.destinasi.cabangId}`);
    destination.value = response.data; // Assuming the response contains the destination data

    // Set default destination based on the condition
    const matchingCabang = props.CabangList.find(
      (cabang) => cabang.name === props.destinasi.label
    );
    if (matchingCabang) {
      destination.value = matchingCabang;
    }
  } catch (error) {
    console.error("Error fetching destination data:", error);
  }
});

// Handle form submission
const forwardData = async () => {
  console.log(props.destinasi.id);
  const payload = {
    departure: departure.value.id,
    destination: props.destinasi.cabangId,
    passengerCount: passengerCount.value.value,
    date: date.value,
  };

  // Forward the parameters to the frontend page
  console.log("Form submitted with:", payload);
  // You can use a router to navigate to another page and pass the payload as query parameters or state
  // For example, using Vue Router:
  router.push({ path: "/order", query: payload });
};
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
