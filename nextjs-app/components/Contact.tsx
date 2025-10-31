import React from 'react';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'alimovxislatbek8@gmail.com',
      href: 'mailto:alimovxislatbek8@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+998 (99) 628-46-00',
      href: 'tel:+998996284600',
      color: 'teal'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/Xislatbek851',
      href: 'https://github.com/Xislatbek851',
      color: 'gray'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Tashkent, Uzbekistan',
      href: '#',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      gray: 'bg-gray-800 hover:bg-gray-900',
      purple: 'bg-purple-600 hover:bg-purple-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Ready to collaborate on exciting frontend projects or discuss opportunities. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
            >
              <div className={`${getColorClasses(method.color)} rounded-full p-4 inline-block mb-4 transition-all duration-300 group-hover:scale-110`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm break-all transition-colors duration-300">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-full p-4 inline-block mb-4">
                <Send className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                I'm always excited to discuss new opportunities and collaborate on innovative projects
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:alimovxislatbek8@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>
              
              <a
                href="https://github.com/Xislatbek851"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:from-gray-900 hover:to-black transition-all duration-200 hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;