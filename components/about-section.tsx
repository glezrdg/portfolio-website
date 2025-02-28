"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-slate-900"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-100">About Me</h2>
            <p className="text-slate-300 mb-6">
              I'm a passionate software developer with a keen eye for design and a love for creating seamless user
              experiences. With 2+ years of experience in the field, I've had the opportunity to work on a diverse range
              of projects, from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-slate-300 mb-6">
              My expertise lies in frontend development, particularly with React and Next.js, but I'm also well-versed
              in backend technologies. I believe in writing clean, efficient code and always strive to stay updated with
              the latest industry trends and best practices.
            </p>
            <Button size="lg">Download Resume</Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Germán González"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">2+ Years</p>
              <p>of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
})

AboutSection.displayName = "AboutSection"

export default AboutSection

