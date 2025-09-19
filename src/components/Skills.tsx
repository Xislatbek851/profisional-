import React from 'react';
import { Code2, Palette, PenTool as Tool, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe size={24} />,
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      color: 'teal'
    },
    {
      title: 'Tools',
      icon: <Tool size={24} />,
      skills: ['Git', 'GitHub', 'VS Code'],
      color: 'purple'
    },
    {
      title: 'Other Skills',
      icon: <Palette size={24} />,
      skills: ['Responsive Design', 'REST APIs', 'UI/UX Fundamentals'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-600 text-white',
        border: 'border-blue-200',
        skillBg: 'bg-blue-100 text-blue-800'
      },
      teal: {
        bg: 'bg-teal-50',
        icon: 'bg-teal-600 text-white',
        border: 'border-teal-200',
        skillBg: 'bg-teal-100 text-teal-800'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-600 text-white',
        border: 'border-purple-200',
        skillBg: 'bg-purple-100 text-purple-800'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-600 text-white',
        border: 'border-orange-200',
        skillBg: 'bg-orange-100 text-orange-800'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Proficient in modern frontend development technologies with a focus on creating 
            responsive and user-friendly web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} dark:bg-gray-700 ${colorClasses.border} dark:border-gray-600 rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-center mb-6">
                  <div className={`${colorClasses.icon} rounded-full p-3 inline-block mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`${colorClasses.skillBg} dark:bg-gray-600 dark:text-gray-200 rounded-lg px-3 py-2 text-center text-sm font-medium transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Currently Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
              Frontend Development through intensive coursework and practical projects
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Advanced React Patterns', 'TypeScript', 'Testing', 'Performance Optimization'].map((topic, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;