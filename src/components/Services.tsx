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
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Präzise Schwachstellenprüfungen",
    description: "Unsere spezialisierten Programmier-Teams analysieren Ihre Systeme – von Webanwendungen über komplexe Netzwerke bis hin zu IoT-Ökosystemen – mit datengetriebenen, hochentwickelten Methoden. In sensiblen Bereichen wie Apotheken, Arztpraxen und Krankenhäusern identifizieren wir Schwachstellen, die den Zugriff auf sensible Patientendaten oder die Verfügbarkeit lebenswichtiger Systeme gefährden könnten.",
    features: ["SQL-Injection Scans", "XSS-Angriff Prävention", "APT-Erkennung", "IoT-Sicherheitsanalyse"],
    badge: "Präzise Analyse",
    color: "success"
  },
  {
    icon: Shield,
    title: "Strategische Sicherheitslösungen",
    description: "Durch fortschrittliche Penetrationstests (Black, Gray, White Box), Social Engineering und Red Teaming simulieren wir reale Angriffsszenarien. Für den Gesundheitssektor bedeutet das Schutz vor Ausfällen, die Patientenversorgung beeinträchtigen könnten, wie z. B. bei der Unterbrechung von Medikamentenverschreibungen oder Diagnosesystemen.",
    features: ["Black/Gray/White Box Tests", "Social Engineering", "Red Team Übungen", "Gesundheitssektor-Audits"],
    badge: "Strategisch",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Visionäres Webdesign",
    description: "Erleben Sie eine intuitive Benutzererfahrung mit dynamisch wechselnden Hintergründen, eleganten Buttons und hochwertigen Icons, die Ihre Erwartungen an Professionalität übertreffen.",
    features: ["Dynamische Hintergründe", "Elegante Buttons", "Hochwertige Icons", "Intuitive Navigation"],
    badge: "Visionär",
    color: "warning"
  },
  {
    icon: Phone,
    title: "24/7-Notfall-Response",
    description: "Unsere spezialisierten Teams stehen Ihnen rund um die Uhr bei Sicherheitsvorfällen zur Seite – mit präziser Analyse und schneller, effektiver Lösung, um Ihre Systeme zu schützen, besonders in kritischen Umgebungen wie Krankenhäusern, wo Ausfälle lebensbedrohlich sein können.",
    features: ["Rund um die Uhr", "Präzise Analyse", "Kritische Umgebungen", "Lebensrettende Systeme"],
    badge: "Notfall-Response",
    color: "accent"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
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
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant={service.color as any} className="font-semibold">
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