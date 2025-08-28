import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Zap,
  CheckCircle,
  Star
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-primary-glow rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ihre Sicherheit beginnt hier
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Erleben Sie, wie GapProtection Ihre Cybersicherheit revolutioniert und Ihre Systeme vor den Bedrohungen der digitalen Welt schützt – <strong>GapProtection, wo Sicherheit auf Innovation trifft!</strong> 😎
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-glow">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-accent" />
                  Direkter Kontakt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-primary-foreground/90">
                  <Mail className="mr-3 h-5 w-5 text-primary-glow" />
                  <span>info@gapprotection.de</span>
                </div>
                <div className="flex items-center text-primary-foreground/90">
                  <Phone className="mr-3 h-5 w-5 text-success" />
                  <span>+49 123 456 789</span>
                </div>
                <div className="flex items-center text-accent font-semibold">
                  <Zap className="mr-3 h-5 w-5" />
                  <span>Notfallkontakt: +49 987 654 321</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-glow">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-warning" />
                  Verfügbarkeit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-primary-foreground/90">
                  <span>Reguläre Zeiten:</span>
                  <span>Mo-Fr 9:00-18:00</span>
                </div>
                <div className="flex justify-between text-accent font-semibold">
                  <span>Notfall-Support:</span>
                  <span>24/7 verfügbar</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <Badge variant="accent" className="px-4 py-2 text-sm mb-4">
                Professionelle Beratung
              </Badge>
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Kontaktieren Sie unsere Experten
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Erleben Sie erstklassige Cybersicherheit durch spezialisierte Programmier-Teams und professionelle Beratung für Ihre individuellen Anforderungen.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="mr-3 h-5 w-5 text-success" />
                <span>Spezialisierte Programmier-Teams</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="mr-3 h-5 w-5 text-success" />
                <span>Gesundheitssektor-Expertise</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="mr-3 h-5 w-5 text-success" />
                <span>Effektive Cybersicherheit</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="mr-3 h-5 w-5 text-success" />
                <span>DSGVO-konforme Lösungen</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="shadow-glow">
                <Star className="mr-2 h-5 w-5" />
                Professionelle Beratung
              </Button>
              <Button variant="outline-hero" size="lg">
                <Shield className="mr-2 h-5 w-5" />
                Demo anfordern
              </Button>
            </div>

            <p className="text-primary-foreground/60 text-sm mt-4">
              Individuelle Beratung • Spezialisierte Teams • Gesundheitssektor-Expertise
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/80 mb-6">Vertraut von IT-Experten und Gesundheitseinrichtungen</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Spezialisierte Teams", "Programmier-Expertise", "Gesundheitssektor", "DSGVO Konform", "24/7 Response"].map((cert) => (
              <Badge key={cert} variant="outline" className="border-primary-foreground/30 text-primary-foreground/80">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;