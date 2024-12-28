<script setup>
import AuthLoginCard from "src/auth/components/LoginCard.vue";
</script>

<template>
  <div class="q-pa-md row justify-center">
    <div class="col-md-6">
      <div class="text-center">
        <h3 class="text-h3">Sign In</h3>
        <h5 class="text-h5">
          Please fill up your detail to access your account
        </h5>
      </div>
      <AuthLoginCard />
      <q-btn
        class="full-width q-mt-md"
        color="grey-6"
        label="forgot password"
        flat
        :to="{ name: 'auth.requestPasswordReset' }"
      />
      <div class="text-center q-mt-md">
        <h5 class="text-h12">
          Don't have an account?
          <a href="/register" class="text-red">Sign up</a>
        </h5>
      </div>
    </div>
  </div>
</template>
