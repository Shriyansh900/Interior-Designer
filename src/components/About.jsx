import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, Briefcase, Star } from 'lucide-react';

const About = () => {
  const [refSection, inViewSection] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refTimeline, inViewTimeline] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={refSection}
          initial="hidden"
          animate={inViewSection ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            With over 10 years of experience in interior design, I create spaces that are both beautiful and functional, tailored to each client's unique lifestyle and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio and Philosophy */}
          <motion.div
            ref={refSection}
            initial="hidden"
            animate={inViewSection ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative rounded-xl overflow-hidden h-96">
              <img
                src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Interior Designer at Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Creating Spaces That Inspire
                </h3>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary-800 dark:text-primary-200 mb-4">
                My Design Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I believe that great design should be a perfect balance of beauty and functionality. Every space tells a story, and I work closely with my clients to ensure their unique narrative is woven into every aspect of the design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach combines timeless design principles with contemporary trends, creating spaces that feel both current and enduring. I prioritize sustainable materials and practices whenever possible, believing that beautiful spaces should also be responsible ones.
              </p>
            </div>
          </motion.div>

          {/* Education and Qualifications */}
          <motion.div
            ref={refTimeline}
            initial="hidden"
            animate={inViewTimeline ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="font-serif text-2xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
              Education & Qualifications
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200">
              {/* Education 1 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-accent-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-primary-200">Master of Interior Architecture</h4>
                  <p className="text-gray-600">Parsons School of Design, New York</p>
                  <p className="text-sm text-gray-500">2010 - 2012</p>
                </div>
              </div>
              
              {/* Education 2 */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-accent-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700">Bachelor of Fine Arts, Interior Design</h4>
                  <p className="text-gray-600">Rhode Island School of Design</p>
                  <p className="text-sm text-gray-500">2006 - 2010</p>
                </div>
              </div>
              
              {/* Certification */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700">NCIDQ Certification</h4>
                  <p className="text-gray-600">National Council for Interior Design Qualification</p>
                  <p className="text-sm text-gray-500">2013</p>
                </div>
              </div>
              
              {/* Work Experience */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700">Senior Interior Designer</h4>
                  <p className="text-gray-600">Elite Design Studio, New York</p>
                  <p className="text-sm text-gray-500">2015 - Present</p>
                </div>
              </div>
              
              {/* Recognition */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                  <Star className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700">Design Excellence Award</h4>
                  <p className="text-gray-600">American Society of Interior Designers</p>
                  <p className="text-sm text-gray-500">2019</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;