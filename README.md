# Kenjal E-Commerce Website

A modern, responsive e-commerce catalog website for **Kenjal Industries** — a leading manufacturer of water purifiers, RO systems, home appliances, and wellness products in India. Built with React 19, GSAP animations, and Tailwind CSS 4.

![Kenjal](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop)

---

## 🏢 About Kenjal Industries

**Tagline:** *"Inspiring the smart living"*

Kenjal is a premier manufacturer and exporter of quality water purifiers and home appliances across India and globally, specializing in:
- **Water Purification Systems:** RO (Reverse Osmosis), UV Filtration, Inline Filters
- **Products:** Water Purifiers, Geysers, LED TVs, Fans, and Electronics
- **Technologies:** Membrane Housing, UV Barrel, CTO, GAC, Pipe Roll
- **Commercial Solutions:** Industrial RO Plants (25 LPH and higher)

### Brand Portfolio
- **Kenjal** — Premium water purifiers and home appliances
- **BLU MRX / MXHD** — Consumer electronics and gadgets

---

## ✨ Features

### User Experience
- ✅ **Fully Responsive Design** — Optimized for desktop, tablet, and mobile devices
- ✅ **GSAP Animations** — Professional scroll-triggered animations and smooth transitions
- ✅ **Modern UI/UX** — Gradient designs, glassmorphism effects, and premium aesthetics
- ✅ **Product Catalog** — Browse 30+ products across multiple categories
- ✅ **Product Categories** — RO Systems, Spare Parts, Home Appliances, Commercial RO
- ✅ **Product Detail Pages** — Dedicated pages with product info and enquiry CTAs
- ✅ **Touch-Friendly Carousels** — Swipeable product galleries on mobile
- ✅ **PDF Catalogue** — Download complete product catalogue
- ✅ **WhatsApp Integration** — Quick query form with direct WhatsApp messaging
- ✅ **Smooth Navigation** — Scroll-to-top button and auto-scroll on route change

### Performance
- ⚡ **Fast Loading** — Powered by Vite for instant HMR and optimized builds
- ⚡ **Optimized Assets** — Lazy loading and fallback handlers for images
- ⚡ **SEO-Friendly** — Semantic HTML and proper page structure

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **Vite** | 7.3.1 | Build tool and dev server |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework |
| **GSAP** | 3.14.2 | Professional animation library (ScrollTrigger plugin) |
| **React Router DOM** | 7.13.0 | Client-side routing |
| **Lucide React** | 0.564.0 | Beautiful icon library |
| **ESLint** | 9.39.1 | Code linting and quality |

### Fonts
- **Poppins** (300–900) — Headings and brand text
- **Inter** (300–900) — Body text

---

## 📁 Project Structure

```
kenjal_ecom/
├── public/
│   ├── images/
│   │   ├── logo.png              # Brand logo
│   │   ├── hero-product.png      # Hero section product image
│   │   ├── promo.png             # Promo banner image
│   │   └── products/             # Product images
│   ├── kenjal-catalogue.pdf      # Downloadable product catalogue
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Sticky navigation bar
│   │   ├── Footer.jsx            # Site-wide footer
│   │   ├── HeroBanner.jsx        # Homepage hero section
│   │   ├── FeaturedProducts.jsx  # Flash Sales carousel
│   │   ├── ProductCard.jsx       # Reusable product card
│   │   ├── PromoBanner.jsx       # Promotional banner
│   │   ├── NewArrivals.jsx       # New Arrival grid section
│   │   ├── FeaturesSection.jsx   # Trust badges (delivery, support, guarantee)
│   │   ├── BrowseByCategory.jsx  # Category grid (not used on homepage)
│   │   ├── BestSellingProducts.jsx # Best sellers (not used on homepage)
│   │   ├── ScrollToTop.jsx       # Floating back-to-top button
│   │   └── ScrollToTopOnNavigate.jsx # Auto-scroll on route change
│   ├── pages/
│   │   ├── HomePage.jsx          # Home page
│   │   ├── AboutPage.jsx         # About Us page
│   │   ├── ProductsPage.jsx      # Products listing with filters
│   │   ├── ProductDetailPage.jsx # Individual product detail
│   │   ├── CataloguePage.jsx     # PDF catalogue view/download
│   │   └── ContactPage.jsx       # Contact form and locations
│   ├── data/
│   │   └── products.js           # Product data (featured, bestselling, new arrivals)
│   ├── App.jsx                   # Root component with routing
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles, CSS variables, Tailwind config
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Hero banner, flash sales, promo, new arrivals, features |
| `/about` | `AboutPage` | Company mission, values, and technologies |
| `/products` | `ProductsPage` | Full product catalog with category filters (27 products) |
| `/product/:id` | `ProductDetailPage` | Individual product details with enquiry options |
| `/catalogue` | `CataloguePage` | View/download PDF catalogue |
| `/contact` | `ContactPage` | Contact form, office locations, WhatsApp query |

---

## 🧩 Component Breakdown

### Header (`Header.jsx`)
- **Sticky Navigation** — Glassmorphism effect on scroll
- **Logo + Brand Name** — "Kenjal" with gradient styling
- **Nav Links:** Home, About Us, Products, Contact Us
- **CTA Button:** "View Catalogue" (opens PDF)
- **Mobile Menu:** Hamburger menu with slide-down drawer
- **Active Route Indicator** — Blue background and underline on active link

### Footer (`Footer.jsx`)
- **4-Column Layout:** Brand + Subscribe, Support, Pages, Quick Links
- **Email Subscription Form** — "Get 10% off your first order"
- **Contact Info:** Phone, email, address (Patna, Bihar)
- **Links:** All pages + Privacy Policy, Terms, FAQ
- **Copyright Notice** — Dynamic year

### HeroBanner (`HeroBanner.jsx`)
- **Full-Screen Hero** (min-height: 88vh)
- **GSAP Animations** — Text stagger-fade, image scale-in with back.out easing
- **Content:** Exclusive offers badge, gradient heading, trust bar (4.9★, 2,400+ customers)
- **CTAs:** "Shop Now" (→ Products), "View Catalogue" (→ PDF)
- **Decorative Elements:** Floating chips (100% Natural, Hot Deals, Free Delivery)

### FeaturedProducts (`FeaturedProducts.jsx`)
- **Section:** "Today's → ⚡ Flash Sales"
- **Horizontal Carousel** — Touch-swipeable with arrow navigation
- **8 Featured Products** — Rendered via `<ProductCard>`
- **Scroll Animations** — Fade-up on viewport entry
- **"View All Products" Button**

### ProductCard (`ProductCard.jsx`)
- **Card Design:** Gradient background, 1:1 image aspect ratio
- **Hover Effect:** "View Details" bar slides up with Eye icon
- **Link:** Routes to `/product/:id` with product data passed via state
- **Displays:** Product image + name only (no price/rating shown)

### PromoBanner (`PromoBanner.jsx`)
- **Dark Gradient Banner** with decorative glow blobs
- **Content:** "Enhance Your Drinking Experience"
- **CTA:** "Buy Now" button
- **Right Image:** Glassmorphic container with promo image

### NewArrivals (`NewArrivals.jsx`)
- **Section:** "Featured → ✨ New Arrival"
- **Asymmetric Grid Layout** (620px height):
  - 1 large featured card (left)
  - 1 medium + 2 small cards (right)
- **4 Products:** Kenjal Fighter Series, Roxx, Metal Geyser, Geyser Glassline
- **Dark Overlay Cards** with "New" tags

### FeaturesSection (`FeaturesSection.jsx`)
- **3 Trust Badges:**
  1. 🚚 **FREE & FAST DELIVERY** — Free for orders over ₹140
  2. 🎧 **24/7 CUSTOMER SERVICE** — Friendly support
  3. 🛡️ **MONEY BACK GUARANTEE** — 30-day returns
- **Hover Effects:** Colored glow shadows, icon ring rotation

### ProductsPage (`ProductsPage.jsx`)
- **Type Toggle:** Domestic (26) vs. Commercial (1)
- **Category Filters:** Dynamically generated tabs (All, RO, RO Parts, Spare Parts, Home Appliances, Commercial RO)
- **27 Total Products** — 4-column responsive grid (4→3→2→1)
- **Each Card:** Category badge, product name, "View Details" link
- **Animations:** Fade-in-up on filter change

### ProductDetailPage (`ProductDetailPage.jsx`)
- **2-Column Layout:** Large product image (left), details (right)
- **Breadcrumb:** Home / Products / [Product Name]
- **Content:** Category badge, product name, description (if available)
- **Contact Info:** Phone + email with icons
- **CTAs:** "Enquire Now" (→ Contact), "All Products" (← Back)
- **Responsive:** Stacks on mobile

### ContactPage (`ContactPage.jsx`)
- **3 Office Locations:**
  1. **Kenjal Industries** — DLF Phase-3, Gurugram, Haryana 122002
  2. **Head Office** — Delhi (8686-15-4646, contact@kenjal.com)
  3. **Channel Partner** — Aradhya Aqua Industry, Patna, Bihar 800007 (+91 9631582105)
- **Regional Numbers:** All India, Chapra, Siwan-Gopalganj
- **WhatsApp Quick Query** — Textarea + "Send on WhatsApp" button (→ wa.me/918686154646)
- **Embedded Google Map** (Gurugram office)

### CataloguePage (`CataloguePage.jsx`)
- **Catalogue Card:** "Kenjal Product Catalogue"
- **Description:** Complete product range
- **Actions:** "View PDF" (opens in new tab), "Download PDF"

---

## 📦 Product Catalog

### Homepage Featured Products (8 items)
From `data/products.js` — BLU MRX/MXHD brand:
- MXHD-01 USB Keyboard (₹890)
- MXHD-10 Notebook (₹1,760)
- MXHD Portable Mouse (₹360)
- MXHD 4G LTE Dual SIM (₹2,999)
- Gaming Headset Pro (₹1,299)
- Wireless Earbuds (₹899)
- Smart Watch Series 5 (₹2,499)
- Mechanical Keyboard RGB (₹3,499)

### New Arrivals (4 items)
From `data/products.js` — Kenjal brand:
- Kenjal Fighter Series — Advanced RO Technology
- Kenjal Roxx — Stylish & Powerful Pure Water
- Kenjal Metal Geyser — Instant Hot Water
- Kenjal Geyser - Glassline — Efficient & Reliable Heating

### Products Page Catalog (27 items)
From `ProductsPage.jsx` inline data:

**Domestic RO Water Purifiers (14):**
- KENJAL WONDER PLUS, FLO-TECH COPPER, COPPER (BLACK), FRONTIER, WONDER DELUXE, KENJAL 2.0, Kenjal 8000, Zodikaa Series, Zodikaa Ionic ABC, Kenjal Royal, Kenjal Piure Plus, Kenjal Candy Alkaline, Kenjal Luxury Modular, Kenjal Dual Alkaline, AQUA SWIFT ECO

**RO Parts (4):**
- Kenjal PUSH, Smart 100 Pump, MH Heat Pump, Booster Motor

**Spare Parts (4):**
- Spare Filter, Zodikaa Membrane Filter, Zodikaa Membrane Box, KEMFLO Carbon

**Home Appliances (2):**
- Metal Geyser 10 LTR, LED Smart TV

**Commercial RO (1):**
- 25 LPH RO Plant

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 18+ (with npm)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kenjal_ecom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173` with hot module replacement

4. **Build for production**
   ```bash
   npm run build
   ```
   Outputs to `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📞 Contact Information

### Headquarters
- **Company:** Kenjal Industries
- **Registered Office:** DLF Phase-3, 27/11, Gurugram, Haryana 122002
- **Head Office:** Delhi
- **Phone:** 8686-15-4646
- **Email:** contact@kenjal.com
- **Website:** www.kenjal.com

### Channel Partner (All Bihar)
- **Company:** Aradhya Aqua Industry
- **Location:** Patna (Bihar) Pin-800007
- **Phone:** +91 9631582105

### Regional Support
- **All India:** 96315 82105 (Phone & WhatsApp)
- **Chapra:** 9955668833 (Phone & WhatsApp)
- **Siwan-Gopalganj:** 9572424344 / WhatsApp: 9801011105

---

## 🎨 Design System

### Color Palette
- **Primary (Brand Blue):** `#2563eb` / `rgb(37, 99, 235)`
- **Primary Dark:** `#1d4ed8`
- **Primary Light:** `#3b82f6`
- **Ink (Text):** `#0f172a` (dark) / `#475569` (medium) / `#94a3b8` (muted)
- **Accent Red:** `#ef4444`
- **Accent Green:** `#059669`
- **Surface:** `#ffffff` (primary) / `#f8fafc` (secondary)
- **Border:** `#e2e8f0`

### Typography
- **Headings:** Poppins (700–900 weight)
- **Body:** Inter (400–600 weight)
- **Base Size:** 16px

### Border Radius
- Small: 8px
- Medium: 14px
- Large: 20px

### Shadows
- **Card:** `0 1px 3px rgba(0,0,0,0.1)`
- **Card Hover:** `0 10px 25px rgba(0,0,0,0.08)`
- **Brand:** `0 4px 16px rgba(37,99,235,0.3)`

---

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **Kenjal Industries**.

---

## 🙏 Acknowledgments

- **GSAP** by GreenSock for professional animations
- **Lucide** for the beautiful icon set
- **Unsplash** for placeholder images
- **Tailwind CSS** team for the utility-first framework
- **Vite** team for the blazing-fast build tool

---

## 📝 Additional Notes

### Recently Updated Features
- ✅ Removed promotional top banner for cleaner header
- ✅ Removed product ratings, discounts, and prices from product cards
- ✅ Removed "Browse by Category" and "Best Selling Products" sections
- ✅ Optimized Flash Sale section with reduced margins and mobile touch scrolling
- ✅ Removed "like" button from product cards
- ✅ Changed "Add to Cart" to "View Details" with product detail page routing
- ✅ Created individual product detail pages with enquiry options
- ✅ Made all product cards link to detail pages

### Future Enhancements
- 🔄 Add shopping cart and checkout functionality
- 🔄 Integrate payment gateway
- 🔄 Add user authentication and accounts
- 🔄 Implement product search functionality
- 🔄 Add product reviews and ratings system
- 🔄 Integrate CMS for content management
- 🔄 Add blog section for water purification tips
- 🔄 Implement live chat support

---

**Built with ❤️ for Kenjal Industries** | Last Updated: March 2026
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
