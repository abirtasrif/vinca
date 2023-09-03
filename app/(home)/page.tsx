import Community from '@/components/home/Community';
import CoumminutyGathered from '@/components/home/CoumminutyGathered';
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
        <CoumminutyGathered />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
