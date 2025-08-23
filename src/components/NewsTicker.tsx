import { useState, useEffect } from "react";
import { AlertTriangle, Shield, Database, Clock } from "lucide-react";

const securityNews = [
  {
    icon: AlertTriangle,
    text: "UNFI Lebensmittelversorgung - Massive Datenschutzverletzung betrifft Lieferketten",
    severity: "high",
    date: "2025"
  },
  {
    icon: Database,
    text: "Sepah Bank - 42 Millionen Kundendaten kompromittiert, Finanzsektor betroffen",
    severity: "critical",
    date: "2025"
  },
  {
    icon: Shield,
    text: "Coca-Cola Ransomware-Angriff - Mitarbeiterdaten gestohlen, Betrieb unterbrochen",
    severity: "high",
    date: "2025"
  },
  {
    icon: AlertTriangle,
    text: "Coinbase Insider-Leak - Kryptowährungsplattform von internen Bedrohungen betroffen",
    severity: "medium",
    date: "2025"
  },
  {
    icon: Database,
    text: "Finastra - 400 GB Finanzdaten gestohlen, Bankensoftware kompromittiert",
    severity: "critical",
    date: "2025"
  },
  {
    icon: Shield,
    text: "Ascension Healthcare - Ransomware legt Krankenhaussysteme lahm",
    severity: "critical",
    date: "2025"
  },
  {
    icon: AlertTriangle,
    text: "Change Healthcare - 192 Millionen Patienten betroffen, Apotheken und Ärzte offline",
    severity: "critical",
    date: "2025"
  },
  {
    icon: Database,
    text: "McLaren Health Care - 743.000 Patientenakten kompromittiert",
    severity: "high",
    date: "2025"
  }
];

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % securityNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentNews = securityNews[currentIndex];
  const IconComponent = currentNews.icon;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-destructive";
      case "high":
        return "text-warning";
      case "medium":
        return "text-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="bg-card/95 backdrop-blur-sm border-l-4 border-l-destructive shadow-cyber">
      <div className="px-6 py-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Security Breach Alert
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{currentNews.date}</span>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <IconComponent className={`w-5 h-5 mt-0.5 flex-shrink-0 ${getSeverityColor(currentNews.severity)}`} />
          <p className="text-sm text-foreground leading-relaxed">
            {currentNews.text}
          </p>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-1">
            {securityNews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-destructive" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {currentIndex + 1} / {securityNews.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;