import React from "react";

const footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 cursor-default">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Visual Studio Code{" "}
        </a>
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Next.js{" "}
        </a>
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Tailwind CSS{" "}
        </a>
        , deployed with{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Vercel{" "}
        </a>
      </p>
    </footer>
  );
};

export default footer;
