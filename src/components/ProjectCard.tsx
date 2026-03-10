import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

const ProjectCard = ({ title, description, tech, link, image }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image placeholder */}
      <div className="h-48 gradient-bg opacity-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
            {title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Voir le projet <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
