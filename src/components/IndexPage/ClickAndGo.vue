<template>
  <div class="cover">
    <div style="max-width: 1400px; width: 90%; margin: 0 auto">
      <h2 class="q-mx-md">Click and Go!</h2>
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div
            class="col-12 row q-mx-md"
            style="
              background-color: #dbe9f6;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            "
          >
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
            <div class="col-2"></div>
            <q-select
              options-selected-class="text-deep-orange"
              v-model="destination"
              :options="groupedCabangOptions"
              label="Pilih Destinasi"
              class="col-5 q-pa-md"
              :disable="!departure"
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
            <q-select
              v-model="passengerCount"
              :options="passengerOptions"
              label="Jumlah Penumpang"
              class="col-3 q-pa-md"
              :max="4"
            />

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
            <div class="col-2"></div>
            <div
              class="col-2 q-pa-md"
              style="
                background-color: #dbe9f6;
                border-radius: 8px;
                text-align: center;
              "
            >
              <q-btn
                label="Search"
                icon="search"
                type="submit"
                color="primary"
                padding="md"
              />
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  KotaList: Array,
  CabangList: Array,
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
  console.log(router);
  return options;
});

// Handle form submission
const onSubmit = () => {
  const payload = {
    departure: departure.value.id,
    destination: destination.value.id,
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
.cover {
  background-image: url("https://www.mylintas.co.id/assets/images/beranda/bg-reservasi.png");
  background-size: cover;
  width: 100%;
  padding: 20px 0;
}
</style>
