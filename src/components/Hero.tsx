import { Button } from "@/components/ui/button";
import { Shield, Lock, Search, AlertTriangle, Star, Users, Award, Zap } from "lucide-react";
import DynamicBackground from "./DynamicBackground";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.9)), url(${heroBackground})`,
        }}
      />
      
      <DynamicBackground className="relative z-10">
        {/* Main content */}
        <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/6bbd495e-3727-425c-a2d0-2ab5a57bdabb.png" 
              alt="GapProtection Security Logo" 
              className="h-32 w-auto drop-shadow-glow"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              GapProtection
            </span>
            <br />
            <span className="text-3xl lg:text-5xl">Die Zukunft der Cybersicherheit neu definiert</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            In einer Ära, in der Cyber-Bedrohungen wie <strong>SQL-Injection, XSS-Angriffe, Advanced Persistent Threats (APTs)</strong> und unsichere IoT-Infrastrukturen die digitale Landschaft prägen – insbesondere in sensiblen Sektoren wie <strong>Apotheken, Arztpraxen und Krankenhäusern</strong> – steht GapProtection für unübertroffene Exzellenz in Schwachstellenprüfung und strategischer Sicherheit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="shadow-glow">
              <Search className="mr-2 h-5 w-5" />
              Jetzt Schwachstellen prüfen
            </Button>
            <Button variant="outline-hero" size="lg">
              <Lock className="mr-2 h-5 w-5" />
              Professionelle Beratung
            </Button>
          </div>

          {/* Trust indicators with enhanced icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative">
                <Shield className="h-16 w-16 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <Star className="absolute -top-1 -right-1 h-6 w-6 text-warning" />
              </div>
              <p className="text-primary-foreground/90 font-bold text-lg">Spezialisierte Teams</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Expert Cybersecurity</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Lock className="h-16 w-16 text-primary-glow mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <Award className="absolute -top-1 -right-1 h-6 w-6 text-success" />
              </div>
              <p className="text-primary-foreground/90 font-bold text-lg">DSGVO Konform</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Datenschutz garantiert</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Zap className="h-16 w-16 text-warning mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <Users className="absolute -top-1 -right-1 h-6 w-6 text-accent" />
              </div>
              <p className="text-primary-foreground/90 font-bold text-lg">24/7 Support</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Immer verfügbar</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Search className="h-16 w-16 text-success mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <AlertTriangle className="absolute -top-1 -right-1 h-6 w-6 text-destructive" />
              </div>
              <p className="text-primary-foreground/90 font-bold text-lg">Gesundheitssektor</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Medizin-Expertise</p>
            </div>
          </div>
        </div>
        </div>
      </DynamicBackground>
    </section>
  );
};

export default Hero;