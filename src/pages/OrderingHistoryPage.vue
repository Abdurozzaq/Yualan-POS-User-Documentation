<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Panduan Riwayat Penjualan
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Pelajari cara menggunakan menu Riwayat Penjualan di {{ appName }}. 
              Pantau transaksi, lihat detail penjualan, dan kelola pembayaran dengan mudah dan efisien.
            </p>
            <div class="hero-buttons q-mt-lg">
              <q-btn 
                size="lg" 
                color="primary" 
                class="q-mr-md q-mb-sm hero-btn" 
                rounded
                @click="scrollToGuide"
              >
                <q-icon name="history" class="q-mr-sm" />
                Lihat Riwayat Penjualan
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
                � Mengapa Menu Riwayat Penjualan Penting?
              </h2>
              <p class="text-body1 text-grey-3">
                Menu Riwayat Penjualan {{ appName }} membantu Anda memantau semua transaksi penjualan yang terjadi di toko, 
                mengelola status pembayaran, dan memberikan kemudahan untuk melihat detail setiap transaksi 
                yang telah dilakukan.
              </p>
            </div>
          </div>
        </section>

        <!-- Step 1: Panduan Menu "Riwayat Penjualan" -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="history" size="48px" color="blue" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  1. � Panduan Menu "Riwayat Penjualan" (Gambar 1)
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini menampilkan daftar riwayat transaksi penjualan yang terjadi di Rozzaq Store. 
                  Berikut adalah penjelasan kolom-kolom yang tersedia:
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/riwayatpenjualan.png" 
                  alt="Screenshot Riwayat Penjualan"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Kolom-kolom pada Riwayat Penjualan:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="format_list_numbered" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>No.:</strong> Nomor urut transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="receipt_long" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Invoice:</strong> Nomor unik yang mengidentifikasi setiap transaksi penjualan. Nomor ini dapat digunakan untuk mencari detail transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="today" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Tanggal:</strong> Tanggal dan waktu terjadinya transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="person" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Kasir:</strong> Nama kasir yang melayani transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="group" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Pelanggan:</strong> Status pelanggan (dalam contoh ini, "Umum" yang berarti pelanggan tidak terdaftar).
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="payment" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Metode Pembayaran:</strong> Metode pembayaran yang digunakan oleh pelanggan (contohnya: "IPAYMU" dan "CASH").
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="attach_money" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Jumlah Total:</strong> Total nominal transaksi yang dibayarkan oleh pelanggan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="check_circle" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Status:</strong> Status pembayaran transaksi.
                  <br>• <strong>COMPLETED:</strong> Pembayaran sudah berhasil.
                  <br>• <strong>PENDING:</strong> Pembayaran masih tertunda. Biasanya terjadi pada metode pembayaran online yang membutuhkan konfirmasi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="visibility" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Aksi:</strong> Tombol untuk melihat detail transaksi. Ikon mata biasanya digunakan untuk melihat detail.
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              🔍 Cara Menggunakan Menu Ini:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="search" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Mencari Transaksi:</strong> Anda bisa menggunakan kolom pencarian di bagian atas untuk mencari transaksi berdasarkan "Nomor Invoice" atau nama.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="filter_list" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Filter Status:</strong> Anda dapat memfilter transaksi berdasarkan status pembayaran (misalnya: "Semua Status", "PENDING", atau "COMPLETED") untuk memudahkan pencarian.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="visibility" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Melihat Detail:</strong> Klik tombol "Aksi" (ikon mata) di samping setiap baris transaksi untuk melihat rincian lengkap dari transaksi tersebut.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="blue" class="q-mr-sm" />
              <span class="text-body2">
                Menu Riwayat Penjualan memudahkan Anda untuk melacak semua transaksi yang telah terjadi dan mengelola status pembayaran.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 2: Panduan Menu "Detail Penjualan" -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="receipt_long" size="48px" color="purple" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  2. � Panduan Menu "Detail Penjualan" (Gambar 2)
                </h2>
                <p class="text-body1 text-grey-3">
                  Menu ini menampilkan rincian dari sebuah transaksi penjualan. Halaman ini diakses setelah Anda mengklik tombol "Aksi" dari menu "Riwayat Penjualan". 
                  Berikut adalah penjelasan detail yang ditampilkan:
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/detailpenjualan-tombol-retry-pay.png" 
                  alt="Screenshot Detail Penjualan"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              � Informasi Detail Transaksi:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="receipt_long" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Invoice #:</strong> Nomor invoice dari transaksi yang dipilih.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="schedule" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Tanggal:</strong> Tanggal dan waktu transaksi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="person" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Kasir:</strong> Nama kasir yang melayani.
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              🛒 Detail Pesanan:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="inventory" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Nama Produk (Jumlah Unit):</strong> Nama produk beserta jumlah unit yang dibeli.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="monetization_on" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Harga per Unit:</strong> Harga satuan dari produk.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="calculate" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Harga Total Produk:</strong> Total harga untuk produk tersebut.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="subtitles" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Subtotal:</strong> Total harga semua produk sebelum diskon, pajak, dan lain-lain.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="local_offer" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Diskon:</strong> Potongan harga jika ada.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="percent" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Pajak:</strong> Biaya pajak jika dikenakan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="paid" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>TOTAL:</strong> Total akhir yang harus dibayarkan pelanggan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="payment" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Metode Pembayaran:</strong> Metode pembayaran yang digunakan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="account_balance_wallet" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Jumlah Dibayar:</strong> Jumlah uang yang dibayarkan oleh pelanggan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="change_circle" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Kembalian:</strong> Jumlah uang kembalian jika pembayaran menggunakan uang tunai.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="note" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Catatan:</strong> Catatan tambahan terkait transaksi (contoh: "Menunggu pembayaran via iPaymu.").
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="purple" class="q-mr-sm" />
              <span class="text-body2">
                Detail penjualan memberikan informasi lengkap tentang setiap transaksi untuk keperluan audit dan referensi.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 3: Tombol dan Fungsinya -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="smart_button" size="48px" color="teal" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  3. 🎯 Tombol dan Fungsinya
                </h2>
                <p class="text-body1 text-grey-3">
                  Di halaman detail penjualan, terdapat beberapa tombol dengan fungsi khusus untuk mengelola transaksi.
                </p>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              � Bayar Sekarang (Ipaymu):
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="payment" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Kapan Muncul:</strong> Tombol ini muncul khusus untuk transaksi dengan status PENDING dan metode pembayaran IPAYMU.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="refresh" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Fungsi:</strong> Tombol ini berfungsi sebagai "retry" payment. Jika pembayaran IPAYMU sebelumnya gagal atau belum selesai, Anda dapat mengklik tombol ini untuk mengarahkan ulang (redirect) pelanggan ke halaman pembayaran IPAYMU agar mereka dapat menyelesaikan pembayaran.
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              🧾 Cetak Resi (PDF):
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="print" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Fungsi:</strong> Tombol ini digunakan untuk mencetak struk atau resi penjualan dalam format PDF.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="picture_as_pdf" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Kegunaan:</strong> Resi PDF dapat disimpan sebagai bukti transaksi atau diberikan kepada pelanggan sebagai tanda terima.
                </div>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md q-mt-lg text-primary">
              🔙 Kembali ke Pemesanan:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="arrow_back" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Fungsi:</strong> Tombol untuk kembali ke halaman daftar riwayat transaksi atau pemesanan.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="navigation" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Navigasi:</strong> Memudahkan perpindahan antar halaman tanpa harus menggunakan tombol browser.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="warning" color="orange" class="q-mr-sm" />
              <span class="text-body2">
                <strong>Penting:</strong> Tombol "Bayar Sekarang" hanya akan muncul untuk transaksi dengan status PENDING dan menggunakan metode pembayaran IPAYMU.
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
              💡 Tips & Best Practices Riwayat Penjualan
            </h2>
            
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="check_circle" color="green" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">✅ Yang Harus Dilakukan</h4>
                  <ul class="tips-list">
                    <li>Periksa status pembayaran secara berkala, terutama yang PENDING</li>
                    <li>Gunakan fitur pencarian untuk menemukan transaksi spesifik dengan cepat</li>
                    <li>Manfaatkan filter status untuk mempermudah monitoring transaksi</li>
                    <li>Selalu klik tombol "Bayar Sekarang" untuk transaksi IPAYMU yang gagal</li>
                    <li>Cetak resi PDF untuk dokumentasi dan bukti transaksi</li>
                    <li>Monitor transaksi PENDING secara rutin untuk follow-up pembayaran</li>
                  </ul>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="warning" color="orange" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">⚠️ Yang Harus Dihindari</h4>
                  <ul class="tips-list">
                    <li>Mengabaikan transaksi dengan status PENDING terlalu lama</li>
                    <li>Tidak memfollow-up pembayaran IPAYMU yang tertunda</li>
                    <li>Lupa mencetak resi untuk dokumentasi toko</li>
                    <li>Tidak menggunakan filter saat mencari transaksi tertentu</li>
                    <li>Mengabaikan detail transaksi sebelum memproses pembayaran ulang</li>
                    <li>Tidak memverifikasi data pelanggan dan kasir pada detail transaksi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            🎯 Siap Mengelola Riwayat Penjualan dengan {{ appName }}?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Ikuti panduan di atas untuk mengelola riwayat penjualan dengan efektif menggunakan {{ appName }}. 
            Pantau transaksi, lihat detail penjualan, dan kelola pembayaran dengan mudah dan akurat!
          </p>
          <div class="cta-buttons q-gutter-md">
            <q-btn 
              size="lg" 
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToGuide"
            >
              <q-icon name="history" class="q-mr-sm" />
              Lihat Riwayat Penjualan
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
