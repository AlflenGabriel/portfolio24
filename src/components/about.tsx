import React from "react";

const about = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hello! I'm a passionate{" "}
          <span className="text-slate-200">Computer Scientist</span>{" "}
          specializing in the art of{" "}
          <span className="text-slate-200">Front-End Development</span>. With a
          solid foundation in computer science principles and a keen eye for
          design, I craft seamless user experiences that are not only functional
          but also visually compelling.
        </p>
        <p className="mb-4">
          My journey in computer science has equipped me with a deep
          understanding of algorithms, data structures, and programming
          paradigms. This technical expertise, combined with my proficiency in
          front-end technologies, enables me to translate complex problems into
          intuitive and accessible web solutions.
        </p>
        <p className="mb-4">
          {" "}
          I believe that a great user interface is the bridge between the human
          mind and digital product excellence. Driven by this belief, I dedicate
          myself to building responsive, user-centric interfaces that engage,
          delight, and communicate clearly on all devices. Whether it's through
          meticulous code or innovative design, my goal is to contribute to
          projects that push the boundaries of what's possible on the web. Let's
          create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default about;
