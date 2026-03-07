import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CataloguePage from './pages/CataloguePage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <ScrollToTopOnNavigate />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
