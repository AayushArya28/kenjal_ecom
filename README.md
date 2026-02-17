# Kenjal - E-Commerce Catalog Website

A modern, responsive e-commerce catalog website built with React, Tailwind CSS, and GSAP animations.

![Kenjal Catalog](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop)

## 🚀 Features

- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **GSAP Animations** - Smooth animations on hero banner and scroll-to-top button
- **Modern UI** - Clean, premium design with hover effects and transitions
- **Product Catalog** - Browse products without cart/checkout functionality
- **Optimized Performance** - Fast loading with Vite build tool

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── HeroBanner.jsx  # Hero section with GSAP
│   ├── ProductCard.jsx # Reusable product card
│   └── ...
├── data/               # Mock data
│   └── products.js     # Product catalog data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## ✨ Key Components

### Header
- Sticky navigation
- Mobile hamburger menu
- Search functionality
- Shopping icons (cart, wishlist, user)

### Hero Banner
- GSAP text animations
- Responsive layout
- Call-to-action button

### Product Cards
- Image zoom on hover
- Star ratings
- Discount badges
- Quick action buttons

### Scroll-to-Top Button
- Appears after scrolling 300px
- GSAP animations
- Smooth scroll behavior

## 🎭 GSAP Animations

- **Hero Text**: Sequential fade-in and slide-up animations
- **Scroll-to-Top**: Fade in/out with scale effects
- **Hover Effects**: Scale animations on buttons and cards

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Change Brand Color
Edit `src/index.css`:
```css
:root {
  --primary-red: #e63946; /* Your color here */
}
```

### Add Products
Edit `src/data/products.js`:
```javascript
export const featuredProducts = [
  {
    id: 1,
    name: 'Product Name',
    price: 120,
    image: '/path/to/image.jpg',
    // ... more fields
  }
];
```

## 🌐 Development

The development server runs on `http://localhost:5173`

Hot module replacement (HMR) is enabled for instant updates during development.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Images from Unsplash (placeholder images)
- Icons from Lucide React

---

Built with ❤️ using React + Vite + Tailwind CSS
