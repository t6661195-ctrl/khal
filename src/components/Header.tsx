import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Dienstleistungen", href: "#services" },
    { name: "Über uns", href: "#about" },
    { name: "Kontakt", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-accent" />
            <div>
              <span className="text-primary-foreground font-bold text-lg">GapProtection</span>
              <Badge variant="accent" className="ml-2 text-xs">Security</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
              >
                {item.name}
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