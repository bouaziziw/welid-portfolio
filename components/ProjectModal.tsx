import { Project } from '@/types/project';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{project.title}</span>
          </h2>
          <span className="text-sm text-muted-foreground">{project.date}</span>
        </DialogHeader>

        <div className="space-y-6">
          <ImageCarousel images={project.images} projectTitle={project.title} />

          <div className="space-y-4">
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              {project.demoUrl && (
                <Button asChild>
                  <a
                    href={'#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Voir le projet</span>
                  </a>
                </Button>
              )}

              {/* {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code source</span>
                  </a>
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
