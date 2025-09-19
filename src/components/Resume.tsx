import React from 'react';
import { Mail, Phone, Github, MapPin, Calendar } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Personal Info */}
        <div className="lg:col-span-1">
          {/* Name */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">
              Alimov Xislatbek
            </h1>
            <p className="text-lg text-blue-600 font-medium">
              Frontend Developer (Intern)
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-gray-300">
              CONTACT
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600" />
                <span className="text-black">+998 (93) 800-99-08</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600" />
                <span className="text-black">alimovxislatbek8@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} className="text-blue-600" />
                <span className="text-black">github.com/Xislatbek851</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-black">Tashkent, UZ</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-gray-300">
              SKILLS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-2">Languages:</h3>
                <p className="text-black">HTML, CSS, JavaScript (ES6+)</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Frameworks & Libraries:</h3>
                <p className="text-black">React, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Tools:</h3>
                <p className="text-black">Git, GitHub, VS Code</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Other:</h3>
                <p className="text-black">Responsive Design, REST APIs, UI/UX asoslari</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-gray-300">
              EDUCATION
            </h2>
            <div>
              <h3 className="font-semibold text-black">Frontend Development</h3>
              <p className="text-black">(kurs/bootcamp/universitet — davom etmoqda)</p>
            </div>
          </div>
        </div>

        {/* Right Column - Experience and Projects */}
        <div className="lg:col-span-2">
          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-gray-300">
              EXPERIENCE
            </h2>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-black">Frontend Developer (Intern)</h3>
                <span className="text-black">|</span>
                <span className="text-black">Tashkent, UZ</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-blue-600" />
                <span className="text-blue-600 font-medium">Oct 2024 – Present | Internship</span>
              </div>
              <ul className="space-y-2 text-black">
                <li>• Assisted in building responsive user interfaces using React and Next.js</li>
                <li>• Implemented Tailwind CSS for clean and mobile-friendly designs</li>
                <li>• Worked with REST APIs to fetch and display dynamic content</li>
                <li>• Collaborated in team projects, practicing Git & GitHub for version control</li>
                <li>• Learned and applied clean code principles under mentor guidance</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-gray-300">
              PROJECTS
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">To-Do List App</h3>
                <p className="text-black mb-2">
                  React + Tailwind asosida qo'shish, o'chirish va tahrirlash funksiyalari bilan 
                  vazifa boshqaruv dasturi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">JavaScript</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Landing Page</h3>
                <p className="text-black mb-2">
                  HTML, CSS va JavaScript orqali yaratilgan moslashuvchan landing sahifa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">HTML5</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">CSS3</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">JavaScript</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Portfolio Website</h3>
                <p className="text-black mb-2">
                  Next.js + Tailwind yordamida shaxsiy portfolio sahifasi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;