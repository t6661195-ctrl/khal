import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Target, 
  Globe, 
  Database,
  Lock,
  Zap,
  FileX
} from "lucide-react";

const threatTypes = [
  {
    icon: Database,
    title: "Injection-Schwachstellen",
    description: "Angreifer injizieren schädliche Code-Eingaben in Datenbanken oder Anwendungen, um Daten zu stehlen oder zu manipulieren.",
    examples: ["SQL-Injection", "NoSQL-Injection", "LDAP-Injection"],
    risk: "Hoch"
  },
  {
    icon: Globe,
    title: "Cross-Site-Scripting (XSS)",
    description: "Schädliche Skripte werden in Websites eingebettet, um Benutzerdaten wie Logins zu entführen oder Sitzungen zu kapern.",
    examples: ["Stored XSS", "Reflected XSS", "DOM-based XSS"],
    risk: "Hoch"
  },
  {
    icon: Shield,
    title: "Elevation of Privilege",
    description: "Angreifer erlangen höhere Zugriffsrechte, was zu vollständiger Systemkontrolle führen kann.",
    examples: ["Privilege Escalation", "Admin-Rechte", "Root-Zugriff"],
    risk: "Kritisch"
  },
  {
    icon: Target,
    title: "Zero-Day-Exploits",
    description: "Unbekannte und ungepatchte Schwachstellen, die vor der Entdeckung durch Hersteller ausgenutzt werden.",
    examples: ["Unpatched Vulnerabilities", "Unknown Exploits", "0-Day Attacks"],
    risk: "Kritisch"
  }
];

const ransomwareStats = [
  {
    icon: FileX,
    title: "Ransomware-Angriffe 2025",
    stat: "Führende Bedrohung",
    description: "Besonders im Gesundheitssektor, wo Angriffe kritische Infrastruktur lahmlegen"
  },
  {
    icon: AlertTriangle,
    title: "Datenlecks weltweit",
    stat: "1.862+ Vorfälle",
    description: "Über 16 Milliarden Records betroffen, Tendenz steigend"
  },
  {
    icon: Lock,
    title: "Gesundheitssektor",
    stat: "725 Breaches",
    description: "133 Millionen Records in 2023, Fortsetzung in 2025"
  }
];

const ThreatAnalysis = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Vulnerability Types */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Arten, Formen und Risiken von Schwachstellen
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Schwachstellen sind vielfältig und können in verschiedene Kategorien unterteilt werden, die Websites und Systeme bedrohen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {threatTypes.map((threat, index) => (
            <Card key={index} className="bg-gradient-card shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-danger/10 group-hover:bg-danger/20 transition-colors">
                    <threat.icon className="h-8 w-8 text-danger" />
                  </div>
                  <Badge variant={threat.risk === "Kritisch" ? "destructive" : "warning"}>
                    {threat.risk}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {threat.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {threat.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {threat.examples.map((example, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ransomware & Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ransomware und aktuelle Bedrohungsstatistiken
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ransomware ist eine der gefährlichsten Formen von Cyberangriffen, bei denen Malware Dateien verschlüsselt und Lösegeld fordert. Die Risiken umfassen nicht nur finanzielle Verluste, sondern auch Betriebsausfälle, die in Krankenhäusern Leben gefährden können.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ransomwareStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-cyber text-center">
              <CardHeader>
                <div className="p-4 rounded-lg bg-warning/10 mx-auto mb-4 w-fit">
                  <stat.icon className="h-12 w-12 text-warning" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {stat.title}
                </CardTitle>
                <div className="text-3xl font-bold text-warning mb-2">
                  {stat.stat}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Breaches News Ticker */}
        <div className="bg-gradient-card rounded-lg p-8 shadow-cyber">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Gehackte Unternehmen – News-Ticker 2025
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/50 p-3 rounded border-l-4 border-danger">
              <div className="font-semibold text-danger">Ascension Healthcare</div>
              <div className="text-muted-foreground">Ransomware, kompletter Systemausfall</div>
            </div>
            <div className="bg-background/50 p-3 rounded border-l-4 border-danger">
              <div className="font-semibold text-danger">Change Healthcare</div>
              <div className="text-muted-foreground">192 Mio. Opfer, Apotheken & Ärzte</div>
            </div>
            <div className="bg-background/50 p-3 rounded border-l-4 border-warning">
              <div className="font-semibold text-warning">McLaren Health Care</div>
              <div className="text-muted-foreground">743.000 Records kompromittiert</div>
            </div>
            <div className="bg-background/50 p-3 rounded border-l-4 border-warning">
              <div className="font-semibold text-warning">Episource LLC</div>
              <div className="text-muted-foreground">5.4 Millionen Records gestohlen</div>
            </div>
            <div className="bg-background/50 p-3 rounded border-l-4 border-accent">
              <div className="font-semibold text-accent">Sepah Bank</div>
              <div className="text-muted-foreground">42 Millionen Records kompromittiert</div>
            </div>
            <div className="bg-background/50 p-3 rounded border-l-4 border-accent">
              <div className="font-semibold text-accent">Finastra</div>
              <div className="text-muted-foreground">400 GB Daten gestohlen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatAnalysis;