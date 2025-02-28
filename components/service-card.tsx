"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Database, Zap, Coffee } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

const iconComponents = {
  code: Code,
  palette: Palette,
  server: Server,
  database: Database,
  zap: Zap,
  coffee: Coffee,
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents] || Code

  return (
    <motion.div
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export default ServiceCard

