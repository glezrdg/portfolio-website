"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/code-preview";
import { TechStackAnimation } from "@/components/tech-stack-animation";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mounted, setMounted] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeString = `
import React from 'react';
import { Card } from './Card';

function App() {
  return (
    <div className="flex gap-4">
      <Card>
        <h3 className="text-xl font-bold">Frontend Development</h3>
        <p className="text-gray-600">
          React • Next.js • TypeScript • Angular • JavaScript
        </p>
      </Card>
      <Card>
        <h3 className="text-xl font-bold">Backend Solutions</h3>
        <p className="text-gray-600">
          Node.js • MongoDB • Express • .NET • SQL
        </p>
      </Card>
    </div>
  );
}

export default App;
  `.trim();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[size:60px_60px] dark:bg-grid-slate-400/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />

        {/* Main Content */}
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y, opacity }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting digital experiences through elegant code
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A software developer specializing in building exceptional digital
              experiences. Currently focused on building accessible,
              human-centered products.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" asChild>
                <Link href="#projects" className="group">
                  View My Work
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 relative"
            >
              <div className="absolute -inset-x-2 -inset-y-4 bg-primary/5 rounded-2xl" />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CodePreview code={codeString} />
                </div>
                <div>
                  <TechStackAnimation />
                </div>
              </div>
            </motion.div>
          )}

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {[
              "Javascript",
              "React",
              "Next.js",
              "Angular",
              "Node.js",
              "MongoDB",
              "Express",
              "Git",
              "Azure",
              "Docker",
              "AWS",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Terminal-like Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700">
                <Terminal className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">developer stats</span>
              </div>
              <div className="p-4 space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-slate-400">years_of_experience:</span>
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-slate-400">projects_completed:</span>
                  <span className="text-blue-400">+20</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-slate-400">technologies_mastered:</span>
                  <span className="text-purple-400">+5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-slate-600 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <AboutSection ref={aboutRef} />

      {/* Projects Section */}
      <ProjectsSection ref={projectsRef} />

      {/* Contact Section */}
      <ContactSection ref={contactRef} />
    </div>
  );
}
