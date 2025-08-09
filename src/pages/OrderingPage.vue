<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Panduan Sistem Pemesanan
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Pelajari cara menggunakan sistem pemesanan di {{ appName }}. 
              Pilih produk, atur pembayaran, dan proses pesanan dengan mudah dan efisien.
            </p>
            <div class="hero-buttons q-mt-lg">
              <q-btn 
                size="lg" 
                color="primary" 
                class="q-mr-md q-mb-sm hero-btn" 
                rounded
                @click="scrollToGuide"
              >
                <q-icon name="shopping_cart" class="q-mr-sm" />
                Mulai Buat Pesanan
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
                🛒 Mengapa Sistem Pemesanan Penting?
              </h2>
              <p class="text-body1 text-grey-3">
                Sistem pemesanan {{ appName }} membantu Anda memproses transaksi penjualan dengan cepat dan akurat, 
                mendukung berbagai metode pembayaran, dan menghasilkan resi penjualan untuk setiap transaksi 
                yang dilakukan di toko Anda.
              </p>
            </div>
          </div>
        </section>

        <!-- Step 1: Memilih Produk dan Input Pemesanan -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="shopping_cart" size="48px" color="blue" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  1. 🛒 Memilih Produk dan Input Pemesanan
                </h2>
                <p class="text-body1 text-grey-3">
                  Pada bagian Daftar Produk, pilih produk yang akan dibeli oleh pelanggan. Dalam contoh ini, Mouse Gaming V1 dipilih dengan mengklik ikon keranjang belanja atau langsung mengklik produk. Setelah dipilih, produk akan muncul di bagian Keranjang Belanja.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/ordering-ipaymu-dan-tunai.png" 
                  alt="Screenshot Sistem Pemesanan"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Keranjang Belanja:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Nama Produk:</strong> Cek kembali produk yang sudah ditambahkan (contoh: Mouse Gaming V1).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="add_shopping_cart" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Kuantitas:</strong> Sesuaikan jumlah produk yang dibeli. Anda bisa menambah atau mengurangi unit dengan menekan tombol + atau -.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Total Harga:</strong> Total harga produk akan terhitung otomatis (contoh: Rp500.000).
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              💰 Detail Pembayaran:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="person" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Pelanggan:</strong> Masukkan nama pelanggan (opsional).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="calculate" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Subtotal:</strong> Total harga produk sebelum diskon dan pajak (contoh: Rp500.000).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="local_offer" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Diskon:</strong> Jika ada, masukkan nominal diskon.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="percent" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Pajak (%):</strong> Jika ada, masukkan persentase pajak yang berlaku.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="payment" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>TOTAL:</strong> Jumlah akhir yang harus dibayar pelanggan, terhitung otomatis.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="blue" class="q-mr-sm" />
              <span class="text-body2">
                Pastikan untuk memeriksa kembali produk dan jumlah yang dipilih sebelum melanjutkan ke pembayaran.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 2: Memilih Metode Pembayaran -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="payment" size="48px" color="purple" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  2. 💳 Memilih Metode Pembayaran
                </h2>
                <p class="text-body1 text-grey-3">
                  Pada bagian Metode Pembayaran, Anda dapat memilih salah satu dari dua pilihan yang tersedia.
                </p>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              💵 Pembayaran Tunai (Cash):
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="money" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Pilih Tunai:</strong> Pilih Tunai pada dropdown Metode Pembayaran.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Jumlah Dibayar:</strong> Pada kolom Jumlah Dibayar, masukkan jumlah uang yang diberikan oleh pelanggan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="calculate" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Kembalian:</strong> Kolom Kembalian akan secara otomatis menghitung selisih antara uang yang dibayarkan dengan total belanja.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="check_circle" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Proses Pesanan:</strong> Klik tombol Proses Pesanan.
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              🌐 Pembayaran Non-Tunai (iPaymu):
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="credit_card" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Pilih iPaymu:</strong> Pilih ipaymu pada dropdown Metode Pembayaran.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="auto_mode" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Otomatis:</strong> Kolom Jumlah Dibayar dan Kembalian akan secara otomatis terisi atau dinonaktifkan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="check_circle" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Proses Pesanan:</strong> Klik tombol Proses Pesanan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="open_in_browser" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Redirect Browser:</strong> Sistem akan mengarahkan Anda ke halaman pembayaran iPaymu di browser untuk menyelesaikan transaksi.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="warning" color="orange" class="q-mr-sm" />
              <span class="text-body2">
                <strong>Penting:</strong> Untuk pembayaran iPaymu, pastikan koneksi internet stabil agar proses pembayaran berjalan lancar.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 3: Cetak Resi Penjualan -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="receipt" size="48px" color="teal" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  3. 🧾 Cetak Resi Penjualan
                </h2>
                <p class="text-body1 text-grey-3">
                  Setelah pesanan berhasil diproses, sistem akan menampilkan halaman Resi Penjualan yang berisi detail transaksi.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/receipt.png" 
                  alt="Screenshot Resi Penjualan"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Detail Resi Penjualan:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="confirmation_number" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Nomor Faktur:</strong> Nomor unik untuk setiap transaksi yang dihasilkan sistem.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="schedule" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Tanggal:</strong> Tanggal dan waktu transaksi dilakukan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="person" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Kasir:</strong> Nama kasir yang memproses transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Produk yang Dibeli:</strong> Detail produk, kuantitas, dan harga dari setiap item yang dibeli.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Total Harga:</strong> Total amount yang harus dibayar pelanggan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="payment" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Metode Pembayaran:</strong> Informasi metode pembayaran yang digunakan (Tunai atau iPaymu).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="print" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Cetak Resi (PDF):</strong> Anda dapat mencetak resi ini dengan mengklik tombol Cetak Resi (PDF) yang tersedia di pojok kanan atas.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="teal" class="q-mr-sm" />
              <span class="text-body2">
                Resi penjualan berfungsi sebagai bukti transaksi dan dapat diberikan kepada pelanggan sebagai tanda terima.
              </span>
            </div>
          </div>
        </section>

        <!-- Remove the entire Step 4 section - this whole section should be deleted -->

        <!-- Remove Step 5 completely - delete this entire section -->

        <!-- Tips & Best Practices -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">
              💡 Tips & Best Practices Sistem Pemesanan
            </h2>
            
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="check_circle" color="green" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">✅ Yang Harus Dilakukan</h4>
                  <ul class="tips-list">
                    <li>Periksa kembali produk dan kuantitas sebelum proses pembayaran</li>
                    <li>Pastikan total harga sudah benar termasuk diskon dan pajak</li>
                    <li>Pilih metode pembayaran sesuai preferensi pelanggan</li>
                    <li>Pastikan koneksi internet stabil untuk pembayaran iPaymu</li>
                    <li>Selalu cetak dan berikan resi kepada pelanggan</li>
                    <li>Simpan resi untuk keperluan audit dan laporan</li>
                  </ul>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="warning" color="orange" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">⚠️ Yang Harus Dihindari</h4>
                  <ul class="tips-list">
                    <li>Melewatkan pengecekan detail pesanan sebelum pembayaran</li>
                    <li>Lupa memasukkan diskon atau pajak yang berlaku</li>
                    <li>Tidak memverifikasi jumlah uang tunai yang diterima</li>
                    <li>Mengabaikan kembalian yang harus diberikan</li>
                    <li>Tidak mencetak resi untuk pelanggan</li>
                    <li>Tidak memastikan pembayaran iPaymu berhasil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            🎯 Siap Memproses Pesanan dengan {{ appName }}?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Ikuti panduan di atas untuk memproses pesanan dengan efektif menggunakan {{ appName }}. 
            Pilih produk, tentukan metode pembayaran, dan cetak resi penjualan dengan mudah dan akurat!
          </p>
          <div class="cta-buttons q-gutter-md">
            <q-btn 
              size="lg" 
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToGuide"
            >
              <q-icon name="shopping_cart" class="q-mr-sm" />
              Mulai Buat Pesanan
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
