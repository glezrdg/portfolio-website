"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Circle } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  technologies?: string[]
}

export function ProjectCard({ title, description, image, link, technologies }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Browser Chrome */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-700">
        <div className="flex items-center">
          <div className="flex gap-1.5">
            <Circle className="w-3 h-3 fill-red-500 stroke-none" />
            <Circle className="w-3 h-3 fill-yellow-500 stroke-none" />
            <Circle className="w-3 h-3 fill-green-500 stroke-none" />
          </div>
          <div className="flex-1 px-4">
            <div className="w-full max-w-[200px] mx-auto bg-slate-700 rounded text-center">
              <p className="text-xs text-slate-400 truncate px-2">{link.replace("https://", "")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Screenshot */}
      <div className="relative aspect-[16/10] group">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-slate-200 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-200">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

