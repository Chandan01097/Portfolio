import myImage from '../assets/my-image2.jpg'; 
import React, { useEffect, useRef } from 'react';
import { Book, Code, Map, User } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === contentRef.current) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-20');
          }
          if (entry.target === imageRef.current) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', '-translate-x-20');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (contentRef.current) {
      contentRef.current.classList.add('opacity-0', 'translate-x-20', 'transition-all', 'duration-1000');
      observer.observe(contentRef.current);
    }

    if (imageRef.current) {
      imageRef.current.classList.add('opacity-0', '-translate-x-20', 'transition-all', 'duration-1000');
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-3 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div ref={imageRef} className="lg:w-5/12">
            <div className="relative">
              <div className="w-full h-[450px] bg-cover bg-center rounded-lg shadow-xl overflow-hidden">
                <img 
  src={myImage}
  alt="Professional portrait of Chandan Behera" 
  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
/>

              </div>
              
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-lg -z-10"></div>
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-teal-500 dark:bg-teal-600 rounded-lg -z-10"></div>
            </div>
          </div>

          <div ref={contentRef} className="lg:w-7/12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Computer Science Student & AI/ML Enthusiast
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I am studying B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning at CV Raman Global University, Bhubaneswar. Currently maintaining a CGPA of 8.81, I am passionate about leveraging technology to solve real-world problems.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              My academic journey has equipped me with strong foundations in programming, machine learning, and web development. I enjoy working on projects that combine these skills to create meaningful solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <User size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">B.Tech Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <Map size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Bhubaneswar, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <Code size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Focus Areas</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">AI/ML & Web Development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <Book size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">CGPA</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">8.81/10</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/20 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;