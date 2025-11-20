'use client';

import { useState } from 'react';
import { Project } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { projects } from '@/lib/data';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {`Découvrez mes derniers travaux et projets réalisés avec passion et expertise dans le développement web.`}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project: Project) => (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                  key={project.id}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              </>
            ))}

            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      </section>
    </>
  );
}
