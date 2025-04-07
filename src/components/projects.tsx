import React from "react";
import portifolioV2 from "../app/assets/portfoliov2.png";
import portifolioV1 from "../app/assets/portfoliov1.png";
import fisioeforma from "../app/assets/fisioeforma.png";
import depataempata from "../app/assets/depataempata.png";
import alexmuniz from "../app/assets/alexmuniz.png";
import vetembsb from "../app/assets/vetembrasilia.png";
import Image from "next/image";
const projects = () => {
  return (
    <div className="text-justify cursor-default">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <div className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </div>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <div className="sm:order-1 sm:col-span-2 flex justify-center">
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  alt="alt"
                  loading="lazy"
                  src={vetembsb}
                  width={200}
                  height={48}
                  style={{ color: "transparent" }}
                />
              </div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 cursor-not-allowed text-base">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Veterinária em Brasília. (Em desenvolvimento)
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  O foco deste projeto é criar um layout moderno e intuitivo,
                  garantindo navegação eficiente e ótima experiência do usuário.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <div className="sm:order-1 sm:col-span-2 flex justify-center">
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  alt="alt"
                  loading="lazy"
                  src={alexmuniz}
                  width={200}
                  height={48}
                  style={{ color: "transparent" }}
                />
              </div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href="https://www.alexmuniz.com.br"
                    target="_blank"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Alex Muniz Personal.
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Desenvolvi uma landing page moderna e responsiva utilizando
                  Next.js e Tailwind CSS, focando em uma estrutura enxuta e
                  eficiente para apresentação do negócio.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <div className="sm:order-1 sm:col-span-2 flex justify-center">
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  alt="alt"
                  loading="lazy"
                  src={depataempata}
                  width={200}
                  height={48}
                  style={{ color: "transparent" }}
                />
              </div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href="https://depataempata.com.br"
                    target="_blank"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    De Pata em Pata.
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Este projeto consistiu na criação de um site institucional
                  para um cliente que precisava de uma presença digital sólida.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <div className="sm:order-1 sm:col-span-2 flex justify-center">
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  alt="alt"
                  loading="lazy"
                  src={fisioeforma}
                  width={200}
                  height={48}
                  style={{ color: "transparent" }}
                />
              </div>

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href="https://fisio-e-forma-web.vercel.app"
                    target="_blank"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Fisio & Forma Web.
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Landing page responsiva construída com Next.js e Tailwind CSS,
                  onde aprimorei minhas habilidades na criação de componentes
                  reutilizáveis, otimização de SEO e implementação de APIs.
                </p>
              </div>
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
        </ul>
      </div>
    </div>
  );
};

export default projects;
