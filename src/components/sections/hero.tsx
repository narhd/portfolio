'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

// Simple particle system component
function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
  }>>([])

  useEffect(() => {
    const particleCount = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  }

  if (!mounted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full animate-pulse" />
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      
      {/* Particle background */}
      <ParticleBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            <span className="text-muted-foreground">I</span>
            <motion.span 
              className="text-red-500 mx-2"
              variants={textVariants}
            >
              EAT
            </motion.span>
            <span className="text-muted-foreground">&middot;</span>
            <motion.span 
              className="text-blue-500 mx-2"
              variants={textVariants}
              style={{ animationDelay: '0.5s' }}
            >
              CODE
            </motion.span>
            <span className="text-muted-foreground">&middot;</span>
            <br className="hidden sm:block" />
            <motion.span 
              className="text-purple-500 mx-2"
              variants={textVariants}
              style={{ animationDelay: '1s' }}
            >
              SLEEP
            </motion.span>
            <span className="text-foreground mx-2">AND</span>
            <motion.span 
              className="text-green-500 mx-2"
              variants={textVariants}
              style={{ animationDelay: '1.5s' }}
            >
              LOOP
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.img
              src="/dan.png"
              alt="Daniel Narh"
              className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Hi, I&apos;m{' '}
            <span className="text-primary font-semibold">Daniel Narh</span>
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-2"
            variants={itemVariants}
          >
            Trained Disease Control Officer &amp;
          </motion.p>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6"
            variants={itemVariants}
          >
            &lt; Full-Stack Developer &#47;&gt;
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I like to solve complex problems with few lines of code. Currently open for development opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.button>
          
          <motion.button
            className="border border-border px-8 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}