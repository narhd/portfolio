'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 - Present',
    type: 'Contract',
    description: 'Developing modern web applications for clients across various industries, focusing on React, Next.js, and Node.js solutions.',
    achievements: [
      'Built 15+ responsive web applications using React and Next.js',
      'Implemented RESTful APIs and database designs using Node.js and MongoDB',
      'Improved client website performance by 40% through optimization techniques',
      'Collaborated with designers to create pixel-perfect UI implementations',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Disease Control Officer',
    company: 'Ghana Health Service',
    location: 'Ghana',
    period: '2019 - 2022',
    type: 'Full-time',
    description: 'Worked in public health sector focusing on disease surveillance, prevention, and community health programs.',
    achievements: [
      'Led community health education programs reaching 500+ individuals',
      'Implemented data collection systems improving reporting efficiency by 30%',
      'Collaborated with healthcare teams to develop prevention strategies',
      'Managed health records and surveillance data using digital tools',
    ],
    technologies: ['Data Analysis', 'Microsoft Excel', 'Database Management', 'Public Health Systems'],
    link: '#'
  },
  {
    id: 3,
    title: 'Web Development Intern',
    company: 'Tech Startup',
    location: 'Accra, Ghana',
    period: '2021 - 2022',
    type: 'Internship',
    description: 'Gained hands-on experience in web development while transitioning into tech, working on various frontend and backend projects.',
    achievements: [
      'Developed responsive landing pages using HTML, CSS, and JavaScript',
      'Assisted in building REST APIs with PHP and MySQL',
      'Participated in code reviews and agile development processes',
      'Created documentation for development workflows',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git'],
    link: '#'
  }
]

interface ExperienceCardProps {
  experience: typeof experiences[0]
  index: number
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
      
      {/* Card */}
      <div className={`bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 ${
        index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'
      } w-full lg:w-[calc(50%-2rem)]`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-primary font-medium mb-2">
              <span>{experience.company}</span>
              {experience.link !== '#' && (
                <ExternalLink className="w-4 h-4" />
              )}
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            experience.type === 'Full-time' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
            experience.type === 'Contract' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
            'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
          }`}>
            {experience.type}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5 text-xs">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="experience" className="py-20 bg-secondary/30">
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
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my development career
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-border h-full hidden lg:block"></div>
            
            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}