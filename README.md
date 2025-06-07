<div align="center">

# 🚀 Frontend Project

### A modern, responsive React application with TypeScript

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

_An interactive onboarding wizard and dashboard showcasing advanced UI/UX patterns with smooth animations and beautiful, modern design._

[🎯 Live Demo](#) • [📖 Documentation](#) • [� Report Bug](#) • [💡 Request Feature](#)

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 🎨 **User Interface**

- Beautiful landing page with interactive elements
- Smooth animations powered by Framer Motion
- Fully responsive across all devices
- Modern gradient backgrounds
- Dark/Light theme support

</td>
<td>

### 🧭 **Navigation & Flow**

- Multi-step onboarding wizard
- Progress tracking and validation
- React Router for seamless navigation
- Smooth step transitions
- Interactive dashboard

</td>
</tr>
<tr>
<td>

### 🛠️ **Development**

- Full TypeScript implementation
- ESLint code quality enforcement
- Hot Module Replacement (HMR)
- Component-based architecture
- Custom React hooks

</td>
<td>

### 📊 **Data & Analytics**

- Interactive charts with Recharts
- Local storage data persistence
- Form validation with error handling
- Real-time metrics display
- Type-safe data structures

</td>
</tr>
</table>

## 🏗️ Tech Stack

<div align="center">

### Core Framework

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

### Styling & Animation

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.16.0-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-0.513.0-F56565?style=flat-square)](https://lucide.dev/)

### Data & Routing

[![Recharts](https://img.shields.io/badge/Recharts-2.15.3-8884D8?style=flat-square)](https://recharts.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.6.2-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1.9.0-5A29E4?style=flat-square)](https://axios-http.com/)

### Development Tools

[![ESLint](https://img.shields.io/badge/ESLint-9.25.0-4B32C3?style=flat-square&logo=eslint)](https://eslint.org/)
[![TypeScript ESLint](https://img.shields.io/badge/TS_ESLint-8.30.1-000000?style=flat-square)](https://typescript-eslint.io/)

</div>

## � Project Architecture

```
📁 src/
├── 🎨 components/
│   ├── 🏠 LandingPage.tsx          # Hero section & feature showcase
│   ├── 📊 Dashboard/
│   │   └── Dashboard.tsx           # Analytics & metrics dashboard
│   └── 🚀 Onboarding/
│       ├── OnboardingWizard.tsx    # Main wizard orchestrator
│       ├── ProgressBar.tsx         # Visual progress indicator
│       ├── Step1.tsx              # 👤 Personal information
│       ├── Step2.tsx              # 🏢 Business information
│       └── Step3.tsx              # ⚙️ Preferences setup
├── 🪝 hooks/
│   └── useSwipe.ts                # 👆 Touch gesture handling
├── 📋 types/
│   ├── index.ts                   # 🌐 Global type definitions
│   └── onboarding.ts              # 📝 Onboarding interfaces
├── 🛠️ utils/
│   └── storage.ts                 # 💾 Local storage management
├── 🖼️ assets/                     # Static resources
├── ⚡ App.tsx                     # Main app & routing logic
└── 🎯 main.tsx                   # Application entry point
```

<details>
<summary><strong>🔍 Component Details</strong></summary>

### 🏠 Landing Page

- Interactive hero with mouse tracking
- Animated feature cards
- Smooth scroll navigation
- Call-to-action integration

### 🚀 Onboarding Wizard

- **Step 1**: Personal data collection
- **Step 2**: Business information gathering
- **Step 3**: Preference configuration
- Real-time validation & progress tracking

### 📊 Dashboard

- Key metrics visualization
- Interactive charts (Recharts)
- Activity timeline
- Quick actions panel

</details>

## � Quick Start

### Prerequisites

<table>
<tr>
<td align="center">
<img src="https://nodejs.org/static/images/logo.svg" width="50">
<br><strong>Node.js 18+</strong>
<br><a href="https://nodejs.org/">Download</a>
</td>
<td align="center">
<img src="https://www.npmjs.com/static/images/npm-logo.svg" width="50">
<br><strong>npm/yarn</strong>
<br>Package Manager
</td>
<td align="center">
<img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" width="50">
<br><strong>Git</strong>
<br><a href="https://git-scm.com/">Download</a>
</td>
</tr>
</table>

### ⚡ Installation

```bash
# 1️⃣ Clone the repository
git clone <repository-url>
cd frontend-test

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Open in browser
# 🌐 http://localhost:5173
```

### 🔧 Development Scripts

| Command           | Description                  | Usage        |
| ----------------- | ---------------------------- | ------------ |
| `npm run dev`     | 🔥 Start dev server with HMR | Development  |
| `npm run build`   | 📦 Build for production      | Deployment   |
| `npm run preview` | 👀 Preview production build  | Testing      |
| `npm run lint`    | 🔍 Run ESLint checks         | Code quality |

<details>
<summary><strong>🛠️ Troubleshooting</strong></summary>

#### Common Issues & Solutions

**🔄 Dependency Issues**

```bash
rm -rf node_modules package-lock.json
npm install
```

**⚡ Vite Cache Problems**

```bash
npx vite --clearCache
```

**📦 Node.js Version Check**

```bash
node --version  # Should be 18.0+
```

#### Development Features

- ⚡ **Hot Module Replacement** - Instant updates
- 🔄 **Fast Refresh** - Preserves component state
- 🚨 **Error Overlay** - In-browser error reporting
- 📝 **TypeScript Integration** - Real-time type checking

</details>

## 📸 Application Preview

<div align="center">

### 🏠 Landing Page

<img src="./screenshots/landing-page.png" alt="Landing Page" width="600">

_Modern hero section with interactive elements and smooth animations_

---

### 🚀 Onboarding Experience

<table>
<tr>
<td align="center">
<img src="./screenshots/onboarding-step1.png" alt="Step 1" width="250">
<br><strong>Step 1: Personal Info</strong>
<br><em>Data collection with validation</em>
</td>
<td align="center">
<img src="./screenshots/onboarding-step2.png" alt="Step 2" width="250">
<br><strong>Step 2: Business Details</strong>
<br><em>Company information gathering</em>
</td>
<td align="center">
<img src="./screenshots/onboarding-step3.png" alt="Step 3" width="250">
<br><strong>Step 3: Preferences</strong>
<br><em>Theme and layout configuration</em>
</td>
</tr>
</table>

---

### 📊 Interactive Dashboard

<img src="./screenshots/dashboard.png" alt="Dashboard" width="600">

_Comprehensive analytics with charts, metrics, and real-time data_

</div>

## 🎯 Key Features Deep Dive

<details>
<summary><strong>🏠 Landing Page</strong></summary>

- 🎨 **Interactive Hero Section** - Mouse-tracking effects and dynamic backgrounds
- 📱 **Responsive Design** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Lazy loading and optimized assets
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 🔗 **Call-to-Action Integration** - Seamless onboarding flow initiation

</details>

<details>
<summary><strong>🚀 Onboarding Wizard</strong></summary>

- 📊 **Progress Tracking** - Visual progress bar with step indicators
- ✅ **Real-time Validation** - Form validation with error handling
- 💾 **Data Persistence** - Local storage for session recovery
- 🎨 **Smooth Transitions** - Animated step navigation
- 📱 **Touch Gestures** - Swipe support for mobile devices

</details>

<details>
<summary><strong>📊 Analytics Dashboard</strong></summary>

- 📈 **Interactive Charts** - Recharts integration with hover effects
- 📊 **Key Metrics Display** - Real-time data visualization
- 🔔 **Activity Timeline** - Recent user actions and notifications
- ⚡ **Quick Actions** - One-click navigation to common tasks
- 🎨 **Customizable Layout** - User preference based dashboard arrangement

</details>

## 🎨 Design System

| Element           | Implementation   | Features                                     |
| ----------------- | ---------------- | -------------------------------------------- |
| **🎨 Colors**     | Tailwind CSS     | Custom gradient backgrounds, theme variables |
| **✨ Animations** | Framer Motion    | Smooth transitions, micro-interactions       |
| **📱 Responsive** | CSS Grid/Flexbox | Mobile-first approach, breakpoint system     |
| **🎭 Icons**      | Lucide React     | 1000+ consistent icons, customizable         |
| **📝 Typography** | Inter Font       | Professional hierarchy, readable scales      |

## ⚙️ Configuration Files

| File                 | Purpose             | Key Features                       |
| -------------------- | ------------------- | ---------------------------------- |
| `vite.config.ts`     | Build configuration | HMR, plugins, optimization         |
| `tsconfig.json`      | TypeScript settings | Strict typing, path mapping        |
| `eslint.config.js`   | Code quality rules  | TypeScript support, best practices |
| `tailwind.config.js` | CSS framework setup | Custom themes, responsive design   |

## 🚀 Deployment & Production

### 📦 Build Process

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build process:

- ⚡ **Vite Optimization** - Code splitting, tree shaking
- 🗜️ **Asset Compression** - Minification, gzip compression
- 📊 **Bundle Analysis** - Optimized chunk sizes
- 🔒 **Type Checking** - Full TypeScript validation

### 🌐 Deployment Options

<table>
<tr>
<td align="center">
<strong>Vercel</strong><br>
<code>npm i -g vercel</code><br>
<code>vercel --prod</code>
</td>
<td align="center">
<strong>Netlify</strong><br>
Drag & drop <code>dist/</code><br>
or connect Git repo
</td>
<td align="center">
<strong>GitHub Pages</strong><br>
<code>npm run build</code><br>
Upload <code>dist/</code> folder
</td>
</tr>
</table>

### 🔄 Application Flow

```mermaid
graph TD
    A[🏠 Landing Page] --> B[🚀 Start Onboarding]
    B --> C[👤 Step 1: Personal Info]
    C --> D[🏢 Step 2: Business Info]
    D --> E[⚙️ Step 3: Preferences]
    E --> F[💾 Save to Local Storage]
    F --> G[📊 Redirect to Dashboard]
    G --> H[📈 Display Personalized Content]
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🛠️ Development Workflow

```bash
# 1️⃣ Fork & clone
git clone https://github.com/yourusername/frontend-test.git
cd frontend-test

# 2️⃣ Create feature branch
git checkout -b feature/amazing-feature

# 3️⃣ Make changes & commit
git commit -m "✨ Add amazing feature"

# 4️⃣ Push & create PR
git push origin feature/amazing-feature
```

### 📋 Contribution Guidelines

- 🧪 **Testing** - Ensure all features work as expected
- � **Documentation** - Update README for new features
- 🎨 **Code Style** - Follow ESLint rules and conventions
- 🔄 **Atomic Commits** - One feature per commit with clear messages

### 🏷️ Commit Convention

```
✨ feat: add new feature
🐛 fix: bug fixes
📝 docs: documentation updates
🎨 style: code formatting
♻️ refactor: code refactoring
🧪 test: adding tests
⚡ perf: performance improvements
```

## 📞 Support & Community

<div align="center">

### 💬 Get Help

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](../../issues)
[![Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github)](../../discussions)

### 👨‍💻 Developer Contact

For direct inquiries, suggestions, or collaboration opportunities:

[![Email](https://img.shields.io/badge/Email-mintu12890551%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mintu12890551@gmail.com)

### 🌟 Show Your Support

If this project helped you, please consider giving it a ⭐ on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/frontend-test&type=Date)](https://star-history.com/#yourusername/frontend-test&Date)

</div>

---

<div align="center">

**Built with ❤️ using React, TypeScript, and modern web technologies**

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Made with Vite](https://img.shields.io/badge/Made%20with-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

</div>
