# 🌍 Turistoe - Travel Booking Website

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-29-34.png" alt="Homepage Hero Section" width="600"/>
</div>
A modern, responsive travel booking platform built with React and Vite, designed to provide users with a seamless experience for discovering and booking their dream destinations. This comprehensive travel website features destination browsing, multi-step booking flow, client testimonials, and personalized travel packages.

[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-yellow)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.8.2-orange)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## ✨ Features

- 🌎 Browse travel destinations with beautiful imagery
- 👥 Guest counter for adults and children
- 💬 Customer testimonials carousel
- 📱 Fully responsive design for all devices
- ✅ Form validation throughout booking process
- 📅 Multi-step booking process (Trip Details → Personal Info → Payment → Confirmation)
- 🏨 Choose from Standard, Premium, and Luxury packages
- 🛏️ Select room types (Single, Double, Suite, Family)


## 🚀 Live Demo
Check out the live demo at [Turistoe](https://turistoe-mbz894tj9-abdulrahman-nasser0s-projects.vercel.app/)


## 📸 Screenshots

### 🖥️ Desktop View

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-29-34.png" alt="Homepage Hero Section" width="600"/>
  <p><em>Homepage with hero section and navigation</em></p>
</div>

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-29-40.png" alt="Destinations Section" width="600"/>
  <p><em>Travel destinations showcase</em></p>
</div>

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-29-53.png" alt="Booking Flow" width="600"/>
  <p><em>Trips Carousel</em></p>
</div>

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-30-07.png" alt="Trip Details" width="600"/>
  <p><em>Reviews Carousel</em></p>
</div>

### 📱 Mobile Responsive

<div align="center">
  <img src="public/screenshots/Screenshot from 2025-08-31 17-31-08.png" alt="Mobile Homepage" width="300"/>
  <img src="public/screenshots/Screenshot from 2025-08-31 17-31-24.png" alt="Mobile Booking" width="300"/>
  <img src="public/screenshots/Screenshot from 2025-08-31 17-31-42.png" alt="Mobile Form" width="300"/>
  <img src="public/screenshots/Screenshot from 2025-08-31 17-33-20.png" alt="Mobile Form" width="300"/>
</div>
<p align="center"><em>Responsive design optimized for mobile devices</em></p>

## 💡 About

Turistoe is a travel booking website that demonstrates modern React development practices. The project features a complete booking workflow from destination selection to payment confirmation, with responsive design and form validation.

## 🛠️ Built With

- **React 19.1.1** - Frontend framework
- **Vite 7.1.2** - Build tool and dev server
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **React Router 7.8.2** - Client-side routing
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## 📂 Key Components

```
src/
├── components/
│   ├── booking/           # 4-step booking flow
│   │   ├── TripDetails.jsx
│   │   ├── PersonalInfo.jsx
│   │   ├── PaymentInfo.jsx
│   │   └── BookingConfirmation.jsx
│   └── ui/               # Reusable components
│       ├── Button.jsx
│       ├── Header.jsx
│       ├── TripCard.jsx
│       └── ClientsCarousel.jsx
        ...etc
├── pages/
│   ├── Home.jsx
│   └── sections/         
└── validations/
    └── bookingValidation.js
```

## 🎯 Booking Flow

1. **Trip Details** - Select destination, package type, and room
2. **Personal Info** - Enter contact and address information
3. **Payment** - Secure payment processing (demo only)
4. **Confirmation** - Booking summary and confirmation details

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulrahman-Nasser0/turistoe.git
   cd turistoe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

- **Mobile**: Optimized for touch with stacked layouts
- **Tablet**: Grid layouts with improved spacing
- **Desktop**: Full-width layouts with hover effects

## 🎨 Styling

Uses TailwindCSS with:
- Custom blue theme (`#003C82`)
- Responsive breakpoints
- Consistent spacing and typography
- Smooth transitions

## 👨‍💻 Developer

**Abdulrahman Nasser**
- GitHub: [@Abdulrahman-Nasser0](https://github.com/Abdulrahman-Nasser0)
- LinkedIn: [Abdulrahman Nasser](https://www.linkedin.com/in/abdulrahman-nasser0/)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ for learning React and modern web development</p>
