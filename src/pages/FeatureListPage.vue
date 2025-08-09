<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Fitur Lengkap {{ appName }}
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Jelajahi semua fitur canggih yang tersedia untuk mengelola bisnis Anda dengan lebih efisien dan terintegrasi.
            </p>
            <div class="hero-buttons q-mt-lg">
              <q-btn 
                size="lg" 
                color="primary" 
                class="q-mr-md q-mb-sm hero-btn" 
                rounded
                :href="appDomain"
                target="_blank"
              >
                <q-icon name="launch" class="q-mr-sm" />
                Akses {{ appName }}
              </q-btn>
              <q-btn 
                size="lg" 
                outline 
                color="primary" 
                class="q-mb-sm hero-btn" 
                rounded
                @click="scrollToMainMenu"
              >
                <q-icon name="list" class="q-mr-sm" />
                Lihat Fitur
              </q-btn>
            </div>
          </div>
        </section>

        <!-- Menu Utama -->
        <section id="main-menu-section" class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Menu Utama</h2>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-6" 
              v-for="feature in mainMenuFeatures" 
              :key="feature.title"
            >
              <div class="feature-card shadcn-card q-pa-lg full-height">
                <div class="feature-icon q-mb-md">
                  <q-icon :name="feature.icon" size="48px" :color="feature.color" />
                </div>
                <h3 class="text-h6 text-weight-bold q-mb-sm feature-title">{{ feature.title }}</h3>
                <p class="text-body2 text-grey-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Master Data -->
        <section class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Master Data</h2>
          <p class="text-body1 text-grey-3 text-center q-mb-lg">
            Pusat untuk mengelola data dasar bisnis Anda
          </p>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-6" 
              v-for="feature in masterDataFeatures" 
              :key="feature.title"
            >
              <div class="feature-card shadcn-card q-pa-lg full-height">
                <div class="feature-icon q-mb-md">
                  <q-icon :name="feature.icon" size="48px" :color="feature.color" />
                </div>
                <h3 class="text-h6 text-weight-bold q-mb-sm feature-title">{{ feature.title }}</h3>
                <p class="text-body2 text-grey-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Inventaris -->
        <section class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Manajemen Inventaris</h2>
          <p class="text-body1 text-grey-3 text-center q-mb-lg">
            Kelola stok barang dengan akurasi tinggi dan kontrol penuh
          </p>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-6" 
              v-for="feature in inventoryFeatures" 
              :key="feature.title"
            >
              <div class="feature-card shadcn-card q-pa-lg full-height">
                <div class="feature-icon q-mb-md">
                  <q-icon :name="feature.icon" size="48px" :color="feature.color" />
                </div>
                <h3 class="text-h6 text-weight-bold q-mb-sm feature-title">{{ feature.title }}</h3>
                <p class="text-body2 text-grey-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Laporan -->
        <section class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Laporan Bisnis</h2>
          <p class="text-body1 text-grey-3 text-center q-mb-lg">
            Analisis mendalam untuk mengoptimalkan kinerja bisnis Anda
          </p>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6" 
              v-for="feature in reportFeatures" 
              :key="feature.title"
            >
              <div class="feature-card shadcn-card q-pa-lg full-height">
                <div class="feature-icon q-mb-md">
                  <q-icon :name="feature.icon" size="48px" :color="feature.color" />
                </div>
                <h3 class="text-h6 text-weight-bold q-mb-sm feature-title">{{ feature.title }}</h3>
                <p class="text-body2 text-grey-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Informasi Akun -->
        <section class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Informasi Akun & Aplikasi</h2>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-4" 
              v-for="feature in accountFeatures" 
              :key="feature.title"
            >
              <div class="feature-card shadcn-card q-pa-lg full-height">
                <div class="feature-icon q-mb-md">
                  <q-icon :name="feature.icon" size="48px" :color="feature.color" />
                </div>
                <h3 class="text-h6 text-weight-bold q-mb-sm feature-title">{{ feature.title }}</h3>
                <p class="text-body2 text-grey-3">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            Siap Menggunakan Semua Fitur?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Mulai eksplorasi fitur lengkap {{ appName }} dan rasakan kemudahan mengelola bisnis Anda
          </p>
          <div class="cta-buttons q-gutter-md">
            <q-btn 
              size="lg" 
              color="primary" 
              class="cta-btn" 
              rounded
              :href="appDomain"
              target="_blank"
            >
              <q-icon name="launch" class="q-mr-sm" />
              Mulai Sekarang
            </q-btn>
            <q-btn 
              size="lg" 
              outline
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToMainMenu"
            >
              <q-icon name="arrow_upward" class="q-mr-sm" />
              Kembali ke Atas
            </q-btn>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppConfig } from 'src/composables/useAppConfig'
import { ref } from 'vue'

const { appName, appDomain } = useAppConfig()

// Menu Utama Features
const mainMenuFeatures = ref([
  {
    title: 'Dashboard',
    description: 'Halaman utama yang menampilkan ringkasan data penting seperti penjualan hari ini, laba, stok terlaris, dan grafik kinerja bisnis. Pusat informasi cepat untuk monitoring bisnis Anda.',
    icon: 'dashboard',
    color: 'primary'
  },
  {
    title: 'Pemesanan',
    description: 'Kelola pesanan pelanggan dengan mudah. Membuat pesanan baru, melihat status pesanan yang sedang berlangsung, dan memproses pesanan yang sudah selesai.',
    icon: 'shopping_cart',
    color: 'green'
  },
  {
    title: 'Riwayat Penjualan',
    description: 'Tampilkan daftar semua transaksi penjualan yang telah terjadi. Lihat detail setiap penjualan, tanggal, item yang dibeli, dan total pembayaran dengan mudah.',
    icon: 'receipt_long',
    color: 'blue'
  },
  {
    title: 'Riwayat Invoice SaaS',
    description: 'Bagian khusus untuk melihat riwayat tagihan atau faktur layanan (SaaS) yang digunakan oleh aplikasi POS. Kelola langganan dan pembayaran dengan transparan.',
    icon: 'receipt',
    color: 'orange'
  }
])

// Master Data Features
const masterDataFeatures = ref([
  {
    title: 'Kategori Produk',
    description: 'Kelola kategori produk dengan mudah. Buat pengelompokan seperti Makanan, Minuman, Elektronik, Pakaian untuk memudahkan pencarian dan pengaturan produk.',
    icon: 'category',
    color: 'purple'
  },
  {
    title: 'Produk',
    description: 'Kelola daftar semua produk yang dijual. Tambahkan, edit, atau hapus produk dengan detail lengkap seperti nama, harga, kode SKU, dan stok awal.',
    icon: 'inventory_2',
    color: 'teal'
  },
  {
    title: 'Pelanggan',
    description: 'Kelola data pelanggan secara komprehensif. Simpan nama, kontak, riwayat pembelian, dan informasi relevan untuk program loyalitas dan pemasaran.',
    icon: 'people',
    color: 'blue'
  },
  {
    title: 'Supplier',
    description: 'Kelola data pemasok atau supplier dengan lengkap. Simpan informasi kontak, daftar produk yang disuplai, dan riwayat transaksi dengan setiap supplier.',
    icon: 'local_shipping',
    color: 'green'
  }
])

// Inventory Features
const inventoryFeatures = ref([
  {
    title: 'Ringkasan Inventaris',
    description: 'Tampilkan ringkasan stok tersedia, produk yang hampir habis, atau produk kadaluarsa. Dapatkan gambaran cepat tentang kondisi inventaris bisnis Anda.',
    icon: 'summarize',
    color: 'primary'
  },
  {
    title: 'Riwayat Pergerakan',
    description: 'Catat semua pergerakan stok baik penambahan (pembelian dari supplier), pengurangan (penjualan), atau penyesuaian. Penting untuk audit dan akurasi stok.',
    icon: 'timeline',
    color: 'orange'
  },
  {
    title: 'Penerimaan Barang',
    description: 'Catat barang yang baru diterima dari supplier. Sistem akan otomatis menambah jumlah stok produk yang bersangkutan untuk akurasi inventaris.',
    icon: 'move_to_inbox',
    color: 'green'
  },
  {
    title: 'Penyesuaian Stok',
    description: 'Lakukan koreksi manual pada jumlah stok. Berguna ketika terjadi kesalahan hitung, barang rusak, atau kehilangan untuk menjaga akurasi data.',
    icon: 'tune',
    color: 'blue'
  }
])

// Report Features
const reportFeatures = ref([
  {
    title: 'Laporan Laba Kotor',
    description: 'Hitung dan tampilkan laporan laba kotor, yaitu selisih antara total pendapatan penjualan dan total harga pokok penjualan (HPP). Analisis profitabilitas bisnis Anda.',
    icon: 'trending_up',
    color: 'green'
  },
  {
    title: 'Laporan Nilai Stok',
    description: 'Hitung dan tampilkan total nilai dari semua stok barang yang tersedia. Berguna untuk mengetahui nilai aset inventaris dan perencanaan keuangan.',
    icon: 'account_balance',
    color: 'blue'
  }
])

// Account Features
const accountFeatures = ref([
  {
    title: 'Status Langganan',
    description: 'Informasi lengkap tentang paket langganan yang sedang digunakan, status aktivasi, dan tanggal berakhir masa berlaku. Kelola subscription dengan mudah.',
    icon: 'subscription',
    color: 'primary'
  },
  {
    title: 'Github Repository',
    description: 'Akses langsung ke repositori Github aplikasi. Berguna untuk developer atau pengguna yang ingin melihat kode sumber aplikasi jika bersifat open-source.',
    icon: 'code',
    color: 'grey'
  },
  {
    title: 'Dokumentasi',
    description: 'Akses ke dokumentasi aplikasi yang lengkap. Berisi panduan penggunaan, penjelasan fitur detail, dan cara mengatasi berbagai masalah yang mungkin terjadi.',
    icon: 'menu_book',
    color: 'orange'
  }
])

const scrollToMainMenu = () => {
  const element = document.getElementById('main-menu-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inter:400,700&display=swap');
body, .q-page {
  font-family: 'Inter', Arial, sans-serif;
  background: #090a0f !important;
  color: #e0e7ef;
}
.bg-primary {
  background: #3b82f6 !important;
}
.text-primary {
  color: #3b82f6 !important;
}

/* Card Styles */
.shadcn-card {
  background: linear-gradient(135deg, #181a20 0%, #1e2026 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 16px;
  box-shadow: 
    0 4px 20px rgba(59, 130, 246, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.shadcn-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  opacity: 0.5;
}

.shadcn-card:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 30px rgba(59, 130, 246, 0.15),
    0 2px 6px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

.shadcn-title {
  background: linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1e2026 0%, #252a33 50%, #181a20 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  background: linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd, #ddd6fe);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

.hero-subtitle {
  color: #94a3b8;
  line-height: 1.6;
}

.hero-btn {
  min-width: 180px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Feature Cards */
.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1a1d23 0%, #20252c 100%);
  transition: all 0.3s ease;
  min-height: 200px;
}

.feature-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 12px 40px rgba(59, 130, 246, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  text-align: center;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-shrink: 0;
}

.feature-title {
  color: #e2e8f0;
  flex-shrink: 0;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1e2026 0%, #252a33 50%, #2d3748 100%);
  border: 1px solid rgba(59, 130, 246, 0.4);
}

.cta-btn {
  min-width: 200px;
  font-size: 16px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.cta-btn:hover {
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Contact Icons */
.text-green { color: #10b981 !important; }
.text-blue { color: #06b6d4 !important; }
.text-orange { color: #f97316 !important; }
.text-purple { color: #8b5cf6 !important; }
.text-teal { color: #14b8a6 !important; }

/* Utility Classes */
.full-height {
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .hero-section {
    padding: 2rem 1.5rem !important;
  }
  
  .feature-card {
    min-height: 180px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-btn {
    min-width: 150px;
    width: 100%;
    margin-bottom: 12px;
    margin-right: 0 !important;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cta-btn {
    width: 100%;
    margin-bottom: 12px;
  }
  
  .hero-section {
    padding: 1.5rem 1rem !important;
  }
  
  .feature-card {
    margin-bottom: 16px;
    min-height: 160px;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-icon .q-icon {
    font-size: 36px !important;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .shadcn-card {
    padding: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .feature-card {
    min-height: 140px;
  }
  
  .feature-icon {
    width: 50px;
    height: 50px;
  }
  
  .feature-icon .q-icon {
    font-size: 30px !important;
  }
  
  .cta-btn {
    min-width: 160px;
    width: 100%;
  }
}
</style>
