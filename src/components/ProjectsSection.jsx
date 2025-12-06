import { useState } from 'react';
import { ExternalLink, Github, Plus, Folder } from 'lucide-react';
import { Button } from './ui/button';

const initialProjects = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'A cinematic personal portfolio built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Coming Soon',
    description:
      'More exciting projects are in development. Check back soon to see what I\'m building next!',
    technologies: ['MERN Stack', 'Coming Soon'],
  },
];

const ProjectCard = ({ project }) => (
  <div className="glass-card-hover rounded-2xl overflow-hidden group">
    {/* Project image placeholder */}
    <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Folder size={48} className="text-primary/50" />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [projects] = useState(initialProjects);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-primary/5 rounded-l-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block uppercase tracking-widest text-sm">
            My Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my latest projects and applications. Each project
            represents my commitment to quality and innovation.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Add project placeholder */}
          <div className="glass-card border-2 border-dashed border-border hover:border-primary/50 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 group cursor-pointer min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Plus size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">Add New Project</h3>
            <p className="text-muted-foreground text-sm text-center">
              More projects coming soon as I build and learn
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
