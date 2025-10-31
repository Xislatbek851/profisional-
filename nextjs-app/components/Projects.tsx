import React from 'react';
import { ExternalLink, Github, Folder, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Globara',
      description: 'A modern import-export website featuring a global business theme, sleek animations, responsive design, and a professional layout built for seamless international trade connections.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      type: 'Web Application',
      highlights: ['Real-time Sync', 'Team Collaboration', 'Drag & Drop'],
      image: '/img/807shots_so.png' ,
      gradient: 'from-blue-500 to-purple-600',
      icon: Calendar,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Whitepace',
      description: 'A stunning SaaS landing page with a minimalist aesthetic, elegant animations, and a community-focused design — built to deliver a seamless and engaging digital experience for modern startups.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      type: 'Website',
      highlights: ['Smooth Animations', 'SEO Optimized', 'Performance'],
      image: '/img/544_1x_shots_so.png',
      gradient: 'from-green-500 to-teal-600',
      icon: Users,

    },
    {
      title: 'Fibo Pizza',
      description:'A stylish pizza ordering website featuring mouth-watering visuals, smooth animations, and a responsive design that delivers a delightful and seamless online food-ordering experience.' ,
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      type: 'Portfolio',
      highlights: ['Dark Mode', 'Responsive', 'Modern Design'],
      image: '/img/862shots_so.png',
      gradient: 'from-purple-500 to-pink-600',
      icon: Zap,
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Showcasing practical applications of modern frontend technologies and clean code principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {project.type}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/20">
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 h-[375px] flex flex-col">
                  <h3 className=" flex-grow text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className=" flex-grow text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300 text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className=" flex-grow mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md border border-teal-200 dark:border-teal-700 transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className=" flex-grow mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-200" />
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm transition-colors duration-200 group/link"
                    >
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-200" />
                      Source Code
                    </a>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;