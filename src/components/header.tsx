import React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import NavBar from "./navBar";

const header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
          <a href="/">Alflen Gabriel</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>

        <NavBar />
      </div>
      <ul className="ml-1 mt-8 flex items-center text-slate-200">
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/AlflenGabriel"
            target="_blank"
          >
            <GithubLogo className="h-8 w-8" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/alflengabriel/"
            target="_blank"
          >
            <LinkedinLogo className="h-8 w-8" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default header;
