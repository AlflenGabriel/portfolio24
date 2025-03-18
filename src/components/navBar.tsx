"use client";
import React from "react";
import { Link } from "react-scroll";

function navBar() {
  return (
    <nav className="nav hidden lg:block">
      <div className="container">
        <ul className="mt-16 w-max">
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Sobre
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Habilidades
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projetos
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;
