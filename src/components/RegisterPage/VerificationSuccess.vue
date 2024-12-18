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
          Verfikasi akun telah berhasil silahkan login.
        </p>
      </div>

      <div class="q-mt-xl q-mb-xl q-mx-sm text-center lt-md q-mb-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"
          alt="success"
          style="max-width: 150px; height: auto"
        />
        <p class="text-h6">
          Selamat! Verfikasi akun telah berhasil, silahkan login.
        </p>
      </div>
      <div class="text-center">
        <q-btn
          style="box-shadow: none; border-radius: 5px"
          icon="keyboard_backspace"
          label="Kembali ke halaman login"
          class="q-px-xl"
          type="submit"
          color="primary"
          @click="navigateToPage('login')"
          unelevated
        >
        </q-btn>
      </div>

      <q-inner-loading :showing="loading">
        <q-spinner-ios size="50px" color="primary" />
      </q-inner-loading>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const router = useRouter();
function navigateToPage(path) {
  router.push({ path: `/${path}` });
}
const route = useRoute();

const loading = ref(false);

function verifikasiMail() {
  loading.value = true;
  api
    .post("/register/verifikasi-mail", {
      code: route.query.code,
    })
    .then((response) => {
      if (response.data.code == 200) {
        $q.notify(
          {
            type: "positive",
            message: response.data.messages,
          },
          1000
        );
      } else if (response.data.code == 403) {
        router.push({ path: `/login` });
      } else {
        $q.notify(
          {
            type: "negative",
            message: response.data.messages,
          },
          1000
        );
      }
    })
    .catch((error) => {
      $q.notify(
        {
          type: "negative",
          message: "" + error,
        },
        1000
      );
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  verifikasiMail();
});
</script>
