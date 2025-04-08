import {
  Lightning,
  Code,
  PaintBrush,
  GlobeHemisphereWest,
  DeviceMobile,
  TerminalWindow,
  Cloud,
  PuzzlePiece,
} from "@phosphor-icons/react";

import { Icon } from "@phosphor-icons/react";

export interface Skill {
  title: string;
  description: string[];
  icon: Icon;
}

export const skills: Skill[] = [
  {
    title: "Desenvolvimento com React",
    description: [
      "Criação de interfaces dinâmicas e reutilizáveis com React.",
      "Hooks avançados, Context API e otimização de performance.",
    ],
    icon: Lightning,
  },
  {
    title: "Tailwind CSS e UI Consistente",
    description: [
      "Estilização rápida e responsiva com Tailwind CSS.",
      "Criação de design system leve e reutilizável.",
    ],
    icon: PaintBrush,
  },
  {
    title: "Next.js e Arquitetura Moderna",
    description: [
      "Criação de SPAs e SSR com Next.js.",
      "Uso de App Router, SSG, otimização de assets.",
    ],
    icon: Code,
  },
  {
    title: "SEO e Performance",
    description: [
      "Otimização de metadados, imagens e estrutura para SEO.",
      "Melhoria de Core Web Vitals e performance geral.",
    ],
    icon: GlobeHemisphereWest,
  },
  {
    title: "Responsividade e Acessibilidade",
    description: [
      "Layouts adaptáveis a todos os tamanhos de tela.",
      "Boas práticas de acessibilidade e navegação por teclado.",
    ],
    icon: DeviceMobile,
  },
  {
    title: "Integrações com APIs e CMS",
    description: [
      "Conexão com REST/GraphQL e CMS headless como Strapi ou Sanity.",
      "Gerenciamento eficiente de dados e conteúdo dinâmico.",
    ],
    icon: Cloud,
  },
  {
    title: "Componentização e Escalabilidade",
    description: [
      "Criação de componentes reutilizáveis com props tipadas.",
      "Padronização e organização de projeto para times.",
    ],
    icon: PuzzlePiece,
  },
  {
    title: "Testes e Qualidade",
    description: [
      "Uso de Jest e Testing Library para testes unitários.",
      "Linting, Prettier e boas práticas para manutenção.",
    ],
    icon: TerminalWindow,
  },
];
