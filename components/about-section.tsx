"use client";

import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getExperienceTime = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  let diff = now.getTime() - start.getTime(); // Difference in milliseconds

  // Convert to time units
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff -= years * (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  diff -= months * (1000 * 60 * 60 * 24 * 30);

  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  diff -= weeks * (1000 * 60 * 60 * 24 * 7);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  return { years, months, weeks, days, hours, minutes, seconds };
};

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const [experience, setExperience] = useState(getExperienceTime("2021-04-27"));

  useEffect(() => {
    const interval = setInterval(() => {
      setExperience(getExperienceTime("2021-04-27"));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-slate-100">
                About Me
              </h2>
              <p className="text-slate-300 mb-6">
                I'm a passionate software developer with a keen eye for design
                and a love for creating seamless user experiences. With{" "}
                <strong>
                  {experience.years} years, {experience.months} months,{" "}
                  {experience.days} days
                </strong>{" "}
                of experience in the field, I've had the opportunity to work on
                a diverse range of projects, from small business websites to
                large-scale enterprise applications.
              </p>
              <p className="text-slate-300 mb-6">
                My expertise lies in frontend development, particularly with
                React and Next.js, but I'm also well-versed in backend
                technologies. I believe in writing clean, efficient code and
                always strive to stay updated with the latest industry trends
                and best practices.
              </p>

              <div className="  flex flex-col md:flex-row">
                <Link
                  href="/documents/German Gonzalez - Resume.pdf"
                  download
                  target="_blank"
                >
                  <Button className="mr-2" size="lg">
                    Descargar CV Español
                  </Button>
                </Link>
                <Link
                  href="/documents/German Gonzalez CV English.pdf"
                  download
                  target="_blank"
                >
                  <Button size="lg" className="mt-2 md:mt-0">
                    Download Resume
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/pp.jpg"
              alt="Germán González"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute left-0 bottom-0 lg:-bottom-6 lg:left-14 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold ">
                {experience.years}y {experience.months}m {experience.days}d{" "}
                {experience.hours}h {experience.minutes}m {experience.seconds}s
              </p>
              <p>of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
