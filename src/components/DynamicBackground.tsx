import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const backgroundImages = [
  {
    name: "Global Network",
    gradient: "linear-gradient(135deg, hsl(215 45% 25% / 0.95) 0%, hsl(215 60% 15% / 0.95) 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  },
  {
    name: "Security Grid",
    gradient: "linear-gradient(135deg, hsl(215 50% 20% / 0.95) 0%, hsl(230 55% 25% / 0.95) 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E"
  },
  {
    name: "Cyber Matrix",
    gradient: "linear-gradient(135deg, hsl(200 45% 25% / 0.95) 0%, hsl(220 60% 15% / 0.95) 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Crect x='0' y='0' width='10' height='10'/%3E%3Crect x='10' y='10' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E"
  },
  {
    name: "Digital Fortress",
    gradient: "linear-gradient(135deg, hsl(210 45% 25% / 0.95) 0%, hsl(195 60% 20% / 0.95) 100%)",
    pattern: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
  }
];

interface DynamicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DynamicBackground = ({ children, className }: DynamicBackgroundProps) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const current = backgroundImages[currentBg];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            isTransitioning ? "opacity-0 scale-110" : "opacity-100 scale-100"
          )}
          style={{
            backgroundImage: `${current.gradient}, url("${current.pattern}")`,
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay"
          }}
        />
        
        {/* Overlay pattern for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-glow/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-20 w-24 h-24 border border-accent/40 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: "3s" }} />
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-warning/30 rounded-full animate-pulse" style={{ animationDuration: "2s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default DynamicBackground;