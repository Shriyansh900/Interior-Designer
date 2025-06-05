import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl opacity-90">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-semibold mb-6 text-primary-800 dark:text-primary-200">
              Project Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="prose dark:prose-invert max-w-none">
              {project.details}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary-800 dark:text-primary-200">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-gray-900 dark:text-gray-100">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-gray-100">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="text-gray-900 dark:text-gray-100">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Area</p>
                  <p className="text-gray-900 dark:text-gray-100">{project.area}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Style</p>
                  <p className="text-gray-900 dark:text-gray-100">{project.style}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-semibold text-primary-800 dark:text-primary-200">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;