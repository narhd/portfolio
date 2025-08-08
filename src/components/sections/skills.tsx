'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React/Next.js', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨' },
      { name: 'HTML/CSS', level: 95, icon: '📄' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'PHP', level: 75, icon: '🐘' },
      { name: 'MySQL', level: 85, icon: '🗄️' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git/GitHub', level: 90, icon: '🔧' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS/Vercel', level: 75, icon: '☁️' },
      { name: 'Figma', level: 80, icon: '🎯' },
      { name: 'Linux', level: 85, icon: '🐧' },
    ]
  }
]

interface SkillBarProps {
  skill: {
    name: string
    level: number
    icon: string
  }
  index: number
}

function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="skills" className="py-20 bg-background">
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
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  {category.category}
                </h3>
                <div>
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * category.items.length + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly explore new frameworks,
              attend tech meetups, and contribute to open-source projects to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['GraphQL', 'React Native', 'Vue.js', 'Rust', 'Go', 'Kubernetes'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}