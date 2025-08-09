import { computed } from 'vue'

export function useAppConfig() {
  const appName = computed(() => {
    return process.env.APP_NAME || 'Yualan POS'
  })

  const appDescription = computed(() => {
    return process.env.APP_DESCRIPTION || 'Panduan penggunaan fitur di Yualan POS'
  })

  const companyName = computed(() => {
    return process.env.COMPANY_NAME || 'Yualan POS'
  })

  const supportEmail = computed(() => {
    return process.env.SUPPORT_EMAIL || 'abdurozzaq00@gmail.com'
  })

  const supportWhatsApp = computed(() => {
    return process.env.SUPPORT_WHATSAPP || '089603363136'
  })

  const supportTelegram = computed(() => {
    return process.env.SUPPORT_TELEGRAM || '089603363136'
  })

  const appDomain = computed(() => {
    return process.env.APP_DOMAIN || 'https://hosted.yualan.web.id'
  })

  const appIP = computed(() => {
    return process.env.APP_IP || '103.123.19.29'
  })

  return {
    appName,
    appDescription,
    companyName,
    supportEmail,
    supportWhatsApp,
    supportTelegram,
    appDomain,
    appIP
  }
}
