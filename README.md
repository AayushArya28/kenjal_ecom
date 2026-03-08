# Kenjal Industries — E-Commerce Catalog Website

A modern, responsive product catalog website for **Kenjal Industries Pvt. Ltd.** — a manufacturer and exporter of industrial machinery for beverage processing, water purification, bottling, packaging, and domestic home appliances. Built with React 19, Vite 7, and Tailwind CSS 4.

---

## 🏢 About Kenjal Industries

**Tagline:** *"Inspiring the smart living"*

Kenjal Industries Pvt. Ltd., established in 2020 in New Delhi, is a leading manufacturer and exporter of advanced industrial machinery and domestic appliances, specializing in:

- **Commercial:** Water treatment systems, beverage processing equipment, bottling machines, PET bottle manufacturing machines, filling machines, packaging machines, labeling & printing machines, industrial pumps
- **Domestic:** RO water purifiers, geysers, spare parts & accessories
- **Global Presence:** Dubai, South Africa, Uganda, Bhutan, Nepal, Sri Lanka

### Product Segments
- **🏠 Domestic** — Home water purifiers, geysers, and filter accessories (available on Flipkart)
- **🏭 Commercial** — Industrial RO plants, bottling machines, filling systems, packaging lines (enquire via WhatsApp)

---

## ✨ Features

### User Experience
- ✅ **Fully Responsive Design** — Optimized for desktop, tablet, and mobile
- ✅ **Domestic + Commercial Split** — Dedicated pages for each product segment
- ✅ **35+ Product Catalog** — Detailed product data with features, specifications, and applications
- ✅ **Product Detail Pages** — Individual pages with full specs, features, and enquiry CTAs
- ✅ **WhatsApp Integration** — Quick query form and direct WhatsApp links for commercial enquiries
- ✅ **Flipkart Buy Links** — Direct purchase links for domestic products
- ✅ **PDF Catalogue** — Downloadable product catalogue (Domestic & Commercial)
- ✅ **Google Maps Embed** — Head office location on the Contact page
- ✅ **Smooth Navigation** — Scroll-to-top button and auto-scroll on route change
- ✅ **Modern UI** — Clean card layouts, reveal-up animations, hover effects, and glassmorphism

### Performance
- ⚡ **Vite-Powered** — Instant HMR and optimized production builds
- ⚡ **SEO-Friendly** — Semantic HTML and proper heading structure
- ⚡ **Deployed on Vercel** — SPA rewrites configured via `vercel.json`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.0 | UI framework |
| **Vite** | 7.3.1 | Build tool and dev server |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework |
| **React Router DOM** | 7.13.0 | Client-side routing |
| **Lucide React** | 0.564.0 | Icon library |
| **GSAP** | 3.14.2 | Animation library |
| **ESLint** | 9.39.1 | Code linting |

### Fonts
- **Poppins** — Headings and brand text
- **Inter** — Body text

---

## 📁 Project Structure

```
kenjal_ecom/
├── public/
│   ├── images/
│   │   └── logo.png               # Brand logo
│   ├── kenjal-catalogue.pdf       # Downloadable product catalogue
│   ├── kenjal_icon.png            # Favicon / header icon
│   └── favicon.png                # Browser favicon
├── src/
│   ├── assets/                    # Product images (1-8)
│   │   ├── 1.jpeg – 6.jpeg       # Domestic product images
│   │   ├── 7.png, 8.jpeg         # Commercial product images
│   │   ├── logo.png              # Logo asset
│   │   └── kenjal_catalogue.pdf  # Catalogue PDF asset
│   ├── components/
│   │   ├── Header.jsx            # Sticky navigation with mobile menu
│   │   ├── Footer.jsx            # Contact, WhatsApp, catalogue downloads
│   │   ├── ScrollToTop.jsx       # Floating back-to-top button
│   │   └── ScrollToTopOnNavigate.jsx  # Auto-scroll on route change
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero + domestic & commercial galleries
│   │   ├── DomesticPage.jsx      # Domestic products + spare parts
│   │   ├── CommercialPage.jsx    # Commercial products + quick enquiry
│   │   ├── AboutPage.jsx         # Company info and promises
│   │   ├── ContactPage.jsx       # Office addresses, map, WhatsApp query
│   │   └── ProductDetailPage.jsx # Individual product details
│   ├── data/
│   │   ├── products.js           # 35 products (28 commercial + 7 domestic)
│   │   ├── showcaseProducts.js   # Quick-list items, Flipkart & WhatsApp links
│   │   └── siteContent.js        # Company profile, stats, clients, contact info
│   ├── App.jsx                   # Root component with routing
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles and Tailwind config
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite + Tailwind plugin config
├── vercel.json                   # Vercel SPA rewrite rules
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero section, domestic product gallery, commercial product gallery |
| `/domestic` | `DomesticPage` | All domestic RO purifiers, geysers + spare parts & accessories |
| `/commercial` | `CommercialPage` | All commercial machines & plants + quick enquiry products |
| `/about` | `AboutPage` | Company overview, product segments, value promises |
| `/contact` | `ContactPage` | Head & branch offices, quick contact row, WhatsApp query, Google Map |
| `/product/:id` | `ProductDetailPage` | Individual product with full specs, features, and enquiry options |

### Legacy Redirects
| Legacy Route | Redirects To |
|---|---|
| `/products` | `/commercial` |
| `/catalogue` | `/domestic` |
| `*` (catch-all) | `/` |

---

## 🧩 Component Overview

### Header (`Header.jsx`)
- Sticky navigation with glassmorphism on scroll
- Logo + "Kenjal Industries" branding with subtitle
- Nav links: Home, Domestic, Commercial, About, Contact Us
- Active route indicator with background highlight
- Mobile hamburger menu with slide-down drawer

### Footer (`Footer.jsx`)
- 3-card grid layout: Contact phone, WhatsApp link, Catalogue downloads
- Separate Domestic and Commercial catalogue download buttons
- Dynamic copyright year

### HomePage (`HomePage.jsx`)
- Full-width gradient hero with CTA buttons (Domestic / Commercial)
- Domestic product gallery (3-column grid → responsive)
- Commercial product gallery (4-column grid → responsive) with featured items
- "Buy on Flipkart" for domestic, "Get Info" (WhatsApp) for commercial

### DomesticPage (`DomesticPage.jsx`)
- Full catalog of domestic products with images (RO purifiers, geysers)
- Spare parts & accessories section from showcase data
- "Buy on Flipkart" links on all cards

### CommercialPage (`CommercialPage.jsx`)
- Full catalog of commercial machines with category badges
- Quick enquiry products section
- "Get Info on WhatsApp" links on all cards

### ContactPage (`ContactPage.jsx`)
- 2-column office cards: Head Office (Gurugram) + Branch Office (Patna)
- Quick contact row: Call, Email, WhatsApp
- WhatsApp Quick Query form with textarea and send button
- Embedded Google Map (Gurugram office)

### ProductDetailPage (`ProductDetailPage.jsx`)
- Breadcrumb navigation
- Product image, category badge, name, summary, description
- Features list, applications, and specifications table
- Enquiry CTAs (Contact / WhatsApp)

---

## 📦 Product Catalog

### Domestic Products (7 items)
From `data/products.js`:
- Fighter Series — Premium RO purifier
- Fighter Series Black — Matte black edition
- Kenjal ROXX — Compact RO purifier
- Fighter Series Blue — Blue edition
- Kenjal Geyser — Storage water heater
- Kenjal Geyser Glassline — Glassline coated tank

### Commercial Products (28 items)
From `data/products.js`, across 10 categories:

| Category | Products |
|---|---|
| Water Treatment Systems | RO Plant, Pressure Sand Filter, Activated Carbon Filter, Micron Filter |
| Beverage Processing Equipment | Blending Tank, Pasteurizer, Homogenizer, Carbonator, Intermix/Carbonator, Drink Mixer, Water/Syrup Chiller |
| Bottling Machines | SA-24 Rinser, Jet Rinser, VP-6 Capper, Monobloc RFC, K Series RFC, Beverage Filler/Seamer |
| Filling Machines | Carbonated Drink Filler, Servo Filler, Piston Filler/Capper, Piston Filler Linear, Piston Filler Rotary |
| PET Bottle Manufacturing | Semi-Auto Blow Moulding, Fully Auto Blow Moulding |
| Packaging Machines | Packaging Machines, Bottle Collating/Shrink Wrapping |
| Labeling & Printing | Shrink Sleeve Applicator, Inkjet Printer, BOPP Label Applicator |
| Industrial Pumps | High Pressure Pump, Rotary Lobe Pumps, Centrifugal Pumps, Screw Pumps |
| Domestic RO Systems | (listed under domestic) |
| Home Appliances | (listed under domestic) |

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 18+ (with npm)
- Modern web browser

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
|---|---|
| `npm run dev` | Start Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📞 Contact Information

### Head Office
- **Company:** Kenjal Industries Pvt. Ltd.
- **Address:** DLF Phase-3, 27/11, Gurugram, Haryana – 122002
- **Phone:** 8686-15-4646
- **Email:** kenjalindustries@gmail.com
- **Websites:** www.kenjal.com, www.kenjal.in

### Branch Office (Bihar)
- **Address:** Plot 24, Road 4, Krishnachandra Nagar, Near Zero Mile, Patna, Bihar
- **Channel Partner:** Aradhya Aqua Industry (All Bihar distribution)

---

## 🌐 Deployment

The site is deployed on **Vercel** with SPA routing configured:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

All routes are handled client-side by React Router.

---

## 📱 Responsive Breakpoints

- **Desktop:** > 980px
- **Tablet:** 640px – 980px
- **Mobile:** < 640px
- **Small Mobile:** < 420px

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **Kenjal Industries Pvt. Ltd.**

---

## 🙏 Acknowledgments

- **Lucide** for the icon set
- **Tailwind CSS** for the utility-first framework
- **Vite** for the blazing-fast build tool
- **GSAP** by GreenSock for animations
- **Vercel** for hosting and deployment

---

**Built with ❤️ for Kenjal Industries Pvt. Ltd.** | Last Updated: March 2026
