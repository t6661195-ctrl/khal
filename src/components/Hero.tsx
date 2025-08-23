import { Button } from "@/components/ui/button";
import { Shield, Lock, Search, AlertTriangle } from "lucide-react";
import DynamicBackground from "./DynamicBackground";

const Hero = () => {
  return (
    <DynamicBackground className="min-h-screen">
      <section className="relative min-h-screen overflow-hidden">

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

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-2" />
              <p className="text-primary-foreground/80 font-semibold">Spezialisierte Teams</p>
            </div>
            <div className="text-center">
              <Lock className="h-12 w-12 text-primary-glow mx-auto mb-2" />
              <p className="text-primary-foreground/80 font-semibold">DSGVO Konform</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-2" />
              <p className="text-primary-foreground/80 font-semibold">24/7 Support</p>
            </div>
            <div className="text-center">
              <Search className="h-12 w-12 text-success mx-auto mb-2" />
              <p className="text-primary-foreground/80 font-semibold">Gesundheitssektor</p>
            </div>
          </div>
        </div>
      </div>

      </section>
    </DynamicBackground>
  );
};

export default Hero;