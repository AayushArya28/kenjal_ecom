import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';
import NewArrivals from '../components/NewArrivals';
import FeaturesSection from '../components/FeaturesSection';

// HeroBanner   — Hero / stats / product families panel
// FeaturedProducts — Core machinery horizontal scroll
// PromoBanner  — About preview + global presence + client logos
// NewArrivals  — Industries we serve (4 feature cards + full list)
// FeaturesSection — Why Kenjal (4 capability pillars)

const HomePage = () => (
    <>
        <HeroBanner />
        <FeaturedProducts />
        <PromoBanner />
        <NewArrivals />
        <FeaturesSection />
    </>
);

export default HomePage;
