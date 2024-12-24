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
              <h4 style="font-weight: 400; color: #000">
                <b>{{ title }}</b>
              </h4>
              <h6>Oleh : {{ user }}</h6>
            </div>

            <div class="text-left col-mb-sm">
              <h6>{{ content }}</h6>
            </div>
            <div class="text-left col-mb-sm">
              <h6>
                Status: <span>{{ status }}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.cover {
  background: #f7f7f7;
}
</style>
