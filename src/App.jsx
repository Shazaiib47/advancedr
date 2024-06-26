import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import NavBar from "./components/NavBar";
import WorkflowSection from "./components/WorkflowSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <WorkflowSection/>
      <PricingSection/>
      <TestimonialsSection/>
      <Footer/>
      <ScrollToTop/>
      </div>
      </>
  );
};

export default App