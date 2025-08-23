import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Lock,
  FileText,
  HelpCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <span className="font-bold text-lg">GapProtection</span>
                <Badge variant="accent" className="ml-2 text-xs">Security</Badge>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ihre vertrauenswürdige Cybersicherheits-Plattform für moderne Schwachstellenprüfung und ethisches Hacking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Dienstleistungen</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Schwachstellenprüfung</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Penetrationstests</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Red Team Übungen</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Compliance Audits</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">24/7 Notfall-Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Ressourcen</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center"><FileText className="h-4 w-4 mr-2" />Dokumentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center"><HelpCircle className="h-4 w-4 mr-2" />Support Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Fallstudien</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Webinare</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-3 text-primary-glow" />
                <span>info@gapprotection.de</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-3 text-success" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center text-accent">
                <Phone className="h-4 w-4 mr-3" />
                <span className="font-semibold">Notfall: +49 987 654 321</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-warning" />
                <span>Deutschland<br />Sicher gehostet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
              <span>© {currentYear} GapProtection. Alle Rechte vorbehalten.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-primary-foreground transition-colors">Datenschutz</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">AGB</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">Impressum</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <Badge variant="success" className="text-xs">DSGVO Konform</Badge>
              <Badge variant="warning" className="text-xs">ISO 27001</Badge>
              <div className="flex items-center text-xs text-primary-foreground/60">
                <Lock className="h-3 w-3 mr-1" />
                Sicher gehostet in Deutschland
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;