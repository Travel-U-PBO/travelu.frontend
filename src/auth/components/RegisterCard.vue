<script setup>
import { QCard, QCardSection, QBtn } from "quasar";
import useRegister from "auth/composables/useRegister";
import AuthRegisterForm from "src/auth/components/forms/RegisterForm.vue";
import AuthErrorsBanner from "./ErrorsBanner.vue";
import VerifEmail from "src/components/RegisterPage/VerifEmail.vue";
const {
  form,
  loading,
  errors,
  onRegisterClicked,
  validationErrors,
  hasValidationErrors,
  registered,
} = useRegister();
</script>

<template>
  <div class="q-pa-md row justify-center" v-if="!registered">
    <div class="col-md-6">
      <div class="text-center">
        <h3 class="text-h3">Sign Up</h3>
        <h5 class="text-h5">
          Please fill up your detail to access your account
        </h5>
      </div>
      <q-card>
        <q-card-section class="text-center">
          <!-- Register Form -->
          <AuthRegisterForm
            v-model:email="form.email"
            v-model:password="form.password"
            v-model:password-confirmation="form.password_confirmation"
            v-model:name="form.name"
            v-model:username="form.username"
            :validation-errors="validationErrors"
          />

          <!-- Errors -->
          <div v-if="!hasValidationErrors" class="q-mb-sm">
            <AuthErrorsBanner :errors="errors" />
          </div>
        </q-card-section>

        <!-- Register Button -->
        <q-btn
          v-if="!registered"
          :loading="loading"
          class="full-width"
          color="primary"
          label="register"
          unelevated
          @click="onRegisterClicked"
        />
      </q-card>
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
  <VerifEmail v-if="registered" :email="email" />
</template>
