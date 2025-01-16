import React from 'react';
import { Building2, Users, Briefcase, Shield } from 'lucide-react';

const experiences = [
  {
    company: 'TD Bank',
    role: 'Senior UX/UI Designer',
    period: '2021 - Present',
    description: 'Led the redesign of core banking applications, improving customer satisfaction by 40%. Implemented design system used across 20+ products.',
    icon: Building2,
    skills: ['Design Systems', 'User Research', 'Mobile Design']
  },
  {
    company: 'NPE for Meta',
    role: 'Product Designer',
    period: '2019 - 2021',
    description: 'Spearheaded design systems for experimental products, reaching millions of users. Led a team of 5 designers.',
    icon: Users,
    skills: ['Product Strategy', 'Team Leadership', 'Innovation']
  },
  {
    company: 'Carnex.ca',
    role: 'UX Designer',
    period: '2017 - 2019',
    description: 'Revolutionized the car buying experience through user-centered design approaches. Increased conversion by 85%.',
    icon: Briefcase,
    skills: ['E-commerce', 'A/B Testing', 'User Flows']
  },
  {
    company: 'Co-operators Insurance',
    role: 'UI Designer',
    period: '2015 - 2017',
    description: 'Transformed insurance claim processes through intuitive digital solutions. Reduced claim processing time by 60%.',
    icon: Shield,
    skills: ['Visual Design', 'Prototyping', 'Design Thinking']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent reveal">
          Professional Journey
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <div className="p-4 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-colors duration-300">
                    <exp.icon className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <p className="text-purple-600 font-medium text-lg">{exp.role}</p>
                    </div>
                    <p className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium group-hover:bg-purple-100 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}