<template>
  <div class="q-pa-md row justify-center" v-if="!successRegist">
    <div class="col-md-6">
      <div class="text-center">
        <h3 class="text-h3">Sign Up</h3>
        <h5 class="text-h5">
          Please fill up your detail to access your account
        </h5>
      </div>
      <q-form @submit="onSubmit" class="q-pa-md">
        <q-input
          v-model="fullName"
          label="Full Name"
          :rules="[
            (val) => !!val || 'Full name cannot be empty',
            (val) =>
              /^[a-zA-Z\s]+$/.test(val) ||
              'Full name can only contain letters and spaces',
          ]"
        />
        <q-input
          v-model="email"
          type="email"
          label="Email"
          :error-message="emailError"
          :rules="[
            (val) => !!val || 'Email cannot be empty',
            (val) =>
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) ||
              'Email tidak valid',
          ]"
        />

        <q-input
          v-model="password"
          type="password"
          label="Password"
          :error-message="passwordError"
          :rules="[
            (val) => !!val || 'Password cannot be empty',
            (val) =>
              val.length >= 8 || 'Password must be at least 8 characters',
            (val) =>
              /[A-Z]/.test(val) ||
              'Password must contain at least one uppercase',
            (val) =>
              /[0-9]/.test(val) || 'Password must contain at least one number',
          ]"
        />

        <div class="row justify-center q-mt-md">
          <q-btn
            type="submit"
            label="Sign Up"
            color="primary"
            expanded
            style="width: 90%"
          />
        </div>
      </q-form>
      <div class="text-center q-mb-md">
        <q-typography tag="h5" class="text-blue">
          Already have an account?
        </q-typography>
        <a href="login">
          <q-typography tag="h5" class="text-red"> Sign In </q-typography>
        </a>
      </div>
    </div>
  </div>
  <VerifEmail v-if="successRegist" :email="email" />
</template>

<script>
import { ref } from "vue";
import { api } from "boot/axios"; // Make sure this is correctly configured
import { useQuasar } from "quasar";
import VerifEmail from "./VerifEmail.vue";

export default {
  name: "App",
  components: {
    VerifEmail,
  },
  setup() {
    const $q = useQuasar();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const successRegist = ref(false); // Change this to ref(false)

    const onSubmit = async () => {
      emailError.value = "";
      passwordError.value = "";

      // Validate email
      if (!email.value) {
        emailError.value = "Email tidak boleh kosong";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)
      ) {
        emailError.value = "Email tidak valid";
      }

      // Validate password
      if (!password.value) {
        passwordError.value = "Password cannot be empty";
      } else if (password.value.length < 8) {
        passwordError.value = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(password.value)) {
        passwordError.value = "Password must contain at least one uppercase";
      } else if (!/[0-9]/.test(password.value)) {
        passwordError.value = "Password must contain at least one number";
      } else if (!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/.test(password.value)) {
        passwordError.value =
          "Password must contain at least one special character";
      }

      try {
        const response = await api.get(`pelanggans`);
        const pelanggans = response.data;
        const existingEmail = pelanggans.find(
          (pelanggan) => pelanggan.email === email.value
        );
        if (existingEmail) {
          emailError.value = "Email sudah terdaftar";
          $q.notify({
            color: "negative",
            position: "top",
            message: "Email sudah terdaftar",
            icon: "report_problem",
          });
          return;
        }
      } catch (error) {
        console.error("Error fetching pelanggans:", error);
      }
      const requestBody = {
        name: fullName.value,
        email: email.value,
        password: password.value,
        noTelp: "0", // Will be implicitly made into 0
      };

      try {
        const response = await api.post(`pelanggans`, requestBody);
        console.log("User  created successfully:", response.data);
        successRegist.value = true; // Update the state using .value
        // You can add further actions here, like redirecting the user or showing a success message
      } catch (error) {
        console.error("Error creating user:", error);
        $q.notify({
          color: "negative",
          position: "top",
          icon: "report_problem",
        });
      }
    };

    return {
      fullName,
      email,
      password,
      emailError,
      passwordError,
      onSubmit,
      successRegist,
    }; // Don't forget to return successRegist
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
</style>
