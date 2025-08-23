import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Menu, X, Star, Zap, Users, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Dienstleistungen", href: "#services", icon: Star },
    { name: "Über uns", href: "#about", icon: Users },
    { name: "Kontakt", href: "#contact", icon: Phone },
    { name: "Blog", href: "#blog", icon: Zap },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-10 w-10 text-accent animate-pulse" />
              <Zap className="absolute -top-1 -right-1 h-4 w-4 text-warning" />
            </div>
            <div>
              <span className="text-primary-foreground font-bold text-xl tracking-tight">GapProtection</span>
              <Badge variant="accent" className="ml-2 text-xs font-semibold shadow-glow">Security Pro</Badge>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary-foreground/10"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Anmelden
            </Button>
            <Button variant="hero" size="sm">
              Kostenlos testen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-primary-foreground hover:bg-primary-foreground/10">
                  Anmelden
                </Button>
                <Button variant="hero" className="w-full">
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