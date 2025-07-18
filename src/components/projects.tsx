"use client";

import React from "react";
import Image from "next/image";
import { projectsList } from "../data/projects";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="text-justify cursor-default">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <ol className="group/list">
        {projectsList.map((project, index) => (
          <li key={index} className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group will-change-transform relative grid gap-4 pb-1 transition-all sm:grid-cols-8 lg:grid-cols-12 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg group-hover:border-slate-200/30" />

              {/* Container da Imagem */}
              <div className="sm:order-1 sm:col-span-3 lg:col-span-5 flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[960px]"
                >
                  <div className="relative w-full max-w-[960px] aspect-[1.19]">
                    <Image
                      className="object-contain rounded border-2 border-slate-200/10 transition hover:border-slate-200/30"
                      sizes="(max-width: 768px) 100vw, 960px"
                      alt={project.title}
                      loading="lazy"
                      src={project.image}
                      fill
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
              </div>

              {/* Texto e Descrição */}
              <div className="z-10 sm:order-2 sm:col-span-5 lg:col-span-7">
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
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Projects;
