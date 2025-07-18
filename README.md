# Portfólio Pessoal - Gabriel Alflen

Bem-vindo ao repositório do meu portfólio pessoal, desenvolvido com **Next.js** e **TypeScript**. Este projeto foi criado para apresentar minhas habilidades, projetos e experiências de forma interativa e moderna.

## Visão Geral

Este portfólio é uma aplicação web responsiva e de alta performance, construída com as tecnologias mais recentes do ecossistema React. Ele serve como um hub central para exibir meus trabalhos e fornecer informações de contato.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), proporcionando performance e SEO otimizados.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros em tempo de desenvolvimento.
- **Tailwind CSS**: Framework CSS utilitário que permite a construção rápida de interfaces personalizadas com classes de baixo nível.
- **React Scroll**: Biblioteca para animações de scroll suaves entre as seções da página.
- **Framer Motion**: Biblioteca para animações de interface de usuário, utilizada para criar efeitos visuais dinâmicos.

## Funcionalidades

- **Navegação Intuitiva**: Barra de navegação responsiva com rolagem suave para as seções.
- **Seção Sobre Mim**: Detalhes sobre minha trajetória profissional e interesses.
- **Seção de Habilidades**: Apresentação das minhas competências técnicas.
- **Seção de Projetos**: Galeria de projetos com descrições e links relevantes.
- **Efeito Cursor Follower**: Um efeito visual interativo que segue o movimento do mouse.
- **Design Responsivo**: Adaptação da interface para diferentes tamanhos de tela (desktops, tablets e celulares).

## Como Rodar o Projeto Localmente

Para configurar e executar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) (ou yarn/pnpm/bun) instalados.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/AlflenGabriel/portfolio24.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd portfolio24
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
portfolio24/
├── public/                 # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── app/                # Páginas e layouts da aplicação Next.js
│   │   ├── assets/         # Recursos estáticos específicos da aplicação
│   │   ├── globals.css     # Estilos CSS globais
│   │   ├── layout.tsx      # Layout principal da aplicação
│   │   └── page.tsx        # Página inicial
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── CursorFollower.tsx
│   │   ├── about.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── navBar.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   └── data/               # Dados estáticos (projetos, habilidades, etc.)
│       ├── projects.ts
│       └── skills.ts
├── .eslintrc.json          # Configurações do ESLint
├── .gitignore              # Arquivos e diretórios a serem ignorados pelo Git
├── next.config.mjs         # Configurações do Next.js
├── package.json            # Metadados do projeto e dependências
├── postcss.config.js       # Configurações do PostCSS
├── tailwind.config.ts      # Configurações do Tailwind CSS
└── tsconfig.json           # Configurações do TypeScript
```

## Deploy

Este projeto está deployado e pode ser acessado em: [alflengabriel.vercel.app](https://alflengabriel.vercel.app)

---

Desenvolvido com ❤️ por Gabriel Alflen.
