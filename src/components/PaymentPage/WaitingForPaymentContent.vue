<template>
  <div
    class="row q-my-xl q-mx-xl"
    style="
      background-color: white;
      font-size: 1.2rem;
      border: 1px solid #0077b6;
      border-radius: 5px;
    "
  >
    <div
      class="row"
      style="background-color: #0077b6; width: 100%; border-radius: 5px"
    >
      <div
        class="col q-my-sm"
        style="margin-left: 15px; margin-right: 15px; text-align: center"
      >
        <div class="value" style="font-size: 1.5rem; color: white">
          Ticket Checkout Successful!
        </div>
        <div class="span" style="color: white">
          Please complete your payment before the payment deadline.
        </div>
      </div>
    </div>
    <div
      class="row q-my-sm"
      style="
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
      "
    >
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="span" style="font-weight: bold">Ticket Code :</div>
        <div class="value" style="font-size: 0.9rem">#6DV74BD</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Code :</div>
        <div class="value" style="font-size: 0.9rem">13574261899</div>
      </div>
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="span" style="font-weight: bold">Total Payment :</div>
        <div class="value" style="font-size: 0.9rem">Rp 150,000</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Method :</div>
        <div class="value" style="font-size: 0.9rem">BCA Virtual Account</div>
      </div>
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="span" style="font-weight: bold">Payment Status :</div>
        <div class="value" style="font-size: 0.9rem">Waiting for Payment</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Deadline :</div>
        <div class="value" style="font-size: 0.9rem">2024-10-10 00:08</div>
      </div>
    </div>
  </div>
  <div
    class="value"
    style="font-size: 1rem; color: red; text-align: center; margin-bottom: 15px"
  >
    Note: Make sure to check your email because we send the payment code and
    electronic ticket to your email.
  </div>
  <div
    class="row q-my-sm"
    style="
      font-size: 1.2rem;
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    "
  >
    <button
      class="custom-btn"
      style="
        background-color: #0077b6;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      "
    >
      <img
        src="https://cdn2.iconfinder.com/data/icons/dark-action-bar-2/96/refresh-1024.png"
        style="height: 2rem; width: 2rem"
      />
      <div
        class="value"
        style="font-size: 1rem; text-align: center; color: white"
      >
        Refresh Detail Checkout
      </div>
    </button>

    <button
      class="custom-btn"
      style="
        background-color: #0077b6;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      "
    >
      <img
        src="https://cdn0.iconfinder.com/data/icons/zoldo-miscellaneous-004/64/ticket-1024.png"
        style="height: 2rem; width: 2rem"
      />
      <div
        class="value"
        style="font-size: 1rem; text-align: center; color: white"
      >
        Order Details
      </div>
    </button>
  </div>
</template>

<style scoped>
/* Gaya untuk container rounded rectangle */
.row.q-my-sm {
  border-radius: 10px; /* Membuat sudut membulat */
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
</style>
