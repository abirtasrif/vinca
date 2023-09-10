import CommunityGathered from '@/components/home/CoummunityGathered';
import Community from '@/components/home/Coummunity';
import Hero from '@/components/home/Hero';
import Packages from '@/components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Community />
        <CommunityGathered />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
