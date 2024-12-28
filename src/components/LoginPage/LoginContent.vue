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

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    onSubmit() {
      this.emailError = "";
      this.passwordError = "";

      // Validate email
      if (!this.email) {
        this.emailError = "Email cannot be empty";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)
      ) {
        this.emailError = "Email tidak valid";
      }

      // Validate password
      if (!this.password) {
        this.passwordError = "Password cannot be empty";
      } else if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(this.password)) {
        this.passwordError = "Password must contain at least one uppercase";
      } else if (!/[0-9]/.test(this.password)) {
        this.passwordError = "Password must contain at least one number";
      } else if (!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,./]/.test(this.password)) {
        this.passwordError =
          "Password must contain at least one special character";
      }

      // If there are no errors, proceed with login
      if (!this.emailError && !this.passwordError) {
        // Handle login logic here
      }
    },
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
</style>
