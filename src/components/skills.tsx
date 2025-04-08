"use client";

import React from "react";
import { motion } from "motion/react";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="text-justify cursor-default">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Habilidades
        </h2>
      </div>

      <ol className="group/list">
        {skills.map((skill, index) => (
          <li key={index} className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <skill.icon className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  {skill.title}
                </h3>
                {skill.description.map((line, i) => (
                  <p key={i} className="mt-2 text-sm leading-normal">
                    • {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Skills;
