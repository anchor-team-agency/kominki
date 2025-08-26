import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceDetails from "@/components/ServiceDetails";
import StoreLocation from "@/components/StoreLocation";
import ComprehensiveOffer from "@/components/ComprehensiveOffer";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import ProductExample from "@/components/ProductExample";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Summary from "@/components/Summary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen" role="main">
        <HeroSection />
        <ServiceDetails />
        <StoreLocation />
        <ComprehensiveOffer />
        <WhyUs />
        <AboutUs />
        <Portfolio />
        <Pricing />
        <ProductExample />
        <CustomerReviews />
        <Contact />
        <FAQ />
        <Summary />
        <Footer />
      </main>
    </>
  );
};

export default Index;