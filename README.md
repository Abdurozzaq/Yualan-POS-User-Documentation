# Yualan POS User Documentation

📚 **User Documentation for Yualan POS** - Customizable user guide using environment variables

A comprehensive user guide application built with **Quasar Framework (Vue 3)** that provides interactive documentation for Yualan POS features. This application allows dynamic content customization through environment variables, making it easy to adapt for different deployments.

## 🚀 Features

- **Dynamic Configuration**: Customize app content via environment variables
- **Interactive Documentation**: User-friendly interface for POS feature guides
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Quasar Framework**: Built with Vue 3 and modern web technologies
- **Hot Reload Development**: Fast development with real-time updates

## 🛠️ Technology Stack

- **Frontend Framework**: Vue 3 + Quasar Framework
- **Build Tool**: Vite
- **Styling**: SCSS + Quasar Components
- **HTTP Client**: Axios
- **Linting**: ESLint + Prettier

## ⚙️ Environment Variables

The application uses environment variables for dynamic configuration. Copy `.env.example` to `.env` and customize the following values:

```bash
# Application Configuration
APP_NAME=Yualan POS
APP_DESCRIPTION=Panduan penggunaan fitur di Yualan POS
COMPANY_NAME=Yualan POS

# Contact Information
SUPPORT_EMAIL=abdurozzaq00@gmail.com
SUPPORT_WHATSAPP=089603363136
SUPPORT_TELEGRAM=089603363136

# Server Configuration
APP_DOMAIN=https://hosted.yualan.web.id
APP_IP=103.123.19.29
```

### Configuration Options

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `APP_NAME` | Application title displayed in the UI | Yualan POS |
| `APP_DESCRIPTION` | App description for meta tags | Panduan penggunaan fitur di Yualan POS |
| `COMPANY_NAME` | Company name shown in the interface | Yualan POS |
| `SUPPORT_EMAIL` | Contact email for support | abdurozzaq00@gmail.com |
| `SUPPORT_WHATSAPP` | WhatsApp support number | 089603363136 |
| `SUPPORT_TELEGRAM` | Telegram support contact | 089603363136 |
| `APP_DOMAIN` | Server domain URL for API connections | https://hosted.yualan.web.id |
| `APP_IP` | Server IP address for direct connections | 103.123.19.29 |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18, v20, v22, v24, v26, or v28)
- **npm** (>= 6.13.4) or **yarn** (>= 1.21.1)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd YualanPOSUserDocumentation
   ```

2. **Install dependencies**
   ```bash
   # Using yarn (recommended)
   yarn install
   
   # Using npm
   npm install
   ```

3. **Setup environment variables**
   ```bash
   # Copy example environment file
   cp .env.example .env
   
   # Edit .env file with your configuration
   ```

### Development Server

Start the development server with hot-code reloading:

```bash
# Using Quasar CLI
quasar dev

# Or using npm scripts
npm run dev
```

The application will be available at `http://localhost:9000` (default Quasar port).

## 📦 Available Scripts

### Development & Building

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build
# or
quasar build
```

### Code Quality

```bash
# Lint JavaScript/Vue files
npm run lint
# or
yarn lint

# Format code with Prettier
npm run format
# or
yarn format
```

### Testing

```bash
# Run tests (currently no tests configured)
npm test
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── boot/            # Boot files (app initialization)
├── components/      # Reusable Vue components
├── composables/     # Vue 3 composition API utilities
├── css/             # Global stylesheets
├── layouts/         # Layout components
├── pages/           # Page components/views
├── router/          # Vue Router configuration
└── App.vue          # Root component
```

## 🎨 Key Features & Pages

- **Main Layout**: Responsive navigation and layout structure
- **Feature List Page**: Overview of all POS features
- **Data Master Page**: Management of master data (products, categories, etc.)
- **Ordering System**: Order processing and payment integration
- **Inventory Management**: Stock tracking and management
- **Payment Integration**: iPay88 payment gateway support
- **Order History**: Transaction history and reporting

## 🔧 Configuration

### Quasar Configuration

Main configuration is handled in `quasar.config.js`. Key areas include:

- **Build optimization**
- **PWA settings**
- **Plugin configuration**
- **Development server settings**

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js) for detailed documentation.

### Styling

- **Global styles**: `src/css/app.scss`
- **Quasar variables**: `src/css/quasar.variables.scss`
- **Component-specific**: Each component can have scoped styles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support & Contact

For support and inquiries:

- **Email**: abdurozzaq00@gmail.com
- **WhatsApp**: +62 896-0336-3136
- **Telegram**: @089603363136

## 📄 License

This project is private and proprietary to Yualan POS.

---

**Powered by**: Quasar Framework + Vue 3  
**Author**: Abdurozzaq Nurul Hadi  
**Version**: 0.0.1
