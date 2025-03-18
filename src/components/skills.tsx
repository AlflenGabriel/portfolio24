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
          Habilidades
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
                  TypeScript e Tipagem Forte
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Utilização do TypeScript para verificação estática de tipos
                  e melhoria na qualidade do código.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Criação de tipos personalizados, interfaces e uso de
                  generics para código mais robusto.
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
                  React e Next.js
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Experiência no desenvolvimento de componentes reutilizáveis
                  com React.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Utilização do Next.js para renderização no servidor (SSR),
                  roteamento dinâmico, otimização de SEO e performance.
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
                  Design Responsivo e Acessibilidade
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Desenvolvimento de layouts responsivos utilizando media
                  queries, flexbox e grid para garantir adaptação a diferentes
                  tamanhos de tela.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Uso de frameworks CSS como Tailwind e SCSS para estilização
                  eficiente e manutenção da consistência visual.
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
                  Testes e Qualidade de Código
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Escrita de testes unitários e de integração para componentes
                  React.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Familiaridade com ferramentas como Jest e React Testing
                  Library.
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
                  Tooling e Ecossistema
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Configuração de ESLint, Prettier, Webpack e Babel para um
                  fluxo de desenvolvimento otimizado.
                </p>
                <p className="mt-2 text-sm leading-normal">
                  • Sempre Atualizado sobre novas bibliotecas e melhores
                  práticas do ecossistema.
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
