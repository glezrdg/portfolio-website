"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-slate-900"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-100">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="bg-slate-800 border-slate-700 text-slate-100" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-slate-800 border-slate-700 text-slate-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={6}
                className="bg-slate-800 border-slate-700 text-slate-100"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
})

ContactSection.displayName = "ContactSection"

export default ContactSection

