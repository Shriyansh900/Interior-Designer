import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero', offset: -70, icon: Home },
    { name: 'About', to: 'about', offset: -70, icon: User },
    { name: 'Projects', to: 'projects', offset: -70, icon: Briefcase },
    { name: 'Contact', to: 'contact', offset: -70, icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-2'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold text-lg">SM</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary-800 to-accent-700 dark:from-primary-200 dark:to-accent-300 bg-clip-text text-transparent">
                    Studio Maanikh
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                    Interior Design
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      onSetActive={() => setActiveSection(item.to)}
                      className={`relative px-4 py-2 mx-1 rounded-full font-medium transition-all duration-300 cursor-pointer group flex items-center space-x-2 ${
                        activeSection === item.to
                          ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <IconComponent size={16} />
                      <span>{item.name}</span>
                      {activeSection !== item.to && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-600"
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">SM</span>
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-primary-800 dark:text-primary-200">
                        Studio Maanikh
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Interior Design</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-8">
                  <nav className="space-y-2 px-6">
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Link
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={item.offset}
                            duration={500}
                            className="flex items-center space-x-4 py-4 px-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/30 dark:hover:to-accent-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-pointer group"
                            onClick={toggleMenu}
                          >
                            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-accent-600 group-hover:text-white transition-all duration-300">
                              <IconComponent size={18} />
                            </div>
                            <div>
                              <span className="font-medium text-lg">{item.name}</span>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.name === 'Home' && 'Welcome & Hero'}
                                {item.name === 'About' && 'My Story & Experience'}
                                {item.name === 'Projects' && 'Portfolio & Work'}
                                {item.name === 'Contact' && 'Get In Touch'}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Creating Beautiful Spaces
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                      <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gold-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;