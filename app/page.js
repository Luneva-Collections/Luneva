import HeroSection from '../components/HeroSection';
import BrandStorySection from '../components/BrandStorySection';
import ColorPickerSection from '../components/ColorPickerSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductDetailSection from '../components/ProductDetailSection';
import WhyWeMadeItSection from '../components/WhyWeMadeItSection';
import JournalGridSection from '../components/JournalGridSection';
import CallToActionSection from '../components/CallToActionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <ColorPickerSection />
      <FeaturesSection />
      <ProductDetailSection />
      <WhyWeMadeItSection />
      <JournalGridSection />
      <CallToActionSection />
    </main>
  );
}
