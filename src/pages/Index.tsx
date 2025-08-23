import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ThreatAnalysis from "@/components/ThreatAnalysis";
import HealthcareThreats from "@/components/HealthcareThreats";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-6 py-8">
          <NewsTicker />
        </div>
        <Services />
        <HealthcareThreats />
        <ThreatAnalysis />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
