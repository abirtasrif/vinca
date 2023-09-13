import CommunityGathered from '@/components/home/CoummunityGathered';
import Community from '@/components/home/Coummunity';
import Hero from '@/components/home/Hero';
import Packages from '@/components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import Products from '@/components/products/Products';
import Gallery from '@/components/home/Gallery';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Products />
        <Community />
        <CommunityGathered />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
