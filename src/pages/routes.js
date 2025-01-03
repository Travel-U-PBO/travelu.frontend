const routes = [
  {
    path: "/",
    component: () => import("layouts/UnauthenticatedLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "book", component: () => import("pages/IndexPage.vue") },
      { path: "complain", component: () => import("pages/ComplainPage.vue") },
      {
        path: "complain/:id",
        component: () => import("pages/CheckComplainPage.vue"),
      },
      {
        path: "itinerari/:id/:name",
        component: () => import("pages/ItinerariPage.vue"),
      },
      {
        path: "itinerari/:id",
        component: () => import("pages/ItinerariPage.vue"),
      },
      {
        path: "destinasi/:id/:name",
        component: () => import("pages/DestinasiPage.vue"),
      },
      {
        path: "destinasi/:id",
        component: () => import("pages/DestinasiPage.vue"),
      },
      {
        path: "paymentmethod",
        component: () => import("pages/PaymentMethodPage.vue"),
      },
      {
        path: "waitingforpayment",
        component: () => import("pages/WaitingForPaymentPage.vue"),
      },
      {
        path: "paymentsuccess",
        component: () => import("pages/PaymentStatusSuccessPage.vue"),
      },
      {
        path: "paymentfailed",
        component: () => import("pages/PaymentStatusFailedPage.vue"),
      },
      {
        path: "order",
        component: () => import("pages/OrderTicketPage.vue"),
      },
      {
        path: "userdetail",
        component: () => import("pages/UserDetailPage.vue"),
      },
      {
        path: "orderdetail",
        component: () => import("pages/orderDetailPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { authOnly: true },
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "book", component: () => import("pages/IndexPage.vue") },
      { path: "complain", component: () => import("pages/ComplainPage.vue") },
      {
        path: "complain/:id",
        component: () => import("pages/CheckComplainPage.vue"),
      },
      {
        path: "itinerari/:id",
        component: () => import("pages/ItinerariPage.vue"),
      },
      {
        path: "paymentmethod",
        component: () => import("pages/PaymentMethodPage.vue"),
      },
      {
        path: "waitingforpayment",
        component: () => import("pages/WaitingForPaymentPage.vue"),
      },
      {
        path: "paymentsuccess",
        component: () => import("pages/PaymentStatusSuccessPage.vue"),
      },
      {
        path: "paymentfailed",
        component: () => import("pages/PaymentStatusFailedPage.vue"),
      },
      {
        path: "order",
        component: () => import("pages/OrderTicketPage.vue"),
      },
      {
        path: "userdetail",
        component: () => import("pages/UserDetailPage.vue"),
      },
      {
        path: "orderdetail",
        component: () => import("pages/orderDetailPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/auth/pages/IdentityPasswordLoginPage.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/auth/pages/IdentityPasswordRegisterPage.vue"),
      },
    ],
  },
  {
    path: "/password",
    component: () => import("layouts/PassLayout.vue"),
    children: [{ path: "", component: () => import("pages/PassPage.vue") }],
  },
  {
    path: "/verified",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/VerifiedPage.vue") }],
  },
  {
    path: "/otp",
    component: () => import("layouts/OtpLayout.vue"),
    children: [{ path: "", component: () => import("pages/OtpPage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
