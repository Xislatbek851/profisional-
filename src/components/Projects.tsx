import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'To-Do List App',
      description: 'Task management application built with React and Tailwind CSS featuring add, delete, and edit functionality for efficient task organization.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      type: 'Web Application',
      highlights: ['CRUD Operations', 'Responsive Design', 'State Management']
    },
    {
      title: 'Landing Page',
      description: 'Responsive and interactive landing page created with HTML, CSS, and JavaScript, showcasing modern web design principles and user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      type: 'Website',
      highlights: ['Mobile-First', 'SEO Optimized', 'Interactive Elements']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and professional experience in a clean, modern interface.',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
      type: 'Portfolio',
      highlights: ['SSG', 'Performance Optimized', 'Modern Design']
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 transition-colors duration-300">
                  <Folder className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full transition-colors duration-300">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                {project.description}
              </p>

              <div className="mb-4">
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

              <div className="mb-6">
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

              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200">
                  <ExternalLink size={16} />
                  View Project
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm transition-colors duration-200">
                  <Github size={16} />
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;