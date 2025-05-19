import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeInElements = [titleRef.current, subtitleRef.current, buttonsRef.current];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeInElements.forEach((el) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
      }
    });

    return () => {
      fadeInElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="block">Hi, I'm </span>
            <span className="block mt-2 text-blue-600 dark:text-blue-400">Chandan Behera</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            A passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Computer Science Student</span> exploring the frontiers of technology
          </p>
          
          <div 
            ref={buttonsRef}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/20 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1enfCwl8YbClDg4LJqEpzvGBFBOi_XfoC/view?usp=sharing" 
              className="px-8 py-3 rounded-lg bg-white dark:bg-slate-800 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-700 font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <ArrowDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;