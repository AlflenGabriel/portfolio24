import React from "react";
import projIMG from "../app/assets/projIMG.jpg";
import portifolioV2 from "../app/assets/portfoliov2.png";
import portifolioV1 from "../app/assets/portfoliov1.png";
import todoList from "../app/assets/todoList.png";
import Image from "next/image";
const projects = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <div className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </div>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="/"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Web portfolio v2.
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  This is version 2.0 of my web portfolio, developed in VSCode,
                  using Next.js, TypeScript, and Tailwind.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt="alt"
                loading="lazy"
                src={portifolioV2}
                width={200}
                height={48}
                style={{ color: "transparent" }}
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    target="_blank"
                    href="https://alflengabriel.netlify.app/"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Web portfolio v1.
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  This is version 1.0 of my web portfolio, developed in VSCode,
                  using React, JavaScript, and CSS. Deployed with Netlify.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt="alt"
                loading="lazy"
                src={portifolioV1}
                width={200}
                height={48}
                style={{ color: "transparent" }}
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://github.com/AlflenGabriel/next-todo-list"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Todo List
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Todo List developed in Next.js, JavasCript, and Tailwind.
                  connected with Vercel/PostGres.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt="alt"
                loading="lazy"
                src={todoList}
                width={200}
                height={48}
                style={{ color: "transparent" }}
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="/"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Coming soon...
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis iusto, esse voluptate repellendus laborum? At
                  quia magnam, impedit ducimus amet maxime fugiat harum vero
                  optio sequi aliquid repellat rerum.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt="alt"
                loading="lazy"
                src={projIMG}
                width={200}
                height={48}
                style={{ color: "transparent" }}
              />
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="/"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Coming soon...
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  perspiciatis iusto, esse voluptate repellendus laborum? At
                  quia magnam, impedit ducimus amet maxime fugiat harum vero
                  optio sequi aliquid repellat rerum.
                </p>
              </div>
              <Image
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                alt="alt"
                loading="lazy"
                src={projIMG}
                width={200}
                height={48}
                style={{ color: "transparent" }}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default projects;
