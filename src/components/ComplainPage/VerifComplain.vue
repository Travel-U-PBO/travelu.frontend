<template>
  <div class="example-row-horizontal-alignment q-mb-xl">
    <div class="column">
      <div class="q-mt-xl q-mx-xl q-px-xl text-center gt-sm q-mb-xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"
          alt="success"
          style="max-width: 150px; height: auto"
        />
        <p class="text-h6 q-mx-xl q-px-xl">
          Complain dengan judul <b style="color: blue">{{ title }}</b> telah
          diterima
        </p>
        <p class="text-h6 q-mx-xl q-px-xl">
          Kode Komplain anda adalah <b style="color: blue">{{ id }}</b>
        </p>
      </div>

      <div class="text-center">
        <a href="">
          <q-btn
            style="box-shadow: none; border-radius: 5px"
            color="primary"
            icon="keyboard_backspace"
            label="Kembali ke halaman utama"
            class="q-px-xl"
            type="submit"
            unelevated
          >
          </q-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<script>
export default {
  name: "VerifComplain",
  props: {
    title: String,
    id: String,
  },
  mounted() {
    this.$q.loading.hide();
  },
};
</script>
