<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Panduan Data Master {{ appName }}
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Pelajari cara mengelola data master dengan benar untuk memaksimalkan fungsi sistem POS Anda. 
              Mulai dari kategori produk hingga data supplier yang lengkap.
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
                Mulai Setup Data
              </q-btn>
              <q-btn 
                size="lg" 
                outline 
                color="primary" 
                class="q-mb-sm hero-btn" 
                rounded
                @click="scrollToGuide"
              >
                <q-icon name="menu_book" class="q-mr-sm" />
                Lihat Panduan
              </q-btn>
            </div>
          </div>
        </section>

        <!-- Introduction -->
        <section id="guide-section" class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="text-center q-mb-lg">
              <h2 class="text-h4 text-weight-bold shadcn-title q-mb-md">
                🎯 Pentingnya Data Master
              </h2>
              <p class="text-body1 text-grey-3">
                Data master adalah fondasi utama sistem POS Anda. Dengan mengelola data master yang benar, 
                Anda dapat memastikan operasional bisnis berjalan lancar, laporan akurat, dan proses bisnis yang efisien.
              </p>
            </div>
          </div>
        </section>

        <!-- Step 1: Kategori Produk -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="folder" size="48px" color="purple" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  1. 🗂️ Kategori Produk
                </h2>
                <p class="text-body1 text-grey-3">
                  Langkah awal yang harus kamu lakukan adalah membuat daftar kategori produk.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/kategori.png" 
                  alt="Screenshot Kategori Produk"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Setup Kategori:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="label" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Nama Kategori yang Jelas:</strong> Buat nama kategori yang mudah dipahami, 
                  seperti "Minuman", "Elektronik", "Alat Tulis", dll.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="description" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Deskripsi Tambahan:</strong> Setiap kategori bisa diberikan deskripsi 
                  tambahan jika dibutuhkan untuk memberikan penjelasan lebih detail.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="business" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Relasi dengan Tenant:</strong> Pastikan kategori ini dimiliki oleh 
                  tenant tertentu (relasi dengan bisnis/toko yang menggunakan Yualan).
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="blue" class="q-mr-sm" />
              <span class="text-body2">
                Kategori ini akan digunakan untuk mengelompokkan produk dan memudahkan 
                pencarian serta pelaporan.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 2: Produk -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="inventory_2" size="48px" color="teal" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  2. 🛒 Produk
                </h2>
                <p class="text-body1 text-grey-3">
                  Setelah kategori disiapkan, kamu bisa mulai menginput data produk.
                </p>
              </div>
            </div>
            
            <!-- Screenshot placeholder -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/produk.png" 
                  alt="Screenshot Produk"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Setup Produk:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="title" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Nama Produk:</strong> Tentukan nama produk yang spesifik seperti 
                  "Air Mineral 600ml", "Printer Canon", dll.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="qr_code" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Kode SKU:</strong> Jika memungkinkan, tambahkan kode SKU agar 
                  setiap produk bisa dikenali secara unik.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Harga Jual & Harga Pokok:</strong> Masukkan harga jual dan juga 
                  harga pokok (cost price) untuk kebutuhan laporan laba rugi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Stok & Satuan:</strong> Cantumkan jumlah stok awal jika sudah tersedia, 
                  dan satuan produk (misalnya pcs, liter, kg).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="category" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Kategori Produk:</strong> Produk bisa dikaitkan ke kategori 
                  yang sudah dibuat sebelumnya.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="image" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Detail Tambahan:</strong> Tambahkan informasi lain seperti gambar produk 
                  (URL atau path file), deskripsi, apakah produk merupakan makanan, serta bahan-bahannya jika relevan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="warning" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Stok Minimum:</strong> Jika kamu ingin ada peringatan stok minimum, 
                  isikan batas minimum ini juga.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Step 3: Pelanggan -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="people" size="48px" color="blue" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  3. 👥 Pelanggan (Customers)
                </h2>
                <p class="text-body1 text-grey-3">
                  Data pelanggan sangat berguna untuk pencatatan histori transaksi.
                </p>
              </div>
            </div>
            
            <!-- Screenshot placeholder -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/customer.png" 
                  alt="Screenshot Data Pelanggan"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Setup Pelanggan:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="person" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Nama Pelanggan:</strong> Isikan nama pelanggan dengan lengkap 
                  untuk memudahkan identifikasi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="contact_phone" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Informasi Kontak:</strong> Tambahkan nomor telepon, email, 
                  dan alamat jika tersedia untuk komunikasi dan pengiriman.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="schedule" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Input Fleksibel:</strong> Data ini bisa diisi di awal atau 
                  otomatis tercatat ketika pelanggan bertransaksi nanti.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Step 4: Supplier -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="local_shipping" size="48px" color="green" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  4. 🧾 Pemasok (Supplier)
                </h2>
                <p class="text-body1 text-grey-3">
                  Untuk mendukung manajemen pembelian dan inventaris, kamu perlu mendata supplier.
                </p>
              </div>
            </div>
            
            <!-- Screenshot placeholder -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/supplier.png" 
                  alt="Screenshot Data Supplier"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Setup Supplier:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="business" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Nama Pemasok:</strong> Masukkan nama pemasok yang jelas 
                  (misal: "PT Sumber Makmur").
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="contact_phone" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Informasi Kontak:</strong> Tambahkan kontak utama, nomor telepon, 
                  email, dan alamat untuk komunikasi bisnis.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="note" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Catatan Khusus:</strong> Jika perlu, catat juga informasi atau 
                  catatan khusus terkait supplier tersebut.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="link" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Relasi Tenant:</strong> Semua data supplier ini terhubung ke 
                  tenant (bisnis yang menggunakan sistem).
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tips & Best Practices -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">
              💡 Tips & Best Practices
            </h2>
            
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="check_circle" color="green" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">✅ Yang Harus Dilakukan</h4>
                  <ul class="tips-list">
                    <li>Buat kategori yang konsisten dan mudah dipahami</li>
                    <li>Gunakan kode SKU yang sistematis</li>
                    <li>Update harga dan stok secara berkala</li>
                    <li>Backup data master secara rutin</li>
                    <li>Verifikasi data sebelum input massal</li>
                  </ul>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="warning" color="orange" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">⚠️ Yang Harus Dihindari</h4>
                  <ul class="tips-list">
                    <li>Membuat kategori yang terlalu umum atau terlalu spesifik</li>
                    <li>Duplikasi data produk atau pelanggan</li>
                    <li>Mengabaikan stok minimum untuk produk penting</li>
                    <li>Tidak mengupdate informasi supplier</li>
                    <li>Input data tanpa validasi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            🎯 Siap Setup Data Master?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Mulai setup data master {{ appName }} dengan mengikuti panduan di atas. 
            Data master yang lengkap adalah kunci kesuksesan bisnis Anda!
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
              Setup Sekarang
            </q-btn>
            <q-btn 
              size="lg" 
              outline
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToGuide"
            >
              <q-icon name="arrow_upward" class="q-mr-sm" />
              Kembali ke Panduan
            </q-btn>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppConfig } from 'src/composables/useAppConfig'

const { appName, appDomain } = useAppConfig()

const scrollToGuide = () => {
  const element = document.getElementById('guide-section')
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

/* Guide Styles */
.guide-list {
  margin: 0;
}

.guide-item {
  display: flex;
  align-items: flex-start;
  background: rgba(59, 130, 246, 0.05);
  border-left: 3px solid rgba(59, 130, 246, 0.3);
  padding: 16px;
  border-radius: 8px;
}

.guide-icon {
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

.guide-content {
  color: #e2e8f0;
  line-height: 1.6;
}

.guide-content strong {
  color: #60a5fa;
}

/* Screenshot Styles */
.screenshot-container {
  text-align: center;
}

.screenshot-placeholder {
  background: rgba(59, 130, 246, 0.05);
  border: 2px dashed rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
}

.screenshot-placeholder p {
  margin: 8px 0 0 0;
  font-size: 14px;
}

.screenshot-image {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.05);
}

.screenshot-img {
  width: 100%;
  height: auto;
  display: block;
  max-width: 100%;
}

/* Info Box */
.info-box {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
}

/* Tips Cards */
.tips-card {
  background: linear-gradient(135deg, #1a1d23 0%, #20252c 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  height: 100%;
}

.tips-list {
  margin: 0;
  padding-left: 20px;
  color: #cbd5e1;
}

.tips-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* Quick Action Buttons */
.quick-action-btn {
  min-height: 120px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.quick-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1e2026 0%, #252a33 50%, #2d3748 100%);
  border: 1px solid rgba(59, 130, 246, 0.4);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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

/* Step Number */
.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  border: 2px solid rgba(59, 130, 246, 0.3);
}

/* Color Utilities */
.text-green { color: #10b981 !important; }
.text-blue { color: #06b6d4 !important; }
.text-orange { color: #f97316 !important; }
.text-purple { color: #8b5cf6 !important; }
.text-teal { color: #14b8a6 !important; }

/* Utility Classes */
.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .hero-section {
    padding: 2rem 1.5rem !important;
  }
  
  .step-number {
    width: 60px;
    height: 60px;
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
  
  .shadcn-card {
    padding: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .step-number {
    width: 50px;
    height: 50px;
  }
  
  .step-number .q-icon {
    font-size: 32px !important;
  }
  
  .quick-action-btn {
    min-height: 100px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .guide-item {
    flex-direction: column;
    text-align: left;
  }
  
  .guide-icon {
    margin-bottom: 8px;
    margin-right: 0;
  }
  
  .screenshot-placeholder {
    padding: 20px;
  }
  
  .tips-card {
    margin-bottom: 1rem !important;
  }
  
  .cta-btn {
    min-width: 160px;
  }
  
  .quick-action-btn {
    min-height: 80px;
  }
}
</style>
