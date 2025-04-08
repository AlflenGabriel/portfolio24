// data/projects.ts (ou dentro do mesmo arquivo acima do componente)
import portifolioV2 from "../app/assets/portfoliov2.png";
import portifolioV1 from "../app/assets/portfoliov1.png";
import fisioeforma from "../app/assets/fisioeforma.png";
import depataempata from "../app/assets/depataempata.png";
import alexmuniz from "../app/assets/alexmuniz.png";
import vetembsb from "../app/assets/vetembrasilia.png";

export const projectsList = [
  {
    title: "Veterinária em Brasília",
    image: vetembsb,
    link: "https://www.vetembrasilia.com.br",
    description:
      "O foco deste projeto é criar um layout moderno e intuitivo, garantindo navegação eficiente e ótima experiência do usuário.",
  },
  {
    title: "Alex Muniz Personal",
    image: alexmuniz,
    link: "https://www.alexmuniz.com.br",
    description:
      "Desenvolvi uma landing page moderna e responsiva utilizando Next.js e Tailwind CSS, focando em uma estrutura enxuta e eficiente para apresentação do negócio.",
  },
  {
    title: "De Pata em Pata",
    image: depataempata,
    link: "https://depataempata.com.br",
    description:
      "Este projeto consistiu na criação de um site institucional para um cliente que precisava de uma presença digital sólida.",
  },
  {
    title: "Fisio & Forma Web",
    image: fisioeforma,
    link: "https://fisio-e-forma-web.vercel.app",
    description:
      "Landing page responsiva construída com Next.js e Tailwind CSS, onde aprimorei minhas habilidades na criação de componentes reutilizáveis, otimização de SEO e implementação de APIs.",
  },
  {
    title: "Web portfolio v2",
    image: portifolioV2,
    link: "/",
    description:
      "Versão 2.0 do meu portfolio web, desenvolvido no VSCode, usando Next.js, TypeScript, e Tailwind.",
  },
  {
    title: "Web portfolio v1",
    image: portifolioV1,
    link: "/",
    description:
      "Pirmeira versão do meu portfolio, construido enquanto desenvolvia minhas habilidades sobre desenvolvimento frontend moderno.",
  },
];
