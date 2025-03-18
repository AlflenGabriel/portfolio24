import React from "react";

const about = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Sobre
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Olá! Sou um{" "}
          <span className="text-slate-200">Cientista da Computação</span>{" "}
          especializado em{" "}
          <span className="text-slate-200">Desenvolvimento Front-End</span>.
          Durante minha jornada acadêmica e profissional, desenvolvi um olhar
          atento para o design e uma abordagem técnica sólida, permitindo-me
          criar experiências de usuário que são tanto funcionais quanto
          visualmente atraentes.
        </p>
        <p className="mb-4">
          Atuei como freelancer, onde tive a oportunidade de trabalhar em
          projetos completos, aprimorando minhas habilidades em tecnologias
          front-end e consolidando minha capacidade de transformar ideias em
          soluções web intuitivas. Meu conhecimento em algoritmos, estruturas de
          dados e boas práticas de desenvolvimento me ajuda a traduzir desafios
          complexos em interfaces acessíveis e responsivas.
        </p>
        <p className="mb-4">
          {" "}
          Acredito que uma interface bem construída é essencial para conectar
          pessoas a produtos digitais de qualidade. Por isso, me dedico a
          desenvolver soluções que envolvem, encantam e comunicam de forma clara
          em qualquer dispositivo. Estou sempre em busca de novos desafios e
          oportunidades para criar experiências digitais inovadoras. Vamos
          construir algo incrível juntos!
        </p>
      </div>
    </div>
  );
};

export default about;
