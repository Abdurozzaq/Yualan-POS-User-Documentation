<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Panduan iPaymu Payment Gateway
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Pelajari cara mengintegrasikan payment gateway iPaymu dengan {{ appName }}. 
              Terima pembayaran dari berbagai metode dengan mudah dan aman.
            </p>
            <div class="hero-buttons q-mt-lg">
              <q-btn 
                size="lg" 
                color="primary" 
                class="q-mr-md q-mb-sm hero-btn" 
                rounded
                href="https://my.ipaymu.com"
                target="_blank"
              >
                <q-icon name="launch" class="q-mr-sm" />
                Daftar iPaymu
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
                🎯 Mengapa Menggunakan iPaymu?
              </h2>
              <p class="text-body1 text-grey-3">
                iPaymu adalah payment gateway terpercaya di Indonesia yang mendukung berbagai metode pembayaran 
                seperti Virtual Account, E-Wallet, QRIS, dan Kartu Kredit. Integrasi dengan {{ appName }} 
                memungkinkan bisnis Anda menerima pembayaran digital dengan mudah.
              </p>
            </div>
          </div>
        </section>

        <!-- Step 1: Daftar Akun -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="person_add" size="48px" color="blue" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  1. 🔐 Daftar Akun iPaymu
                </h2>
                <p class="text-body1 text-grey-3">
                  Langkah pertama adalah mendaftar akun iPaymu untuk mendapatkan akses ke dashboard merchant.
                </p>
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Pendaftaran:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="web" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Production:</strong> Kunjungi <a href="https://my.ipaymu.com" target="_blank" class="text-blue">https://my.ipaymu.com</a> 
                  untuk akun live yang akan digunakan untuk transaksi sesungguhnya.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="science" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Testing/Sandbox:</strong> Kunjungi <a href="https://sandbox.ipaymu.com" target="_blank" class="text-blue">https://sandbox.ipaymu.com</a> 
                  untuk akun testing yang digunakan untuk percobaan integrasi.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="verified_user" color="blue" />
                </div>
                <div class="guide-content">
                  <strong>Verifikasi Data:</strong> Lengkapi data bisnis dan dokumen yang diperlukan 
                  untuk proses verifikasi akun merchant.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="info" color="blue" class="q-mr-sm" />
              <span class="text-body2">
                Disarankan untuk membuat akun sandbox terlebih dahulu untuk testing sebelum menggunakan akun production.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 2: Daftarkan Domain -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="domain" size="48px" color="purple" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  2. 🌐 Daftarkan Domain {{ appName }}
                </h2>
                <p class="text-body1 text-grey-3">
                  Daftarkan domain aplikasi Anda ke iPaymu untuk keamanan dan whitelist akses API.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/domain.png" 
                  alt="Screenshot Pendaftaran Domain"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Pendaftaran Domain:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="link" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Akses URL:</strong> Kunjungi <a href="https://my.ipaymu.com/domain" target="_blank" class="text-purple">https://my.ipaymu.com/domain</a> 
                  atau <a href="https://sandbox.ipaymu.com/domain" target="_blank" class="text-purple">https://sandbox.ipaymu.com/domain</a> untuk testing.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="public" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Domain Aplikasi:</strong> Daftarkan domain <strong>{{ appDomain }}</strong> 
                  sebagai domain yang diizinkan mengakses API iPaymu.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="pending" color="purple" />
                </div>
                <div class="guide-content">
                  <strong>Proses Verifikasi:</strong> Tunggu tim iPaymu melakukan verifikasi domain. 
                  Proses ini biasanya membutuhkan waktu 1-2 hari kerja.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="warning" color="orange" class="q-mr-sm" />
              <span class="text-body2">
                <strong>Syarat Domain:</strong> Pastikan domain aktif dan memiliki halaman Terms of Service, FAQ, dan Refund Policy.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 3: Daftarkan IP -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="computer" size="48px" color="teal" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  3. 🖥️ Daftarkan IP Address {{ appName }}
                </h2>
                <p class="text-body1 text-grey-3">
                  Whitelist IP address server aplikasi Anda untuk keamanan tambahan dalam akses API.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/ip.png" 
                  alt="Screenshot Pendaftaran IP"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Pendaftaran IP Address:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="link" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Akses URL:</strong> Kunjungi <a href="https://my.ipaymu.com/ip" target="_blank" class="text-teal">https://my.ipaymu.com/ip</a> 
                  atau <a href="https://sandbox.ipaymu.com/ip" target="_blank" class="text-teal">https://sandbox.ipaymu.com/ip</a> untuk testing.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="router" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>IP Address Server:</strong> Daftarkan IP address <strong>{{ appIP }}</strong> 
                  sebagai IP yang diizinkan mengakses API iPaymu.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="schedule" color="teal" />
                </div>
                <div class="guide-content">
                  <strong>Proses Verifikasi:</strong> Tunggu tim iPaymu melakukan verifikasi IP address. 
                  Proses ini biasanya lebih cepat dari verifikasi domain.
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="security" color="teal" class="q-mr-sm" />
              <span class="text-body2">
                Whitelist IP address membantu meningkatkan keamanan transaksi dan mencegah akses tidak sah ke API Anda.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 4: Dapatkan API Key -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="vpn_key" size="48px" color="green" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  4. 🔑 Dapatkan API Key
                </h2>
                <p class="text-body1 text-grey-3">
                  Ambil kredensial API Key yang diperlukan untuk integrasi dengan {{ appName }}.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/apikey.png" 
                  alt="Screenshot API Key"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Mendapatkan API Key:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="dashboard" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Akses Dashboard:</strong> Login ke dashboard iPaymu di 
                  <a href="https://my.ipaymu.com" target="_blank" class="text-green">https://my.ipaymu.com</a> 
                  atau <a href="https://sandbox.ipaymu.com" target="_blank" class="text-green">https://sandbox.ipaymu.com</a> untuk testing.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="badge" color="green" />
                </div>
                <div class="guide-content">
                  <strong>VA ID / Merchant Code:</strong> Catat VA ID atau Merchant Code yang 
                  akan digunakan sebagai identitas merchant Anda.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="key" color="green" />
                </div>
                <div class="guide-content">
                  <strong>API Key:</strong> Salin API Key yang berfungsi sebagai secret key 
                  untuk autentikasi API requests.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="http" color="green" />
                </div>
                <div class="guide-content">
                  <strong>Endpoint URL:</strong> Pilih endpoint yang sesuai:
                  <ul class="q-mt-sm q-ml-md">
                    <li>Sandbox: <code class="text-orange">https://sandbox.ipaymu.com/api/</code></li>
                    <li>Production: <code class="text-green">https://my.ipaymu.com/api/</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="security" color="green" class="q-mr-sm" />
              <span class="text-body2">
                <strong>Keamanan:</strong> Jangan pernah membagikan API Key kepada pihak lain dan simpan dengan aman.
              </span>
            </div>
          </div>
        </section>

        <!-- Step 5: Pasang API Key -->
        <section class="q-mb-lg">
          <div class="shadcn-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto q-mr-md">
                <div class="step-number">
                  <q-icon name="settings" size="48px" color="orange" />
                </div>
              </div>
              <div class="col">
                <h2 class="text-h4 text-weight-bold shadcn-title q-mb-sm">
                  5. ⚙️ Pasang API Key ke {{ appName }}
                </h2>
                <p class="text-body1 text-grey-3">
                  Konfigurasikan API Key iPaymu di dalam aplikasi {{ appName }} untuk mengaktifkan payment gateway.
                </p>
              </div>
            </div>
            
            <!-- Screenshot -->
            <div class="screenshot-container q-mb-lg">
              <div class="screenshot-image">
                <img 
                  src="~/assets/tenantsetting.png" 
                  alt="Screenshot Tenant Setting"
                  class="full-width screenshot-img"
                />
              </div>
            </div>

            <h3 class="text-h6 text-weight-bold q-mb-md text-primary">
              📝 Panduan Konfigurasi di {{ appName }}:
            </h3>
            
            <div class="guide-list">
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="menu" color="orange" />
                </div>
                <div class="guide-content">
                  <strong>Akses Menu:</strong> Buka menu <strong>Settings → Tenant Info</strong> 
                  di dashboard {{ appName }}.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="badge" color="orange" />
                </div>
                <div class="guide-content">
                  <strong>iPaymu API Key (VA):</strong> Isikan dengan <strong>VA ID / Merchant Code</strong> 
                  yang telah didapatkan dari dashboard iPaymu.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="vpn_key" color="orange" />
                </div>
                <div class="guide-content">
                  <strong>iPaymu Secret Key:</strong> Isikan dengan <strong>API Key</strong> 
                  yang telah didapatkan dari dashboard iPaymu.
                </div>
              </div>
              
              <div class="guide-item q-mb-md">
                <div class="guide-icon">
                  <q-icon name="toggle_on" color="orange" />
                </div>
                <div class="guide-content">
                  <strong>Mode iPaymu:</strong> Pilih mode endpoint yang sesuai:
                  <ul class="q-mt-sm q-ml-md">
                    <li><strong>Sandbox:</strong> Untuk testing dan pengembangan</li>
                    <li><strong>Production:</strong> Untuk transaksi live/sesungguhnya</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="info-box q-mt-md">
              <q-icon name="verified" color="orange" class="q-mr-sm" />
              <span class="text-body2">
                Setelah konfigurasi selesai, lakukan test transaksi untuk memastikan integrasi berjalan dengan baik.
              </span>
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
                    <li>Gunakan sandbox untuk testing sebelum production</li>
                    <li>Simpan API Key dengan aman dan jangan dibagikan</li>
                    <li>Pastikan halaman legal (ToS, Privacy) tersedia di website</li>
                    <li>Test berbagai metode pembayaran yang tersedia</li>
                    <li>Monitor transaksi secara berkala di dashboard</li>
                    <li>Backup konfigurasi API Key secara berkala</li>
                  </ul>
                </div>
              </div>
              
              <div class="col-12 col-md-6">
                <div class="tips-card q-pa-md q-mb-md">
                  <q-icon name="warning" color="orange" size="32px" class="q-mb-sm" />
                  <h4 class="text-h6 text-weight-bold q-mb-sm">⚠️ Yang Harus Dihindari</h4>
                  <ul class="tips-list">
                    <li>Menggunakan API Key production untuk testing</li>
                    <li>Hardcode API Key di dalam source code</li>
                    <li>Mengabaikan proses verifikasi domain dan IP</li>
                    <li>Tidak mengecek status verifikasi akun merchant</li>
                    <li>Melakukan transaksi tanpa testing terlebih dahulu</li>
                    <li>Tidak memantau log transaksi error</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            🎯 Siap Menggunakan iPaymu Payment Gateway?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Ikuti panduan di atas untuk mengintegrasikan iPaymu dengan {{ appName }}. 
            Mulai terima pembayaran digital dari berbagai metode dengan mudah dan aman!
          </p>
          <div class="cta-buttons q-gutter-md">
            <q-btn 
              size="lg" 
              color="primary" 
              class="cta-btn" 
              rounded
              href="https://my.ipaymu.com"
              target="_blank"
            >
              <q-icon name="launch" class="q-mr-sm" />
              Daftar iPaymu
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

const { appName, appDomain, appIP } = useAppConfig()

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
