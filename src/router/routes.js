const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'welcome', component: () => import('pages/IndexPage.vue') },
      { path: 'feature-list', component: () => import('pages/FeatureListPage.vue') },
      { path: 'data-master', component: () => import('pages/DataMasterPage.vue') },
      { path: 'pembayaran-nontunai', component: () => import('pages/IpaymuPaymentPage.vue') },
      { path: 'inventory', component: () => import('pages/InventoryPage.vue') },
      { path: 'pemesanan', component: () => import('pages/OrderingPage.vue') },
      { path: 'riwayat-pemesanan', component: () => import('pages/OrderingHistoryPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
