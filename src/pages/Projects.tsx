import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    title: "NasBatirPro",
    description: "Site web professionnel pour une entreprise de construction. Design moderne avec présentation des services et portfolio de réalisations.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://nas-batirpro.vercel.app/",
  },
  {
    title: "Portfolio de Malick",
    description: "Portfolio personnel créatif pour un développeur, avec présentation des compétences, projets et formulaire de contact.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://portfolio-souleymane.vercel.app/",
  },
  {
    title: "Quiz UNIPRO",
    description: "Application de quiz interactive pour l'université UNIPRO. Système de questions/réponses avec score en temps réel.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://rachidbabali.github.io/projetUNIPRO/",
  },
  {
    title: "Carnet de Santé",
    description: "Application de gestion médicale permettant de suivre les informations de santé, consultations et traitements.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

const allTech = ["Tous", ...new Set(projectsData.flatMap((p) => p.tech))];

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous"
    ? projectsData
    : projectsData.filter((p) => p.tech.includes(filter));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === tech
                  ? "gradient-bg text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            Aucun projet trouvé pour ce filtre.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
