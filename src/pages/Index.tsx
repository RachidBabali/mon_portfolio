import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import rachidImg from "@/assets/rachid.jpeg";

const roles = ["Développeur Web Full Stack", "React & PHP Developer", "Créateur de Solutions Web"];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} /> Disponible pour des projets
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Salut, je suis{" "}
              <span className="gradient-text">Rachid</span>
            </h1>

            <div className="h-10 md:h-12 mb-6">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayed}
                <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
              </p>
            </div>

            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Je crée des applications web modernes et performantes. Passionné par le code propre et les interfaces intuitives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Code2 size={18} /> Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent relative" style={{ borderImage: "linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end))) 1" }}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={rachidImg}
                  alt="Rachid - Développeur Web Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-sm font-mono shadow-lg">
              {"{ fullStack: true }"}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
