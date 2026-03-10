import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase } from "lucide-react";
import SkillBar from "@/components/SkillBar";

const skills = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 90, icon: "🎨" },
  { name: "Tailwind CSS", level: 88, icon: "💨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React", level: 82, icon: "⚛️" },
  { name: "PHP", level: 80, icon: "🐘" },
  { name: "MySQL", level: 78, icon: "🗄️" },
  { name: "Git & GitHub", level: 85, icon: "🔀" },
  { name: "Canva", level: 75, icon: "🎭" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="gradient-text">propos</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement web.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-bg">
                <User size={20} className="text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Qui suis-je ?</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Je suis <span className="text-foreground font-semibold">Rachid</span>, développeur web full stack passionné par la création d'applications web modernes et performantes. Je maîtrise les technologies front-end et back-end pour concevoir des solutions complètes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mon approche combine design créatif et code propre pour livrer des projets qui répondent aux besoins réels des utilisateurs. Je suis toujours à la recherche de nouveaux défis et de technologies à explorer.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Briefcase size={20} className="text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">4+</p>
                <p className="text-sm text-muted-foreground">Projets réalisés</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <GraduationCap size={20} className="text-accent mb-2" />
                <p className="text-2xl font-bold text-foreground">9</p>
                <p className="text-sm text-muted-foreground">Technologies maîtrisées</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Compétences</h2>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
