<template>
  <div
    class="row justify-center"
    v-if="!successComplain"
    style="min-width: 100%"
  >
    <div class="col-12">
      <div class="row">
        <div class="col-12 row justify-center q-pt-xl">
          <div
            class="q-pa-xl"
            style="
              width: 60%;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            "
          >
            <div class="text-center mb-4">
              <h4 style="font-weight: 400; color: #000">
                <b>Berikan Pendapat anda</b>
              </h4>
              <h6>Kami sangat menghargai pendapat dan pengalaman anda</h6>
            </div>

            <!-- Rating Box -->
            <div class="mb-4 text-center q-pb-xl">
              <q-rating
                v-model="rating"
                :max="5"
                size="4em"
                color="primary"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
              />
            </div>

            <!-- Text Input for Judul Masukan -->
            <div class="mb-4 q-pb-sm">
              <q-input
                v-model="judulMasukan"
                label="Judul Masukan"
                placeholder="Masukkan judul di sini..."
                outlined
                style="border-radius: 10px"
              />
            </div>

            <!-- Textarea Box for Kritik dan Saran -->
            <div class="mb-4">
              <q-input
                v-model="feedback"
                label="Kritik dan Saran"
                placeholder="Type your feedback and suggestions here..."
                outlined
                type="textarea"
                rows="5"
                style="border-radius: 10px"
              />
            </div>

            <!-- Submit Button -->
            <div class="text-center q-pt-md">
              <q-btn
                label="Submit"
                color="primary"
                @click="submitFeedback"
                style="width: 50%"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 row justify-center text-center">
          <h5>Atau cek masukan anda!</h5>
        </div>
      </div>
      <!-- Search Box -->
      <div class="row">
        <div class="row col-12 justify-center q-px-xl">
          <div style="width: 60%">
            <div class="input-group row">
              <q-input
                v-model="searchQuery"
                placeholder="Masukkan Kode Complain anda"
                outlined
                style="border-radius: 10px 0 0 10px"
                class="col-11"
              />
              <q-btn
                icon="search"
                color="primary"
                @click="performSearch"
                class="col-1"
                style="border-radius: 0 10px 10px 0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VerifComplain
    v-if="successComplain"
    style="min-width: 100%"
    :title="judulMasukan"
    :id="responseId"
  />
</template>

<script>
import { api } from "boot/axios"; // Import axios
import { ref } from "vue";
import VerifComplain from "./VerifComplain.vue";

export default {
  components: {
    VerifComplain,
  },
  data() {
    return {
      rating: 0,
      feedback: "",
      judulMasukan: "", // Added title input data property
      searchQuery: "", // Added search query data property
      successComplain: false, // Reactive property to track success state
      responseId: null, // Added to store the response ID
    };
  },

  methods: {
    async submitFeedback() {
      // Prepare the data to be sent in the POST request
      const postData = {
        rating: this.rating,
        content: this.feedback, // Content from the textarea
        pelangganId: 1,
        status: 0, // Default status
        title: this.judulMasukan || "complain", // Use the title from the input or default to "complain"
      };

      try {
        // Make the POST request
        const response = await api.post("/cstickets", postData);
        console.log("Feedback submitted successfully:", response.data);
        // Reset the form fields
        this.rating = 0;
        this.feedback = "";
        this.successComplain = true; // Set success state to true
        this.responseId = response.data; // Store the ID from the response
        console.log(this.responseId, this.judulMasukan);
      } catch (error) {
        console.error("Error submitting feedback:", error);
        // Optionally, handle the error (e.g., show an error message)
      }
    },
    performSearch() {
      // Search logic here
      console.log("Search Query:", this.searchQuery);
      if (this.searchQuery) {
        this.$router.push(`/complain/${this.searchQuery}`);
      } else {
        console.log("Please enter a valid complaint code.");
      }
    },
  },
};
</script>

<style scoped>
.cover {
  background: #f7f7f7;
}
</style>
