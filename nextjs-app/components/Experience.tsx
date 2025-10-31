import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Assisted in building responsive user interfaces using React and Next.js',
    'Implemented Tailwind CSS for clean and mobile-friendly designs',
    'Worked with REST APIs to fetch and display dynamic content',
    'Collaborated in team projects, practicing Git & GitHub for version control',
    'Learned and applied clean code principles under mentor guidance'
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Building expertise through hands-on internship experience in modern frontend development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 transition-colors duration-300">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Frontend Developer (Intern)
                </h3>
                <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                  <Calendar size={18} />
                  <span>Oct 2024 – Present</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                  Internship • Tashkent, UZ
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Key Responsibilities & Achievements:
              </h4>
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0 transition-colors duration-300" size={20} />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;