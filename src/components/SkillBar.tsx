import { useEffect, useState, useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
}

const SkillBar = ({ name, level, icon }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{width}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
