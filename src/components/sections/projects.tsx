'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Developer Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, animations, and optimized performance.',
    image: '/dev-portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    liveUrl: 'https://danielkpodo.github.io/dev-portfolio/',
    githubUrl: 'https://github.com/danielkpodo/portfolio',
    featured: true
  },
  {
    id: 2,
    title: 'Tweet Component',
    description: 'A reusable React component that mimics Twitter\'s tweet interface. Built with React hooks and modern JavaScript features.',
    image: '/tweet.png',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    category: 'component',
    liveUrl: 'https://danielkpodo.github.io/tweetbox/',
    githubUrl: 'https://github.com/danielkpodo/tweetbox',
    featured: false
  },
  {
    id: 3,
    title: 'Github File List Component',
    description: 'A React component for displaying GitHub repository file structures with a clean, intuitive interface.',
    image: '/github.png',
    technologies: ['React', 'GitHub API', 'JavaScript', 'CSS'],
    category: 'component',
    liveUrl: '#',
    githubUrl: 'https://github.com/danielkpodo/github-file-list',
    featured: false
  },
  {
    id: 4,
    title: 'Technical Documentation',
    description: 'A comprehensive HTML5 technical documentation site with responsive design and intuitive navigation.',
    image: '/documentation.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'web',
    liveUrl: 'https://danielkpodo.github.io/documentation/',
    githubUrl: 'https://github.com/danielkpodo/documentation',
    featured: false
  },
  {
    id: 5,
    title: 'Product Landing Page',
    description: 'A modern product landing page for ASUS ROG gaming products with responsive design and smooth animations.',
    image: '/landing-page.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'web',
    liveUrl: 'https://danielkpodo.github.io/rcland/',
    githubUrl: 'https://github.com/danielkpodo/rcland',
    featured: true
  },
  {
    id: 6,
    title: 'Survey Form',
    description: 'A responsive survey form for family planning with form validation and modern UI design.',
    image: '/survey.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation'],
    category: 'web',
    liveUrl: 'https://danielkpodo.github.io/surveyform/',
    githubUrl: 'https://github.com/danielkpodo/surveyform',
    featured: false
  },
  {
    id: 7,
    title: 'Tribute Page',
    description: 'A tribute page dedicated to Albert Einstein with responsive design and engaging content layout.',
    image: '/tribute.png',
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    category: 'web',
    liveUrl: 'https://danielkpodo.github.io/tribute/',
    githubUrl: 'https://github.com/danielkpodo/tribute',
    featured: false
  },
  {
    id: 8,
    title: 'File Upload System',
    description: 'A PHP-based file upload system with security features and user-friendly interface.',
    image: '/login.png',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: 'https://github.com/danielkpodo/fileUpload',
    featured: false
  }
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'component', label: 'Components' },
  { id: 'backend', label: 'Backend' }
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.liveUrl !== '#' && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {project.githubUrl !== '#' && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-foreground rounded-full text-background hover:bg-foreground/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Github className="w-3 h-3" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating innovative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-1 bg-secondary rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background'
                  }`}
                >
                  <Filter className="w-3 h-3" />
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* View All Projects Link */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/danielkpodo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}