import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';

// Update this to your actual Render backend URL
const API_URL = import.meta.env.VITE_API_URL || 'https://interior-designer-hpoi.onrender.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [refSection, inViewSection] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      console.log('Submitting to:', `${API_URL}/api/contact`);
      console.log('Form data:', formData);
      
      const response = await axios.post(`${API_URL}/api/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });
      
      console.log('Response:', response);
      
      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' },
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      console.error('Error response:', error.response);
      
      let errorMessage = 'Something went wrong. Please try again later.';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (error.response) {
        errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Unable to connect to server. Please check your internet connection.';
      }
      
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true, 
          msg: errorMessage
        },
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ready to transform your space? I'd love to hear about your project. Reach out to discuss how we can create your dream interior.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inViewSection ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700/30 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary-600 dark:text-primary-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                    <a 
                      href="mailto:hello@eleganceinteriors.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      hello@eleganceinteriors.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700/30 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-primary-600 dark:text-primary-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                    <a 
                      href="tel:+12125551234" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +1 (212) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700/30 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-primary-600 dark:text-primary-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Studio Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Design Avenue, SoHo<br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-accent-50 dark:bg-accent-900/30 border border-accent-100 dark:border-accent-700 rounded-lg p-8">
              <h3 className="font-serif text-xl font-medium text-accent-800 dark:text-accent-200 mb-3">
                Studio Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Available for consultations Monday through Friday, 9am to 6pm, and by appointment on weekends.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Initial consultations are complementary. Please reach out to schedule yours today.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inViewSection ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
                Send Me a Message
              </h3>
              
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {status.submitting ? 
                    'Sending...' : 
                    <>Send Message <Send size={18} className="ml-2" /></>
                  }
                </button>
                {status.info.msg && (
                  <div className={`mt-4 p-3 rounded-md ${
                    status.info.error 
                      ? 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200' 
                      : 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  }`}>
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;