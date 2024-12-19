<template>
  <div
    class="row q-my-sm"
    style="
      background-color: #f0f0f0;
      font-size: 1.2rem;
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 100px;
      margin-bottom: 100px;
    "
  >
    <div
      class="row q-my-sm"
      style="
        background-color: #d9d9d9;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
      "
    >
      <div
        class="col q-my-sm"
        style="
          background-color: #d9d9d9;
          width: 100%;
          margin-left: 15px;
          margin-right: 15px;
          text-align: center;
        "
      >
        <div class="value" style="font-size: 1.5rem">
          Payment Status Details
        </div>
      </div>
    </div>
    <div
      class="row q-my-sm"
      style="
        background-color: #f0f0f0;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
      "
    >
      <div
        class="col q-my-sm"
        style="
          background-color: #f0f0f0;
          width: 100%;
          margin-left: 15px;
          margin-right: 15px;
        "
      >
        <div class="span" style="font-weight: bold">Ticket Code :</div>
        <div class="value" style="font-size: 0.9rem">#6DV74BD</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Code :</div>
        <div class="value" style="font-size: 0.9rem">13574261899</div>
      </div>
      <div
        class="col q-my-sm"
        style="
          background-color: #f0f0f0;
          width: 100%;
          margin-left: 15px;
          margin-right: 15px;
        "
      >
        <div class="span" style="font-weight: bold">Total Payment :</div>
        <div class="value" style="font-size: 0.9rem">Rp 150,000</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Method :</div>
        <div class="value" style="font-size: 0.9rem">BCA Virtual Account</div>
      </div>
      <div
        class="col q-my-sm"
        style="
          background-color: #f0f0f0;
          width: 100%;
          margin-left: 15px;
          margin-right: 15px;
        "
      >
        <div class="span" style="font-weight: bold">Payment Status :</div>
        <div class="value" style="font-size: 0.9rem">Failed</div>
        <br />

        <div class="span" style="font-weight: bold">Payment Deadline :</div>
        <div class="value" style="font-size: 0.9rem">2024-10-10 00:08</div>
      </div>
    </div>
    <div
      class="row q-my-sm"
      style="
        background-color: #d9d9d9;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 15px;
        margin-bottom: 5px;
      "
    >
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div
          class="value"
          style="font-size: 1rem; color: red; text-align: left"
        >
          Note: Sorry, your payment was not successful.
        </div>
        <div class="value" style="font-size: 1rem; text-align: left">
          Please make a repayment with the VA that has been sent in the email.
        </div>
      </div>
    </div>

    <div
      class="row q-my-sm"
      style="
        background-color: #d9d9d9;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
      "
    >
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="span" style="font-weight: bold">Departure</div>
        <div class="value" style="font-size: 0.9rem">Bandung, Buah Batu</div>
        <br />

        <div class="span" style="font-weight: bold">Departure Date & Time</div>
        <div class="value" style="font-size: 0.9rem">
          28 October 2024, At 09.00 WIB
        </div>
      </div>
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="span" style="font-weight: bold">Destination</div>
        <div class="value" style="font-size: 0.9rem">Jakarta, Grogol</div>
        <br />

        <div class="span" style="font-weight: bold">Total Passenger</div>
        <div class="value" style="font-size: 0.9rem">1 Passenger</div>
      </div>
    </div>
    <div
      class="row q-my-sm"
      style="
        background-color: #d9d9d9;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
      "
    >
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="passenger-info" style="display: flex">
          <div class="span" style="font-weight: bold">Passenger Name :</div>
          <div class="value q-pl-sm" style="font-size: 0.9rem">
            Ayman Shafwan (+62 812-487-860)
          </div>
        </div>
      </div>
      <div
        class="col q-my-sm"
        style="width: 100%; margin-left: 15px; margin-right: 15px"
      >
        <div class="passenger-info" style="display: flex">
          <div class="span" style="font-weight: bold">Seat Number :</div>
          <div class="value q-pl-sm" style="font-size: 0.9rem" q-pl-sm>3</div>
        </div>
      </div>
    </div>
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
