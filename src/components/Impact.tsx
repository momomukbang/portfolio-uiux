import React, { useEffect, useRef } from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const impacts = [
  {
    metric: '40%',
    description: 'Average Increase in User Engagement Across Projects',
    icon: TrendingUp
  },
  {
    metric: '2M+',
    description: 'Users Impacted Through Designed Solutions',
    icon: Users
  },
  {
    metric: '95%',
    description: 'Client Satisfaction Rate',
    icon: Target
  },
  {
    metric: '12',
    description: 'International Design Awards',
    icon: Award
  }
];

export default function Impact() {
  const countersRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const duration = 2000; // Animation duration in milliseconds
      const start = performance.now();
      
      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(target * easeOutQuart);
        counter.textContent = current.toString() + (counter.getAttribute('data-suffix') || '');
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    });
  };

  return (
    <section id="impact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(111,66,193,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent reveal">
          Impact & Achievements
        </h2>
        
        <div 
          ref={countersRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {impacts.map((impact, index) => {
            const numericValue = impact.metric.replace(/\D/g, '');
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-500 transform hover:-translate-y-2 reveal"
              >
                <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="counter text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    data-target={numericValue}
                    data-suffix={impact.metric.includes('+') ? '+' : '%'}>
                  0
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}