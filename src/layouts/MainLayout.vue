<template>
  <q-layout view="lHh Lpr lFf" class="bg-[#0f172a] text-white">
    <!-- Sidebar Navigation -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-black text-white shadcn-drawer"
      :width="isMinimized ? 80 : 280"
      :breakpoint="1024"
      bordered
    >
      <div class="q-pt-lg q-pb-md flex flex-center">
        <q-btn
          flat
          round
          size="sm"
          color="primary"
          class="sidebar-toggle-btn"
          :icon="isMinimized ? 'chevron_right' : 'chevron_left'"
          @click="isMinimized = !isMinimized"
          aria-label="Minimize Sidebar"
        />
      </div>
      <q-list dark class="q-py-sm">
        <q-item-label 
          header 
          v-if="!isMinimized" 
          class="text-grey-4 text-weight-medium text-caption q-px-lg q-py-sm"
        >
          Menu Navigasi
        </q-item-label>
        
        <q-item 
          clickable 
          :to="'/welcome'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="home" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Beranda Dokumentasi</q-item-label>
            <q-item-label caption class="text-grey-4">Halaman utama</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item 
          clickable 
          :to="'/feature-list'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="featured_play_list" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Feature List</q-item-label>
            <q-item-label caption class="text-grey-4">Pahami fitur-fitur dasar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          clickable 
          :to="'/data-master'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="storage" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Data Master</q-item-label>
            <q-item-label caption class="text-grey-4">Kelola data master</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          clickable 
          :to="'/inventory'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="inventory_2" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Pengelolaan Inventaris</q-item-label>
            <q-item-label caption class="text-grey-4">Kelola stok dan penerimaan barang</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          clickable 
          :to="'/pembayaran-nontunai'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="payment" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Pembayaran Nontunai</q-item-label>
            <q-item-label caption class="text-grey-4">Kelola pembayaran Ipaymu</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          clickable 
          :to="'/pemesanan'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="shopping_cart" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Pemesanan</q-item-label>
            <q-item-label caption class="text-grey-4">Kelola proses pemesanan</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          clickable 
          :to="'/riwayat-pemesanan'"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="history" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Riwayat Pemesanan</q-item-label>
            <q-item-label caption class="text-grey-4">Lihat riwayat pemesanan</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item 
          clickable 
          :href="appDomain" 
          target="_blank"
          class="q-mx-sm q-mb-xs rounded-borders sidebar-nav-item"
          v-ripple
        >
          <q-item-section avatar class="sidebar-icon-section" style="padding-right: 18px !important;">
            <q-icon name="open_in_new" size="20px" />
          </q-item-section>
          <q-item-section v-if="!isMinimized" class="q-ml-sm">
            <q-item-label class="text-weight-medium">Ke Aplikasi</q-item-label>
            <q-item-label caption class="text-grey-4">Menuju aplikasi utama</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>
    
    <q-header class="shadcn-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-drawer-toggle text-white"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Toggle Sidebar"
          v-if="$q.screen.lt.lg"
          size="xl"
        />
        
        <q-space />
        
        <div style="
            padding-top: 20px;
            padding-bottom: 20px;
          " class="text-center">
          <div class="text-h5 text-weight-bold shadcn-title">
            Panduan {{ appName }}
          </div>
          <div class="text-caption text-blue-3">
            {{ appDescription }}
          </div>
        </div>
        
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container class="shadcn-main">
      <router-view />
      
      <footer class="text-center text-grey-5 text-body2 q-py-lg q-px-lg" style="border-top: 1px solid #1e293b;">
        <div class="container">
          &copy; 2025 {{ companyName }} – User Documentation
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useAppConfig } from 'src/composables/useAppConfig'

const $q = useQuasar()
const leftDrawerOpen = ref($q.screen.gt.lg)
const isMinimized = ref(false)

const { appName, appDescription, companyName, appDomain } = useAppConfig()
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap');

.q-layout, 
body {
  font-family: 'Inter', Arial, sans-serif;
  min-height: 100vh;
}

/* Sidebar Styles */
.shadcn-drawer {
  background: linear-gradient(180deg, #111112 0%, #0a0a0b 100%) !important;
  border-right: 2px solid #3b82f6 !important;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-toggle-btn {
  background: rgba(59, 130, 246, 0.1) !important;
  border: 1px solid rgba(59, 130, 246, 0.3) !important;
  transition: all 0.2s ease;
}

.sidebar-toggle-btn:hover {
  background: rgba(59, 130, 246, 0.2) !important;
  border-color: #3b82f6 !important;
  transform: scale(1.05);
}

.sidebar-nav-item {
  transition: all 0.2s ease;
  border-radius: 12px !important;
  margin: 4px 8px !important;
  overflow: hidden;
  position: relative;
}

.sidebar-nav-item:hover {
  background: rgba(59, 130, 246, 0.1) !important;
  transform: translateX(4px);
}

.sidebar-nav-item.q-router-link--active,
.sidebar-nav-item.router-link-active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Fix q-focus-helper alignment */
.sidebar-nav-item .q-focus-helper {
  border-radius: 12px !important;
  background: transparent !important;
  opacity: 0 !important;
}

.sidebar-nav-item:focus-within .q-focus-helper {
  opacity: 1 !important;
  background: rgba(59, 130, 246, 0.1) !important;
}

/* Icon section styling */
.sidebar-icon-section {
  min-width: 48px !important;
  max-width: 48px !important;
  padding-right: 8px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.sidebar-nav-item .q-item__section--avatar {
  min-width: 48px;
  max-width: 48px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-nav-item .q-icon {
  transition: transform 0.2s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.sidebar-nav-item:hover .q-icon {
  transform: scale(1.1);
}

/* Ripple effect customization */
.sidebar-nav-item .q-ripple {
  color: rgba(59, 130, 246, 0.3) !important;
}

/* Main Content Styles */
.shadcn-main {
  background: linear-gradient(135deg, #090a0f 0%, #0f0f14 50%, #090a0f 100%);
  min-height: 100vh;
}

.shadcn-header {
  background: linear-gradient(135deg, #111112 0%, #1a1a1b 100%) !important;
  border-bottom: 2px solid #3b82f6;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(10px);
}

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

/* Responsive Design */
@media (max-width: 768px) {
  .shadcn-header .text-h5 {
    font-size: 1.25rem;
  }
  
  .shadcn-header .text-caption {
    font-size: 0.75rem;
  }
}

/* Animation Classes */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

/* Drawer Toggle Button */
.q-drawer-toggle {
  background: rgba(59, 130, 246, 0.1) !important;
  border: 1px solid rgba(59, 130, 246, 0.3) !important;
  border-radius: 50% !important;
  transition: all 0.2s ease !important;
}

.q-drawer-toggle:hover {
  background: rgba(59, 130, 246, 0.2) !important;
  border-color: #3b82f6 !important;
  transform: scale(1.1) !important;
}

/* Contact Icons */
.text-primary { color: #3b82f6 !important; }
.text-green { color: #10b981 !important; }
.text-blue { color: #06b6d4 !important; }

/* Improved spacing and typography */
.q-item-label {
  line-height: 1.4;
}

.q-item-label--caption {
  opacity: 0.7;
  font-size: 0.75rem;
}

/* Scrollbar Styling */
.q-drawer ::-webkit-scrollbar {
  width: 4px;
}

.q-drawer ::-webkit-scrollbar-track {
  background: rgba(59, 130, 246, 0.1);
}

.q-drawer ::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 2px;
}

.q-drawer ::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
