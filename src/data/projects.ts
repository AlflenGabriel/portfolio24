// data/projects.ts (ou dentro do mesmo arquivo acima do componente)
import portifolioV22 from "../app/assets/portfoliov22.png";
import portifolioV12 from "../app/assets/portfoliov12.png";
import fisioeforma2 from "../app/assets/fisioeforma2.png";
import DepataemPataMockup2 from "../app/assets/DepataemPataMockup2.png";
import AlexMunizMockup2 from "../app/assets/AlexMunizMockup2.png";
import vetembsbMockup2 from "../app/assets/vetembsbMockup2.png";

export const projectsList = [
  {
    title: "Veterinária em Brasília",
    image: vetembsbMockup2,
    link: "https://www.vetembrasilia.com.br",
    description:
      "O foco deste projeto é criar um layout moderno e intuitivo, garantindo navegação eficiente e ótima experiência do usuário.",
  },
  {
    title: "Alex Muniz Personal",
    image: AlexMunizMockup2,
    link: "https://www.alexmuniz.com.br",
    description:
      "Desenvolvi uma landing page moderna e responsiva utilizando Next.js e Tailwind CSS, focando em uma estrutura enxuta e eficiente para apresentação do negócio.",
  },
  {
    title: "De Pata em Pata",
    image: DepataemPataMockup2,
    link: "https://depataempata.com.br",
    description:
      "Este projeto consistiu na criação de um site institucional para um cliente que precisava de uma presença digital sólida.",
  },
  {
    title: "Fisio & Forma Web",
    image: fisioeforma2,
    link: "https://fisio-e-forma-web.vercel.app",
    description:
      "Landing page responsiva construída com Next.js e Tailwind CSS, onde aprimorei minhas habilidades na criação de componentes reutilizáveis, otimização de SEO e implementação de APIs.",
  },
  {
    title: "Web portfolio v2",
    image: portifolioV22,
    link: "/",
    description:
      "Versão 2.0 do meu portfolio web, desenvolvido no VSCode, usando Next.js, TypeScript, e Tailwind.",
  },
  {
    title: "Web portfolio v1",
    image: portifolioV12,
    link: "/",
    description:
      "Pirmeira versão do meu portfolio, construido enquanto desenvolvia minhas habilidades sobre desenvolvimento frontend moderno.",
  },
];
