import React from 'react';
import { Code, Database, Cloud, Brain, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'C++', 'Java', 'TypeScript']
    },
    {
      title: 'Frameworks',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'Django', 'ROS', 'TensorFlow']
    },
    {
      title: 'AI/ML Tools',
      icon: <Brain className="w-6 h-6" />,
      skills: ['PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 'YOLO']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL']
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-matte-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-matte-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-matte-700 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-phthalo-900/50 rounded-lg mr-3 text-primary-600 dark:text-phthalo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-50 dark:bg-matte-700 text-primary-700 dark:text-phthalo-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;