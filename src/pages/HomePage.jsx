import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import BrowseByCategory from '../components/BrowseByCategory';
import BestSellingProducts from '../components/BestSellingProducts';
import PromoBanner from '../components/PromoBanner';
import NewArrivals from '../components/NewArrivals';
import FeaturesSection from '../components/FeaturesSection';

const HomePage = () => (
    <>
        <HeroBanner />
        <FeaturedProducts />
        <BrowseByCategory />
        <BestSellingProducts />
        <PromoBanner />
        <NewArrivals />
        <FeaturesSection />
    </>
);

export default HomePage;
