<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Panduan Manajemen Inventaris
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Pelajari cara mengelola inventaris dan stok produk di {{ appName }}. 
              Kelola penerimaan barang, penyesuaian stok, dan pantau pergerakan inventaris dengan mudah.
            </p>
            <div class="hero-buttons q-mt-lg">
              <q-btn 
                size="lg" 
                color="primary" 
                class="q-mr-md q-mb-sm hero-btn" 
                rounded
                @click="scrollToGuide"
              >
                <q-icon name="inventory" class="q-mr-sm" />
                Mulai Kelola Inventaris
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
                🎯 Mengapa Manajemen Inventaris Penting?
              </h2>
              <p class="text-body1 text-grey-3">
                Sistem manajemen inventaris {{ appName }} membantu Anda melacak stok produk secara real-time, 
                mencatat penerimaan barang, melakukan penyesuaian stok, dan memantau pergerakan inventaris 
                untuk memastikan bisnis Anda berjalan lancar.
              </p>
            </div>
          </div>
        </section>

        <!-- Step 1: Penerimaan Barang -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="inventory_2" size="48px" color="blue" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  1. � Penerimaan Barang
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini digunakan untuk mencatat penambahan stok produk ke dalam inventaris toko, biasanya setelah Anda membeli barang dari supplier.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/penerimaan.png" 
                  alt="Screenshot Penerimaan Barang"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Fitur-fitur Penerimaan Barang:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="category" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Produk:</strong> Pilih produk yang akan Anda terima dari daftar dropdown. 
                  Informasi stok saat ini dan harga pokok produk (HPP) akan ditampilkan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="add" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Kuantitas Diterima:</strong> Masukkan jumlah unit produk yang Anda terima.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Harga Pokok per Unit (saat ini):</strong> Sistem akan menampilkan harga pokok produk saat ini. 
                  Harga ini akan digunakan untuk menghitung rata-rata tertimbang harga pokok produk (weighted average cost) 
                  jika ada perbedaan harga pokok dari penerimaan sebelumnya.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="business" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Supplier (Opsional):</strong> Masukkan nama supplier dari mana Anda menerima barang.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="description" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Alasan Penerimaan (Opsional):</strong> Berikan keterangan singkat, misalnya "Pembelian".
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="save" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Catat Penerimaan:</strong> Klik tombol ini untuk menyimpan data dan memperbarui stok 
                  serta harga pokok rata-rata produk.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="blue" class="q-mr-sm" />
              <span class="text-body2">
                Pastikan untuk mencatat setiap penerimaan barang agar stok dan harga pokok produk selalu akurat.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 2: Penyesuaian Stok -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="tune" size="48px" color="purple" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  2. ⚖️ Penyesuaian Stok
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini berguna untuk menyesuaikan stok secara manual karena alasan selain penjualan atau penerimaan normal, 
                  seperti barang rusak, hilang, atau kelebihan.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/penyesuaian.png" 
                  alt="Screenshot Penyesuaian Stok"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Fitur-fitur Penyesuaian Stok:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="category" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Produk:</strong> Pilih produk yang stoknya akan disesuaikan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="calculate" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Perubahan Kuantitas:</strong> Masukkan nilai positif untuk menambah stok (contoh: +5 jika menemukan 5 unit yang hilang) 
                  atau nilai negatif untuk mengurangi stok (contoh: -3 jika ada 3 unit yang rusak).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="note" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Alasan Penyesuaian:</strong> Jelaskan alasan penyesuaian, misalnya "rusak" atau "kesalahan pencatatan".
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="save" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Catat Penyesuaian:</strong> Klik tombol ini untuk menerapkan perubahan pada jumlah stok produk.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="warning" color="orange" class="q-mr-sm" />
              <span class="text-body2">
                <strong>Penting:</strong> Selalu berikan alasan yang jelas untuk setiap penyesuaian stok agar audit inventaris lebih mudah.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 3: Ringkasan Inventaris -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="summarize" size="48px" color="teal" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  3. � Ringkasan Inventaris
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini memberikan gambaran umum mengenai semua produk yang terdaftar di toko Anda.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/ringkasanstok.png" 
                  alt="Screenshot Ringkasan Inventaris"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Informasi Ringkasan Inventaris:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Nama Produk, SKU, Kategori:</strong> Informasi detail produk.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="storage" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Stok Saat Ini:</strong> Menunjukkan jumlah unit produk yang ada di toko Anda. 
                  Pada contoh, "Asus TUF" dan "Mouse Gaming V1" memiliki stok 0, yang ditandai dengan status "Stok Habis".
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="straighten" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Unit:</strong> Satuan produk, misalnya "Unit".
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="analytics" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Harga Pokok Rata-rata:</strong> Harga rata-rata produk yang dihitung berdasarkan metode 
                  rata-rata tertimbang dari semua penerimaan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="sell" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Harga Jual:</strong> Harga yang Anda tetapkan untuk menjual produk.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="circle" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Status Stok:</strong> Menunjukkan kondisi stok produk, seperti "Stok Habis" atau "Stok Tersedia".
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="visibility" color="teal" class="q-mr-sm" />
              <span class="text-body2">
                Gunakan ringkasan inventaris untuk memantau produk mana yang perlu direstock atau yang performanya baik.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 4: Riwayat Pergerakan Inventaris -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="history" size="48px" color="green" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  4. � Riwayat Pergerakan Inventaris
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini berfungsi sebagai log atau catatan semua aktivitas yang memengaruhi stok inventaris Anda.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/riwayat-moving-stock.png" 
                  alt="Screenshot Riwayat Pergerakan Inventaris"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Informasi Riwayat Pergerakan Inventaris:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="schedule" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Tanggal & Waktu:</strong> Kapan transaksi atau pergerakan stok terjadi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Produk:</strong> Nama produk yang terlibat.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="category" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Tipe:</strong> Jenis pergerakan stok, seperti "Penyesuaian" (dari menu Penyesuaian Stok) 
                  atau "Penerimaan" (dari menu Penerimaan Barang).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="trending_up" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Perubahan Kuantitas:</strong> Menunjukkan berapa banyak stok yang bertambah atau berkurang. 
                  Misalnya, +50 Unit untuk penerimaan dan -3 Unit untuk penyesuaian.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Harga Pokok per Unit:</strong> Harga pokok produk saat pergerakan stok terjadi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="calculate" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Total Biaya Pergerakan:</strong> Hasil perkalian antara "Perubahan Kuantitas" dan "Harga Pokok per Unit".
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="note" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Alasan:</strong> Keterangan singkat tentang alasan pergerakan, seperti "rusak karena banjir" atau "Pembelian".
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="analytics" color="green" class="q-mr-sm" />
              <span class="text-body2">
                Riwayat pergerakan inventaris membantu Anda menganalisis pola stok dan membuat keputusan bisnis yang lebih baik.
              </span>
            </div>
          </div>
        </section>

        <!-- Remove Step 5 completely - delete this entire section -->

        <!-- Tips & Best Practices -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">
              💡 Tips & Best Practices Manajemen Inventaris
            </h2>
            
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="check_circle" color="green" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">✅ Yang Harus Dilakukan</h4>
                  <ul class="tips-list">
                    <li>Catat setiap penerimaan barang segera setelah barang datang</li>
                    <li>Lakukan stock opname berkala untuk memastikan akurasi data</li>
                    <li>Berikan alasan yang jelas untuk setiap penyesuaian stok</li>
                    <li>Pantau produk dengan stok rendah secara rutin</li>
                    <li>Backup data inventaris secara berkala</li>
                    <li>Gunakan riwayat pergerakan untuk analisis trend</li>
                  </ul>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="warning" color="orange" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">⚠️ Yang Harus Dihindari</h4>
                  <ul class="tips-list">
                    <li>Menunda pencatatan penerimaan atau penyesuaian barang</li>
                    <li>Melakukan penyesuaian stok tanpa alasan yang jelas</li>
                    <li>Mengabaikan produk dengan stok habis atau rendah</li>
                    <li>Tidak memverifikasi harga pokok saat penerimaan</li>
                    <li>Lupa mencatat supplier untuk tracking yang lebih baik</li>
                    <li>Tidak memantau riwayat pergerakan secara berkala</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            🎯 Siap Mengelola Inventaris dengan {{ appName }}?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Ikuti panduan di atas untuk mengelola inventaris dengan efektif menggunakan {{ appName }}. 
            Kelola stok produk, catat penerimaan barang, dan pantau pergerakan inventaris dengan mudah dan akurat!
          </p>
          <div class="cta-buttons q-gutter-md">
            <q-btn 
              size="lg" 
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToGuide"
            >
              <q-icon name="inventory" class="q-mr-sm" />
              Mulai Kelola Inventaris
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

const { appName } = useAppConfig()

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
