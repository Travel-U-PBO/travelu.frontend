<template>
  <div class="q-pa-lg flex flex-center">
    <div class="col q-pt-lg" style="width: 90%; background-color: ">
      <!-- Informasi Utama -->
      <div class="row" style="font-size: 1.5rem">
        <div class="col-7 text-align text-black">
          Bandung, Buah Batu -> Jakarta, Grogol <br />
          Monday, 28 October 2024 | 1 Passenger
        </div>

        <div
          class="col-5"
          style="display: flex; justify-content: flex-end; position: relative"
        >
          <br />
          <div class="dropdown-container">
            <button class="dropdown-btn" @click="toggleDropdown">
              Order Details
              <span class="dropdown-arrow"></span>
            </button>
            <ul v-if="isOpen" class="dropdown-menu">
              <li class="dropdown-item">Option 1</li>
              <li class="dropdown-item">Option 2</li>
              <li class="dropdown-item">Option 3</li>
            </ul>
          </div>
        </div>
      </div>

      <hr style="border: 1px solid black; margin: 10px 0" />

      <!-- Informasi Tiket -->
      <div
        class="row q-my-sm"
        style="background-color: #f0f0f9; font-size: 1.2rem"
      >
        <!-- Section 1 -->
        <div
          class="row q-my-sm"
          style="
            background-color: #d9d9d9;
            width: 100%;
            margin-left: 15px;
            margin-right: 15px;
          "
        >
          <div class="col-8" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Departure</div>
            <div class="value">Bandung, Buah Batu</div>
            <div class="span">Departure Date & Time</div>
            <div class="value">28 October 2024, At 09.00 WIB</div>
          </div>

          <div class="col" style="margin-left: 25px; margin-top: 10px">
            <div class="span">Destination</div>
            <div class="value">Jakarta, Grogol</div>
            <div class="span">Total Passenger</div>
            <div class="value">1 Passenger</div>
          </div>
        </div>

        <!-- Section 2 -->
        <div
          class="row q-my-sm"
          style="
            background-color: #d9d9d9;
            width: 100%;
            margin-left: 15px;
            margin-right: 15px;
          "
        >
          <div class="col-5" style="margin-left: 30px; margin-top: 10px">
            <div class="span">Ticket Code</div>
            <div class="span">Order's Name</div>
            <div class="span">Phone Number</div>
            <div class="span">Email</div>
          </div>
          <div class="col-5" style="margin-left: 30px; margin-top: 10px">
            <div class="value" style="font-size: 0.9rem">#6DV74BD</div>
            <div class="value" style="font-size: 0.9rem">Ayman Shafwan</div>
            <div class="value" style="font-size: 0.9rem">+62 812-487-860</div>
            <div class="value" style="font-size: 0.9rem">ayman40@gmail.com</div>
          </div>
        </div>

        <!-- Section 3 -->
        <div
          class="row q-my-sm"
          style="
            background-color: #d9d9d9;
            width: 100%;
            margin-left: 15px;
            margin-right: 15px;
          "
        >
          <div class="col-5" style="margin-left: 35px; margin-top: 10px">
            <div class="span">Passenger Name</div>
            <div class="value">Ayman Shafwan (+62 812-487-860)</div>
          </div>
          <div class="col" style="margin-left: 35px; margin-top: 10px">
            <div class="span">Seat Number</div>
            <div class="value">3</div>
          </div>
        </div>
      </div>

      <!-- Pilihan Pembayaran -->
      <div
        class="row q-my-sm"
        style="font-size: 2rem; background-color: #f0f0f9"
      >
        <div
          class="row q-my-sm"
          style="
            background-color: #d9d9d9;
            width: 100%;
            margin-left: 15px;
            margin-right: 15px;
          "
        >
          <div class="value" style="margin-left: 30px; margin-top: 7px">
            Select Payment Option
          </div>
        </div>
        <div
          class="row q-my-sm"
          style="width: 100%; margin-left: 15px; margin-right: 15px"
        >
          <div class="col-3"></div>
          <div class="col-3">
            <button class="payment-button">
              <img
                src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc"
                alt="BCA Mobile Logo"
                style="height: 2rem; width: 2rem"
              />
              <div class="span" style="font-weight: bold; margin-left: 5px">
                BCA Mobile
              </div>
            </button>

            <button class="payment-button">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjncA84sU06byuCilfGIOPnDn4tneadRkyAMV8tZQDF9FSsAUx44sxzBqDNMGiQH-fLlNo2RqVO_M8McztQ4NphEF4uYmJWi6rDU8NFGS0FTEpd0qO8edBqdCvj6heFVdKc8kw59b-7I9Lp2rhQck0H_Tlk4spVegEBPLJiS3CNEu_Fzp3hHND5XahgdQ/w320-h292/ShopeePay%20Logogram.png"
                alt="ShopeePay Logo"
                style="height: 2rem; width: 2rem"
              />
              <div class="span" style="font-weight: bold; margin-left: 5px">
                ShopeePay
              </div>
            </button>
          </div>
          <div class="col-3">
            <button class="payment-button">
              <img
                src="https://info.dipendajatim.go.id/landing/img/GoPay.png"
                alt="Gopay Logo"
                style="height: 2rem; width: 2rem"
              />
              <div class="span" style="font-weight: bold; margin-left: 5px">
                Gopay
              </div>
            </button>

            <button class="payment-button">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixWA3QFrcTOTrqj5Y1_ZNNeXYW8X1Kqz99E1OP8UQxRrqyk1f9yRRLgFk6ofhmpqS8y5bvtCVWudzR_SET7hhCJdPMoqcvaZ8f9OUcZWfr9Gh4O1blLklDOIUsa1E7762y0MkgspG5rq_KbsmVy_22IN_2UnZe922HhmDaD9AaDod1ow1xYpvQvVorbQ/w247-h320/Sea%20Bank%20Secondary%20Logo.png"
                alt="SeaBank Logo"
                style="height: 2rem; width: 2rem"
              />
              <div class="span" style="font-weight: bold; margin-left: 5px">
                SeaBank
              </div>
            </button>
          </div>
          <div class="col-3"></div>
        </div>
      </div>

      <div
        class="row q-my-sm"
        style="font-size: 2rem; background-color: #f0f0f9"
      >
        <div
          class="col-5"
          style="margin-left: 30px; margin-top: 15px; margin-bottom: 15px"
        >
          <div class="span" style="font-weight: bold">Ticket Price</div>
          <div class="span" style="font-weight: bold">Total Price</div>
        </div>

        <div
          class="col-5"
          style="margin-left: 30px; margin-top: 15px; margin-bottom: 15px"
        >
          <div class="value" style="font-size: 0.9rem">Rp 150,000</div>
          <div class="value" style="font-size: 0.9rem">Rp 150,000</div>
        </div>
      </div>

      <div
        class="row q-my-sm"
        style="font-size: 2rem; background-color: #f0f0f9"
      >
        <div
          class="terms-container"
          style="margin-left: 30px; margin-top: 15px; margin-bottom: 15px"
        >
          <div class="col" style="display: flex">
            <button class="custom-btn">
              Read Online Reservation Terms & Conditions
            </button>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" id="terms-checkbox" />
            <label for="terms-checkbox" class="span" style="margin-left: 5px"
              >Please check the box as proof that you comply with the terms &
              conditions imposed by the travel management.</label
            >
          </div>
        </div>
      </div>

      <div class="row" style="height: 5vh; display: flex; align-items: center">
        <div class="col" style="display: flex; justify-content: flex-end">
          <button class="custom-btn">Continue Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Mengontrol buka/tutup dropdown
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen; // Membalik status dropdown
    },
  },
};
</script>

<style scoped>
/* Gaya untuk container rounded rectangle */
.row.q-my-sm {
  border-radius: 15px; /* Membuat sudut membulat */
  overflow: hidden; /* Opsional, untuk memastikan isi container tetap rapi */
}

/* Gaya untuk label */
.span {
  color: #555; /* Warna abu-abu untuk label */
  font-size: 0.9rem; /* Ukuran font lebih kecil untuk label */
  font-weight: normal; /* Berat font normal */
}

/* Gaya untuk value */
.value {
  color: #333; /* Warna lebih gelap untuk value */
  font-size: 1.2rem; /* Ukuran font lebih besar untuk value */
  font-weight: bold; /* Berat font bold */
}

/* Tombol Dropdown */
.dropdown-container {
  position: relative;
}
.dropdown-btn {
  background-color: #a3b8d8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.dropdown-btn:hover {
  background-color: #91a8cc;
}
.dropdown-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  min-width: 200px;
  z-index: 1000;
}
.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Tombol Continue */
.custom-btn {
  background-color: #a3b8d8;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}
.custom-btn:hover {
  background-color: #91a8cc;
}
.payment-button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f0f0f9;
  font-size: 16px;
  transition: background-color 0.3s;
}
</style>
