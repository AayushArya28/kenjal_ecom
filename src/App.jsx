import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DomesticPage from './pages/DomesticPage';
import CommercialPage from './pages/CommercialPage';
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
          <Route path="/domestic" element={<DomesticPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* Legacy routes */}
          <Route path="/products" element={<Navigate to="/commercial" replace />} />
          <Route path="/catalogue" element={<Navigate to="/domestic" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
