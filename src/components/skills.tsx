import React from "react";
import {
  Keyboard,
  Gear,
  Atom,
  DeviceMobile,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";

const skills = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          skills
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <Keyboard className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  TypeScript and Strong Typing
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Leveraging TypeScript for static type checking and improved
                  code quality.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Crafting custom types, interfaces, and using generics for
                  robust code.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <Atom className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  React and Next.js
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Proficient in building reusable components with React.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Utilizing Next.js for server-side rendering (SSR), dynamic
                  routing, SEO and performance optimization.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <DeviceMobile className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  Responsive Design and Accessibility
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Creating responsive designs using media queries, flexbox,
                  and grid ensures your application adapts well to various
                  screen sizes.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Utilizing CSS frameworks like Tailwind and SCSS streamlines
                  styling and maintains consistency.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <Gear className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  Testing and Code Quality
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Writing unit and integration tests for React components.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Familiar with tools like Jest and React Testing Library.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <PaintBrush className="h-6 w-6" />
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                  Tooling and Ecosystem
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Configuring ESLint, Prettier, Webpack, and Babel for a
                  smooth development experience.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Staying up-to-date with the latest libraries and best
                  practices.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default skills;
