import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BrandStorySection from '../components/BrandStorySection';
import ColorPickerSection from '../components/ColorPickerSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductDetailSection from '../components/ProductDetailSection';
import WhyWeMadeItSection from '../components/WhyWeMadeItSection';
import JournalGridSection from '../components/JournalGridSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <BrandStorySection />
      <ColorPickerSection />
      <FeaturesSection />
      <ProductDetailSection />
      <WhyWeMadeItSection />
      <JournalGridSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}