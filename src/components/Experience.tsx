import React, { useEffect, useRef, useState } from 'react';
import { experienceData, icons } from '../data/experienceData';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      timelineRef.current.classList.add('opacity-0', 'translate-y-20', 'transition-all', 'duration-1000');
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  const renderIcon = (iconName: keyof typeof icons) => {
    const IconComponent = icons[iconName];
    return <IconComponent size={20} />;
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Education
          </h2>
          <div className="mt-3 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            My educational journey and achievements
          </p>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Timeline navigation */}
            <div className="md:w-1/3">
              <div className="sticky top-24 bg-white dark:bg-slate-900 shadow-lg rounded-xl overflow-hidden">
                {experienceData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(index)}
                    className={`w-full text-left p-4 transition-all duration-300 flex items-center ${
                      activeIndex === index 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className={`mr-3 p-2 rounded-full ${
                      activeIndex === index 
                        ? 'bg-white text-blue-600' 
                        : 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                    }`}>
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <p className={`font-medium ${
                        activeIndex === index ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {item.title}
                      </p>
                      <p className={`text-sm ${
                        activeIndex === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {item.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline detail */}
            <div className="md:w-2/3">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experienceData[activeIndex].title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                      {experienceData[activeIndex].date}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300">
                    <p className="font-medium">{experienceData[activeIndex].company}</p>
                    <span className="hidden sm:block mx-2">•</span>
                    <p>{experienceData[activeIndex].location}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <ul className="space-y-3">
                    {experienceData[activeIndex].description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1 h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <p className="text-gray-600 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="mt-16 relative">
            <div className="absolute left-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative flex items-center mb-12">
                <div className="flex-1">
                  <div className={`pr-8 ${index % 2 === 0 ? 'text-right' : 'md:hidden'}`}>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{item.date}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.company}</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 z-10">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      {renderIcon(item.icon)}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`pl-8 ${index % 2 === 1 ? 'text-left' : 'md:hidden'}`}>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{item.date}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;