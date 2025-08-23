import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  Lock,
  TrendingUp
} from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Technologische Vorreiterrolle",
      description: "Unsere spezialisierten Programmier-Teams setzen auf bahnbrechende Methoden und liefern detaillierte, strategische Berichte, die Ihre Sicherheit auf ein neues Niveau heben.",
      badge: "Vorreiter"
    },
    {
      icon: Lock,
      title: "Vertrauen und Compliance",
      description: "Höchste Datenschutzstandards nach DSGVO, gehostet in sicheren deutschen Rechenzentren, für unerschütterliches Vertrauen.",
      badge: "Vertrauen"
    },
    {
      icon: Users,
      title: "Benutzerzentrierte Innovation",
      description: "Ein modernes, dynamisches Design mit nahtloser Navigation und API-Integration für optimierte Sicherheitsprozesse.",
      badge: "Innovation"
    },
    {
      icon: Zap,
      title: "Skalierbare Exzellenz",
      description: "Von KMU über Freiberufler bis hin zu Großunternehmen – unsere Lösungen passen sich Ihren individuellen Anforderungen an.",
      badge: "Skalierbar"
    },
    {
      icon: TrendingUp,
      title: "Zukunftsorientiert",
      description: "Wir schützen nicht nur vor heutigen Bedrohungen, sondern machen Ihre Systeme bereit für die Herausforderungen von morgen.",
      badge: "Zukunft"
    },
    {
      icon: Globe,
      title: "Gesundheitssektor-Expertise",
      description: "Spezialisiert auf kritische Umgebungen wie Apotheken, Arztpraxen und Krankenhäuser, wo Sicherheit Leben rettet.",
      badge: "Gesundheit"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Warum GapProtection wählen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit GapProtection gestalten wir die Zukunft der Cybersicherheit – präzise, zuverlässig und zukunftsweisend. Schützen Sie Ihr Unternehmen vor den Bedrohungen der digitalen Welt und erleben Sie Cybersicherheit auf höchstem Niveau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card shadow-cyber hover:shadow-glow transition-all duration-300 group border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {reason.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="bg-gradient-hero shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Star className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary-foreground mb-6">
                Ihre Sicherheit beginnt hier
              </h3>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Schützen Sie Ihre Systeme und optimieren Sie Ihre Prozesse mit unserer Plattform – erleben Sie Cybersicherheit auf höchstem Niveau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="shadow-glow">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Professionelle Beratung
                </Button>
                <Button variant="outline-hero" size="lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Jetzt Schwachstellen prüfen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;