"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", logo: "/react-logo.svg" },
  { name: "Angular", logo: "/angular-logo.svg" },
  { name: "Tailwind CSS", logo: "/tailwind-logo.svg" },
  { name: "MongoDB", logo: "/mongodb-logo.svg" },
  { name: "Express", logo: "/express-logo.svg" },
]

export function TechStackAnimation() {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-slate-100">Tech Stack</h3>
      <div className="relative h-32">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 2,
              delay: index * 2,
            }}
          >
            <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={64} height={64} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

