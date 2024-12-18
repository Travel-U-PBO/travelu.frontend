<template>
  <div class="container">
    <h3>Itinerary Kami</h3>
    <div class="row g-10">
      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img src="public/jakarta.jpg" class="card-img-top" alt="Jakarta" />
          <div class="card-body">
            <h5 class="card-title">Jakarta</h5>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img src="public/semarang.jpg" class="card-img-top" alt="Semarang" />
          <div class="card-body">
            <h5 class="card-title">Semarang</h5>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img src="public/bogor.jpg" class="card-img-top" alt="Bogor" />
          <div class="card-body">
            <h5 class="card-title">Bogor</h5>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img src="public/bandung.jpg" class="card-img-top" alt="Bandung" />
          <div class="card-body">
            <h5 class="card-title">Bandung</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h3>Tujuan Destinasi</h3>
    <div class="row g-4">
      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img
            src="public/dufan.jpg"
            class="card-img-top"
            alt="Dufan Taman Impian Ancol"
          />
          <div class="card-body">
            <h5>Dufan Taman Impian Ancol</h5>
            <p class="card-text">
              Dufan (Dunia Fantasi) merupakan taman hiburan di Ancol, Jakarta,
              yang menawarkan wahana seru dengan tema internasional seperti
              Eropa, Amerika, dan Asia. Cocok untuk segala usia, Dufan menjadi
              destinasi favorit rekreasi keluarga.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img
            src="public/lembang.jpg"
            class="card-img-top"
            alt="Lembang Park Zoo"
          />
          <div class="card-body">
            <h5 class="card-title">Lembang Park Zoo</h5>

            <p class="card-text">
              Lembang Park & Zoo adalah kebun binatang modern di Lembang,
              Bandung, yang menawarkan koleksi satwa beragam, fasilitas
              rekreasi, dan area bermain keluarga. Tempat ini juga dilengkapi
              kafe unik dan wahana edukasi interaktif.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img
            src="public/kebun_raya.jpg"
            class="card-img-top"
            alt="Kebun Raya Bogor"
          />
          <div class="card-body">
            <h5 class="card-title">Kebun Raya Bogor</h5>
            <p class="card-text">
              Kebun Raya Bogor adalah taman botani yang memiliki koleksi ribuan
              jenis tanaman dari seluruh dunia. Tempat ini terkenal sebagai
              pusat penelitian, wisata edukasi, dan rekreasi alam.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card h-100 d-flex flex-column">
          <img
            src="public/lawang_sewu.jpg"
            class="card-img-top"
            alt="Museum Lawang Sewu"
          />
          <div class="card-body">
            <h5 class="card-title">Museum Lawang Sewu</h5>
            <p class="card-text">
              Museum Lawang Sewu di Semarang adalah bangunan bersejarah dengan
              arsitektur kolonial Belanda yang ikonik. Dulunya kantor perusahaan
              kereta api, kini menjadi destinasi wisata edukasi yang sarat
              cerita sejarah dan budaya.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinasiWisata",
  // Tambahkan data, props, methods jika diperlukan
};
</script>

<style scoped>
.card-body {
  min-height: 200px; /* Atur tinggi minimum sesuai kebutuhan */
}
</style>
