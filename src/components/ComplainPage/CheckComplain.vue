<template>
  <div class="row justify-center" style="min-width: 100%">
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
              <H3 style="font-weight: 400; color: #000">
                <b>Status Complain Anda</b>
              </H3>
              <h4 style="font-weight: 400; color: #000">
                <b>{{ title }}</b>
              </h4>
              <div class="rating">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  :class="{ filled: star <= rating }"
                  >★</span
                >
              </div>
              <h6>Oleh : {{ user }}</h6>
            </div>

            <div class="text-left col-mb-sm">
              <h6>Konten: {{ content }}</h6>
            </div>
            <div class="text-left col-mb-sm">
              <h6 v-if="statusMessage == 'UNRESOLVED'" style="color: red">
                Status: <span>{{ statusMessage }}</span>
              </h6>
              <h6 v-if="statusMessage == 'RESOLVED'" style="color: green">
                Status: <span>{{ statusMessage }}</span>
              </h6>
              <h6 v-if="statusMessage == 'PENDING'" style="color: yellow">
                Status: <span>{{ statusMessage }}</span>
              </h6>
            </div>
            <div class="text-left col-mb-sm">
              <h6 v-if="respon">Respons: {{ respon }}</h6>
            </div>
            <div class="text-left col-mb-sm" v-if="pemesananId !== null">
              <h6>Pesanan: {{ pemesananId }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "boot/axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id; // Get the ID from the URL
    const ticket = ref(null);
    const user = ref("");
    const statusMessage = ref("");

    const fetchTicket = async () => {
      try {
        const response = await api.get(`/cstickets/${id}`);
        ticket.value = response.data;
        user.value = await fetchUser(ticket.value.pelangganId);
        statusMessage.value = response.data.status;
      } catch (error) {
        console.error("Error fetching ticket:", error);
      }
    };

    const fetchUser = async (userId) => {
      try {
        const response = await api.get(`/pelanggans/${userId}`);
        return response.data.name;
      } catch (error) {
        console.error("Error fetching user:", error);
        return "";
      }
    };

    onMounted(() => {
      fetchTicket();
    });

    return {
      title: computed(() => ticket.value?.title || ""),
      content: computed(() => ticket.value?.content || ""),
      rating: computed(() => ticket.value?.rating || 0),
      respon: computed(() => ticket.value?.response || 0),
      pemesananId: computed(() => ticket.value?.pemesananId),
      user,
      statusMessage,
    };
  },
};
</script>

<style scoped>
.cover {
  background: #f7f7f7;
}
.rating {
  color: gold;
}
.star {
  font-size: 20px;
}
.star.filled {
  color: gold;
}
</style>
