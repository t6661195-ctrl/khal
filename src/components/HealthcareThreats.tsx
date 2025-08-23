import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Database, 
  Wifi, 
  Lock, 
  AlertTriangle, 
  Activity,
  Pill,
  Stethoscope,
  Building2,
  Shield,
  Zap,
  Target
} from "lucide-react";
import healthcareThreatsImage from "@/assets/healthcare-threats.jpg";
import medicalSecurityIcon from "@/assets/medical-security-icon.jpg";

const healthcareThreats = [
  {
    icon: Database,
    title: "Patientendaten-Verschlüsselung",
    description: "Ransomware-Angriffe verschlüsseln Patientenakten in Apotheken, Arztpraxen und Krankenhäusern. Ohne Zugriff auf medizinische Daten können lebensrettende Behandlungen verzögert oder unmöglich werden.",
    risk: "Kritisch",
    affected: "Apotheken, Arztpraxen, Kliniken",
    examples: ["Ascension Healthcare", "Change Healthcare", "McLaren Health Care"],
    color: "destructive"
  },
  {
    icon: Activity,
    title: "Medizingeräte-Kompromittierung",
    description: "IoT-Schwachstellen in vernetzten Medizingeräten ermöglichen Angreifern die Kontrolle über Beatmungsgeräte, Infusionspumpen oder Überwachungssysteme - mit potenziell tödlichen Folgen.",
    risk: "Kritisch",
    affected: "Intensivstationen, Operationssäle",
    examples: ["Herzschrittmacher-Hacks", "Insulin-Pumpen", "MRT-Systeme"],
    color: "destructive"
  },
  {
    icon: Pill,
    title: "Apothekenmanagement-Systeme",
    description: "SQL-Injection und XSS-Angriffe auf Apothekenmanagement-Software können Medikamentenverschreibungen manipulieren, falsche Dosierungen verursachen oder den Zugang zu lebensnotwendigen Medikamenten blockieren.",
    risk: "Hoch",
    affected: "Apotheken, Medikamentenverteilung",
    examples: ["Verschreibungsfehler", "Dosierungsmanipulation", "Lieferkettenunterbrechung"],
    color: "warning"
  },
  {
    icon: Stethoscope,
    title: "Praxismanagementsysteme",
    description: "Elevation-of-Privilege-Angriffe auf Arztpraxis-Software ermöglichen unbefugten Zugriff auf Diagnosen, Behandlungspläne und sensible Gesundheitsdaten - DSGVO-Verstöße inklusive.",
    risk: "Hoch",
    affected: "Arztpraxen, Fachkliniken",
    examples: ["Diagnose-Manipulation", "Terminplanstörung", "Abrechnungsbetrug"],
    color: "warning"
  },
  {
    icon: Building2,
    title: "Krankenhaus-Infrastruktur",
    description: "Advanced Persistent Threats (APTs) infiltrieren Krankenhaus-Netzwerke über Monate hinweg und sammeln Daten, bevor sie kritische Systeme lahmlegen - von Notaufnahmen bis OP-Sälen.",
    risk: "Kritisch",
    affected: "Große Krankenhäuser, Klinikverbände",
    examples: ["Notaufnahme-Ausfall", "OP-Verschiebungen", "Patientenverlegungen"],
    color: "destructive"
  },
  {
    icon: Wifi,
    title: "Vernetzte Gesundheitsplattformen",
    description: "Zero-Day-Exploits in Telemedizin-Plattformen und Health-Apps gefährden nicht nur Datenschutz, sondern auch die Kontinuität der Patientenversorgung in ländlichen Gebieten.",
    risk: "Mittel",
    affected: "Telemedizin, Health-Apps",
    examples: ["Videosprechstunden-Hack", "App-Datenlecks", "Cloud-Kompromittierung"],
    color: "accent"
  }
];

const HealthcareThreats = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)), url(${healthcareThreatsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Enhanced header with medical security icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={medicalSecurityIcon} 
                alt="Medical Security" 
                className="w-24 h-24 rounded-2xl shadow-glow"
              />
              <Shield className="absolute -top-2 -right-2 w-8 h-8 text-primary bg-background rounded-full p-1 shadow-lg" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Gesundheitssektor im Fadenkreuz
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>725 Sicherheitsverletzungen</strong> im Gesundheitswesen 2023 mit über <strong>133 Millionen</strong> betroffenen Patientenakten. 
            Tendenz steigend in 2025 - jeder Angriff kann Leben gefährden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthcareThreats.map((threat, index) => (
            <Card key={index} className="bg-gradient-card shadow-cyber hover:shadow-glow transition-all duration-500 group border-l-4 border-l-primary/20 hover:border-l-primary backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-300 shadow-lg">
                    <threat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <Target className="absolute -top-1 -right-1 h-5 w-5 text-destructive bg-background rounded-full p-0.5 shadow-lg" />
                  </div>
                  <Badge variant={threat.color as any} className="font-semibold px-3 py-1 shadow-sm">
                    {threat.risk}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {threat.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {threat.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Betroffene Bereiche:</p>
                    <p className="text-sm text-muted-foreground">{threat.affected}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Reale Beispiele:</p>
                    <ul className="space-y-1">
                      {threat.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <AlertTriangle className="h-3 w-3 text-warning mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-destructive/10 via-warning/5 to-destructive/10 border border-destructive/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm shadow-glow">
            <div className="relative flex justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-destructive animate-pulse" />
              <Zap className="absolute -top-1 -right-1 w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Jede Minute ohne Schutz ist eine Minute zu viel
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Im Gesundheitswesen können Cyberangriffe nicht nur Daten stehlen - sie können Leben kosten. 
              Wenn Operationssysteme ausfallen, Medikamentenverschreibungen manipuliert werden oder 
              Notaufnahmen offline gehen, stehen Menschenleben auf dem Spiel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareThreats;