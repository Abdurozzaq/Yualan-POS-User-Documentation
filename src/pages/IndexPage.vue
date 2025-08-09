<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row justify-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <!-- Hero Section -->
        <section class="hero-section shadcn-card q-pa-xl q-mb-lg text-center">
          <div class="hero-content">
            <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
              Kelola Bisnis Anda Lebih Mudah dengan {{ appName }}
            </h1>
            <p class="hero-subtitle text-h6 text-grey-3 q-mb-lg">
              Sistem Point of Sale yang intuitif, efisien, dan terintegrasi untuk membantu Anda berkembang.
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
                @click="scrollToGuide"
              >
                <q-icon name="auto_stories" class="q-mr-sm" />
                Panduan Pengguna
              </q-btn>
              <q-btn 
                size="lg" 
                flat
                color="primary" 
                class="q-mb-sm hero-btn" 
                rounded
                @click="scrollToHelp"
              >
                <q-icon name="help_center" class="q-mr-sm" />
                Pusat Bantuan
              </q-btn>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="q-mb-lg">
          <h2 class="text-h4 text-weight-bold text-center q-mb-lg shadcn-title">Fitur Unggulan {{ appName }}</h2>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-4" 
              v-for="feature in features" 
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

        <!-- Quick Start Guide -->
        <section id="guide-section" class="shadcn-card q-pa-lg q-mb-lg">
          <h2 class="text-h4 text-weight-bold q-mb-md shadcn-title">Panduan Cepat</h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Ikuti langkah-langkah sederhana ini untuk mulai menggunakan {{ appName }}
          </p>
          <div class="row q-col-gutter-md q-row-gutter-md">
            <div 
              class="col-12 col-sm-6 col-lg-4" 
              v-for="(step, index) in quickSteps" 
              :key="index"
            >
              <div class="quick-step-card q-pa-md full-height">
                <div class="step-number q-mb-sm">{{ index + 1 }}</div>
                <h4 class="text-subtitle1 text-weight-medium q-mb-sm">{{ step.title }}</h4>
                <p class="text-body2 text-grey-3">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Support Section -->
        <section id="help-section" class="shadcn-card q-pa-lg q-mb-lg">
          <h2 class="text-h4 text-weight-bold q-mb-md shadcn-title">Pusat Bantuan</h2>
          <p class="text-body1 text-grey-3 q-mb-md">
            Tim support kami siap membantu Anda 24/7. Hubungi kami melalui:
          </p>
          <div class="row q-col-gutter-md q-row-gutter-md q-mt-lg">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="support-item q-pa-md full-height">
                <q-icon name="email" class="support-icon text-primary" size="32px" />
                <div class="support-content">
                  <div class="text-subtitle2 text-weight-medium">Email Support</div>
                  <div class="text-body2 text-grey-3">{{ supportEmail }}</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="support-item q-pa-md full-height">
                <q-icon name="chat" class="support-icon text-green" size="32px" />
                <div class="support-content">
                  <div class="text-subtitle2 text-weight-medium">WhatsApp</div>
                  <div class="text-body2 text-grey-3">{{ supportWhatsApp }}</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="support-item q-pa-md full-height">
                <q-icon name="send" class="support-icon text-blue" size="32px" />
                <div class="support-content">
                  <div class="text-subtitle2 text-weight-medium">Telegram</div>
                  <div class="text-body2 text-grey-3">{{ supportTelegram }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section shadcn-card q-pa-xl text-center">
          <h2 class="text-h5 text-weight-bold q-mb-md shadcn-title">
            Siap Mengoptimalkan Bisnis Anda?
          </h2>
          <p class="text-body1 text-grey-3 q-mb-lg">
            Bergabunglah dengan ribuan bisnis yang telah merasakan kemudahan dan efisiensi bersama {{ appName }}
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
              Akses Aplikasi
            </q-btn>
            <q-btn 
              size="lg" 
              outline
              color="primary" 
              class="cta-btn" 
              rounded
              @click="scrollToGuide"
            >
              <q-icon name="auto_stories" class="q-mr-sm" />
              Baca Panduan
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

const { appName, supportEmail, supportWhatsApp, supportTelegram, appDomain } = useAppConfig()

const features = ref([
  {
    title: 'Manajemen Penjualan Intuitif',
    description: 'Catat transaksi dengan cepat, kelola diskon, dan berikan kembalian dengan mudah. Mendukung berbagai metode pembayaran.',
    icon: 'point_of_sale',
    color: 'primary'
  },
  {
    title: 'Kontrol Inventaris Akurat',
    description: 'Lacak stok produk secara real-time, kelola penerimaan barang, dan lakukan penyesuaian stok dengan efisien.',
    icon: 'inventory',
    color: 'green'
  },
  {
    title: 'Manajemen Pelanggan Terpadu',
    description: 'Simpan data pelanggan, pantau riwayat pembelian, dan bangun loyalitas pelanggan dengan mudah.',
    icon: 'people',
    color: 'blue'
  },
  {
    title: 'Laporan Bisnis Mendalam',
    description: 'Dapatkan wawasan berharga tentang penjualan, laba kotor, dan kinerja stok melalui laporan yang komprehensif.',
    icon: 'analytics',
    color: 'orange'
  },
  {
    title: 'Integrasi Pembayaran Digital',
    description: 'Terhubung langsung dengan iPaymu untuk menerima pembayaran online, memperluas pilihan pembayaran bagi pelanggan Anda.',
    icon: 'payment',
    color: 'purple'
  },
  {
    title: 'Akses Cloud Kapan Saja',
    description: 'Kelola bisnis Anda dari mana saja, kapan saja, dengan akses berbasis cloud yang aman dan andal.',
    icon: 'cloud',
    color: 'teal'
  }
])

const quickSteps = ref([
  {
    title: 'Baca Panduan Dasar',
    description: 'Mulai dengan memahami fitur-fitur dasar sistem POS dan cara navigasinya.'
  },
  {
    title: 'Setup Data Master',
    description: 'Atur data produk, kategori, dan pelanggan untuk memulai transaksi.'
  },
  {
    title: 'Mulai Bertransaksi',
    description: 'Pelajari cara melakukan penjualan dan mengelola transaksi harian.'
  }
])

const scrollToGuide = () => {
  const element = document.getElementById('guide-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToHelp = () => {
  const element = document.getElementById('help-section')
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
  min-height: 280px;
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

/* Quick Steps */
.quick-step-card {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.quick-step-card:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 0;
}

/* Support Items */
.support-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(59, 130, 246, 0.03);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 100px;
}

.support-item:hover {
  background: rgba(59, 130, 246, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.support-icon {
  min-width: 48px;
  flex-shrink: 0;
}

.support-content {
  flex: 1;
  min-width: 0;
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
    min-height: 250px;
  }
  
  .quick-step-card {
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
    min-height: 220px;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-icon .q-icon {
    font-size: 36px !important;
  }
  
  .quick-step-card {
    min-height: 160px;
  }
  
  .support-item {
    min-height: 80px;
  }
  
  .support-icon {
    min-width: 40px;
  }
  
  .support-icon .q-icon {
    font-size: 24px !important;
  }
  
  .step-number {
    width: 35px;
    height: 35px;
    font-size: 16px;
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
    min-height: 200px;
  }
  
  .quick-step-card {
    min-height: 140px;
  }
  
  .support-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    min-height: 120px;
    padding: 1rem !important;
  }
  
  .support-content {
    text-align: center;
  }
  
  .cta-btn {
    min-width: 160px;
    width: 100%;
  }
}
</style>
