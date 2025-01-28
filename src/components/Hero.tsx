import AnshulKawarey from '../assets/Anshul_Kawarey.jpg';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-matte-800 dark:to-matte-900" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Specialist in Machine Learning {' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-phthalo-500 dark:to-phthalo-300 bg-clip-text text-transparent">
              and Software Development
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experienced in building and deploying machine learning models, deep learning frameworks, and scalable software 
            systems. Proficient in full-stack development and mobile application development using Flutter, 
            with a strong focus on performance and user-centric design. Notable projects include leading the development of 
            humanoid robots, autonomous systems, and mobile apps, showcasing the ability to integrate AI and innovative 
            solutions into practical applications.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-phthalo-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-phthalo-600 transition-colors"
            >
              View My Projects
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary-200 to-primary-300 dark:from-phthalo-700 dark:to-phthalo-600 p-1">
              <img
                src={AnshulKawarey}
                alt="Anshul Kawarey"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;