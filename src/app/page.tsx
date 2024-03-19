"use client";
import CursorFollower from "@/components/CursorFollower";
import Header from "@/components/header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <CursorFollower />
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Element
              name="About"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <About />
            </Element>
            <section
              id="Skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <Skills />
            </section>
            <section
              id="Projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <Projects />
            </section>
            <section>
              <Footer />
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
