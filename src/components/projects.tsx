"use client";
import React from "react";
import Image from "next/image";
import { projectsList } from "../data/projects";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <div className="text-justify cursor-default">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <div className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </div>
      </div>

      <motion.ul
        className="group/list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projectsList.map((project, index) => (
          <motion.li
            key={index}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="sm:order-1 sm:col-span-2 flex justify-center">
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  alt={project.title}
                  loading="lazy"
                  src={project.image}
                  width={200}
                  height={48}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-justify">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Projects;
