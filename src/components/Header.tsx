import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Menu, X, Star, Zap, Users, Phone } from "lucide-react";
import { useState } from "react";
import companyLogo from "@/assets/company-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Dienstleistungen", href: "#services", icon: Star },
    { name: "Über uns", href: "#about", icon: Users },
    { name: "Kontakt", href: "#contact", icon: Phone },
    { name: "Blog", href: "#blog", icon: Zap },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary-foreground/20 shadow-elegant animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo with Company Branding */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img 
                src={companyLogo} 
                alt="GapProtection Logo" 
                className="h-12 w-auto rounded-lg shadow-soft group-hover:shadow-glow transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gradient font-space font-bold text-2xl tracking-tight">GapProtection</span>
              <Badge variant="accent" className="ml-2 text-xs font-bold shadow-red animate-glow-pulse">Security Pro</Badge>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-primary/80 hover:text-primary transition-all duration-500 font-space font-medium group px-4 py-3 rounded-xl hover:bg-gradient-subtle hover:shadow-soft"
              >
                <item.icon className="h-5 w-5 group-hover:scale-125 group-hover:text-accent transition-all duration-300" />
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline-hero" className="font-space font-medium hover:scale-105 transition-all duration-300">
              Anmelden
            </Button>
            <Button variant="hero" size="sm" className="font-space font-bold shadow-red hover:shadow-glow animate-glow-pulse">
              <Zap className="mr-2 h-4 w-4" />
              Kostenlos testen
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden text-primary p-2 rounded-lg hover:bg-gradient-subtle transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-primary/20 animate-slide-up">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-primary hover:text-accent transition-all duration-300 font-space font-medium rounded-xl hover:bg-gradient-subtle hover:shadow-soft"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-6 space-y-3">
                <Button variant="outline" className="w-full font-space">
                  Anmelden
                </Button>
                <Button variant="hero" className="w-full font-space font-bold shadow-red">
                  <Zap className="mr-2 h-4 w-4" />
                  Kostenlos testen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;