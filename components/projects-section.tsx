"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Oferta Dominicana de Cooperación ",
    description:
      "Platform for technical cooperation and resource sharing in the Dominican Republic.",
    image: "/img/oferta.webp",
    link: "https://oferta-rd.mepyd.gob.do/inicio",
    technologies: ["Angular", "Tailwind CSS", ".NET", "SQL"],
  },
  {
    title: "Rentarica",
    description: "Real estate platform for property rentals and management.",
    image: "/img/rentarica.webp",
    link: "https://rentarica.com",
    technologies: ["Next.js", "React", "NodeJS", "Express", "MongoDB"],
  },
  {
    title: "Sibaikole",
    description: "Dynamic presentation website for a construction company.",
    image: "/img/sibaikole.webp",
    link: "https://sibaikole.com",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Santo Pago",
    description: "Digital payment solution for the Dominican market.",
    image: "/img/santopago.webp",
    link: "https://santopago-production.up.railway.app/",
    technologies: ["React", "NodeJS", "Express", "MongoDB"],
  },
  {
    title: "Llaves Arias",
    description: "Professional locksmith service management system.",
    image: "/img/llavesarias.webp",
    link: "https://llavesarias.com",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Grupo Inap",
    description: "Corporate website for a leading industrial group.",
    image: "/img/grupo-inap.webp",
    link: "https://www.grupoinap.com/",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Bayamo Medical Center",
    description:
      "A modern medical center website featuring appointment scheduling and doctor profiles.",
    image: "/img/bayamo.webp",
    link: "https://bayamomedicalcenter.com",
    technologies: ["React", "Tailwind CSS"],
  },
];

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-slate-900"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Some of the last projects I&apos;ve worked on
          </motion.h2>
          <motion.p
            className="text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of websites and applications I&apos;ve developed for
            clients across different industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
