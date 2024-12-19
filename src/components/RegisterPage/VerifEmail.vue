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
          Pendaftaran akun berhasil, verifikasi telah dikirim ke alamat email
          <span style="color: blue">{{ email }}</span>
        </p>
        <p class="text-h6 q-mx-xl q-px-xl">
          Silahkan untuk melalukan aktivasi.
        </p>
      </div>

      <div class="q-mt-xl q-mb-xl q-mx-sm text-center lt-md q-mb-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"
          alt="success"
          style="max-width: 150px; height: auto"
        />
        <p class="text-h6">
          Pendaftaran akun berhasil, verifikasi telah dikirim ke email
          <span style="color: blue">{{ email }}</span>
        </p>
        <p class="text-h6">Silahkan untuk melalukan aktivasi.</p>
      </div>
      <div class="text-center">
        <a href="/login">
          <q-btn
            style="box-shadow: none; border-radius: 5px"
            color="primary"
            icon="keyboard_backspace"
            label="Kembali ke halaman login"
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
function navigateToPage(path) {
  router.push({ path: `/${path}` });
}
</script>
<script>
export default {
  name: "VerifEmail",
  props: {
    email: String,
  },
  mounted() {
    this.$q.loading.hide();
  },
};
</script>
