"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
const technologies = [
  { name: "React", logo: "/icons/React-icon.svg" },
  { name: "Angular", logo: "/icons/Angular_full_color_logo.svg" },
  { name: "Next.js", logo: "/icons/nextjs-icon-svgrepo-com.svg" },
  { name: "Tailwind CSS", logo: "/icons/Tailwind_CSS_Logo.svg" },
  { name: "Node.js", logo: "/icons/Node.js_logo.svg" },
  { name: "MongoDB", logo: "/icons/mongodb-svgrepo-com.svg" },
  { name: "Express", logo: "/icons/express-js-icon.svg" },
  { name: "Docker", logo: "/icons/docker-svgrepo-com.svg" },
  { name: "Git", logo: "/icons/Git-logo.svg" },
];

export function TechStackAnimation() {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-xl font-semibold mb-4 text-slate-100">Tech Stack</h3>
      <div className="relative h-20">
        <motion.div
          className="flex absolute"
          animate={{
            x: [0, -100 * technologies.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center justify-center w-[100px] h-20 mx-4"
            >
              <Image
                src={tech.logo || "/placeholder.svg"}
                alt={tech.name}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
