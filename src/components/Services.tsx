import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Search, 
  FileText, 
  Phone, 
  Zap, 
  Target, 
  Globe, 
  Lock,
  AlertTriangle,
  CheckCircle,
  Star,
  Award,
  Users,
  Brain,
  Radar,
  Activity
} from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const services = [
  {
    icon: Radar,
    title: "Präzise Schwachstellenprüfungen",
    description: "Unsere spezialisierten Programmier-Teams analysieren Ihre Systeme – von Webanwendungen über komplexe Netzwerke bis hin zu IoT-Ökosystemen – mit datengetriebenen, hochentwickelten Methoden. In sensiblen Bereichen wie Apotheken, Arztpraxen und Krankenhäusern identifizieren wir Schwachstellen, die den Zugriff auf sensible Patientendaten oder die Verfügbarkeit lebenswichtiger Systeme gefährden könnten.",
    features: ["SQL-Injection Scans", "XSS-Angriff Prävention", "APT-Erkennung", "IoT-Sicherheitsanalyse"],
    badge: "Präzise Analyse",
    color: "success",
    iconColor: "text-success",
    secondaryIcon: Star
  },
  {
    icon: Shield,
    title: "Strategische Sicherheitslösungen",
    description: "Durch fortschrittliche Penetrationstests (Black, Gray, White Box), Social Engineering und Red Teaming simulieren wir reale Angriffsszenarien. Für den Gesundheitssektor bedeutet das Schutz vor Ausfällen, die Patientenversorgung beeinträchtigen könnten, wie z. B. bei der Unterbrechung von Medikamentenverschreibungen oder Diagnosesystemen.",
    features: ["Black/Gray/White Box Tests", "Social Engineering", "Red Team Übungen", "Gesundheitssektor-Audits"],
    badge: "Strategisch",
    color: "primary",
    iconColor: "text-primary",
    secondaryIcon: Award
  }
];

const Services = () => {
  return (
    <section 
      className="py-20 relative bg-background"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${servicesBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere Kernkompetenzen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hochmoderne Plattform mit innovativen Technologien und der Expertise spezialisierter Programmier-Teams – präsentiert in einem visionären, benutzerzentrierten Design, das Vertrauen, Professionalität und Innovation verkörpert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-300 shadow-lg">
                    <service.icon className={`h-12 w-12 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    <service.secondaryIcon className="absolute -top-1 -right-1 h-6 w-6 text-warning bg-background rounded-full p-1 shadow-lg" />
                  </div>
                  <Badge variant={service.color as any} className="font-semibold px-3 py-1 shadow-sm">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;