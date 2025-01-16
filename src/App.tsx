import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Impact from './components/Impact';
import { ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';

function App() {
  const parallaxRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = (index + 1) * 0.1;
          const yOffset = window.pageYOffset * speed;
          ref.style.setProperty('--scroll-offset', `-${yOffset}px`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.setAttribute('href', '/favicon.svg');
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(111, 66, 193, 0.1) 0%, transparent 20%)',
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="animate-float mb-8">
              <MousePointer2 className="w-12 h-12 mx-auto text-purple-600 opacity-50" />
            </div>
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                May So
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mt-4 font-light tracking-wide">
                UX/UI Digital Full Stack Designer
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creating Digital
              <br />
              Experiences That Matter
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed reveal">
              I am a seasoned UI/UX designer with over 8 years of experience crafting innovative design solutions that elevate user experiences. Specializing in conversational flows, I excel at leveraging AI and collaborating with teams to create seamless, human-centered interactions.
            </p>
            <a 
              href="#work"
              className="group inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent reveal">
            Selected Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              ref={el => parallaxRefs.current[0] = el}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover parallax"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80" 
                alt="Banking App Redesign"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-3xl font-bold mb-4">TD Bank Mobile App Redesign</h3>
                <p className="text-gray-200 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Modernizing digital banking experience through intuitive design and seamless interactions
                </p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">UX Design</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">Mobile App</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">Fintech</span>
                </div>
              </div>
            </div>

            <div 
              ref={el => parallaxRefs.current[1] = el}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover parallax"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
                alt="Insurance Platform"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-3xl font-bold mb-4">Co-operators Insurance Platform</h3>
                <p className="text-gray-200 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Revolutionizing insurance claims with a human-centered digital platform
                </p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">UI Design</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">Web Platform</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white backdrop-blur-sm">Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Impact />

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent reveal">
            Let's Create Something Amazing
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto reveal">
            Always open to discussing new projects and opportunities that push the boundaries of digital experiences.
          </p>
          <div className="flex justify-center space-x-8 reveal">
            <a 
              href="#" 
              className="p-4 glass-effect rounded-2xl hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-8 h-8 text-gray-700" />
            </a>
            <a 
              href="#" 
              className="p-4 glass-effect rounded-2xl hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-8 h-8 text-gray-700" />
            </a>
            <a 
              href="#" 
              className="p-4 glass-effect rounded-2xl hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-8 h-8 text-gray-700" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
