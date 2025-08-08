'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Heart, Coffee, Users } from 'lucide-react'

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '20+' },
  { icon: Users, label: 'Happy Clients', value: '15+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Heart, label: 'Years of Experience', value: '3+' },
]

export default function About() {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-secondary/30">
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what I&apos;m passionate about
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
                <motion.img
                  src="/dan.png"
                  alt="Daniel Narh"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Full-Stack Developer &amp; Problem Solver
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hello! I&apos;m Daniel Narh, a passionate full-stack developer with a unique background 
                    in Disease Control. This diverse experience has taught me the importance of 
                    attention to detail, systematic problem-solving, and the impact of well-designed solutions.
                  </p>
                  <p>
                    My journey into software development began with a curiosity about how technology 
                    can solve real-world problems. I believe in writing clean, efficient code and 
                    creating user experiences that make a difference.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community. 
                    I&apos;m always eager to take on new challenges and collaborate with like-minded 
                    individuals.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6 bg-card p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-primary mb-2">
                  &quot;The more I learn to code, the more I realize how much there is to learn.&quot;
                </p>
                <p className="text-sm text-muted-foreground">
                  This drives my continuous learning mindset and passion for growth.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                custom={index}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}