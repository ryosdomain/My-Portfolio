import React from "react";
import { ArrowUpRight } from "lucide-react";
import Img1 from "../assets/images/Lynx.png";

const MyWork = () => {
  const projects = [
    {
      number: "01",
      type: "WORDPRESS · WOOCOMMERCE",
      title: "Northline Supply",
      description:
        "A conversion-focused commerce experience with custom product filtering and a streamlined checkout.",
      color: "bg-[#a78bfa]",
      ink: "text-[#17141f]",
      visual: "SHOP / 24",
      result: "+38%",
      resultLabel: "conversion rate",
      tags: ["Strategy", "UX/UI", "Development"],
      img: Img1,
      link: "https://lynx2.netlify.app/",
    },
    {
      number: "02",
      type: "REACT · TAILWIND",
      title: "Metrics Studio",
      description:
        "A responsive analytics dashboard that turns complex data into clear, useful decisions.",
      color: "bg-[#6d28d9]",
      ink: "text-white",
      visual: "48.2K",
      result: "2.4×",
      resultLabel: "faster insights",
      tags: ["Product design", "React", "Data viz"],
      img: "",
      link: "#",
    },
    {
      number: "03",
      type: "FIGMA · DEVELOPMENT",
      title: "Forma House",
      description:
        "A digital identity and editorial portfolio built from first sketch to production code.",
      color: "bg-[#c4b5fd]",
      ink: "text-[#17141f]",
      visual: "FH®",
      result: "4 wks",
      resultLabel: "design to launch",
      tags: ["Brand system", "Figma", "Frontend"],
      img: "",
      link: "#",
    },
  ];
  return (
    <div>
      <section
        id="work"
        className="mx-auto max-w-360 px-5 py-20 md:px-10 md:py-28 lg:px-16"
      >
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#6d28d9]">
              SELECTED WORK
            </p>
            <h2 className="font-display text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Work that{" "}
              <span className="font-serif font-normal italic text-[#6d28d9]">
                works.
              </span>
            </h2>
          </div>
          <div className="hidden items-center gap-3 text-sm font-semibold md:flex">
            <span className="h-px w-12 bg-black/30" />
            2022—2025
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-4xl border border-black/10 bg-white/75 p-2 shadow-[0_18px_70px_rgba(23,20,31,0.06)] backdrop-blur ${
                index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
              }`}
            >
              <div
                className={`${project.color} ${project.ink} relative flex overflow-hidden rounded-[1.55rem] p-6 ${
                  index === 0
                    ? "min-h-105 flex-1 md:min-h-140"
                    : "min-h-67.5 md:min-h-75"
                }`}
              >
                <span className="relative z-20 text-[10px] font-bold tracking-[0.18em]">
                  CASE STUDY / {project.number}
                </span>
                <span className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-current bg-white/10 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                  <a href={project.link} target="_blank">
                    <ArrowUpRight strokeWidth={1} />
                  </a>
                </span>

                <a href={project.link} target="_blank">
                  <div className="absolute inset-x-[10%] bottom-[-10%] top-[22%] rounded-t-2xl border border-current/20 bg-[#f8f7fc] p-3 text-[#17141f] shadow-2xl transition-transform duration-700 group-hover:-translate-y-3">
                    <div className="flex items-center gap-1.5 border-b border-black/10 pb-3">
                      <span className="h-2 w-2 rounded-full bg-black/20" />
                      <span className="h-2 w-2 rounded-full bg-black/20" />
                      <span className="h-2 w-2 rounded-full bg-black/20" />
                      <span className="ml-3 h-2 flex-1 rounded-full bg-black/5" />
                    </div>
                    <div className="relative mt-3 h-full overflow-hidden rounded-xl bg-[#17141f] p-5 text-white">
                      {/*============================== image ============================*/}
                      {project.img && (
                        <img
                          src={project.img}
                          className="inset-0 "
                          alt="image"
                        />
                      )}

                      <span className="text-[9px] font-bold tracking-[0.2em] text-white/40">
                        {project.type}
                      </span>
                      <p
                        className={`font-display mt-3 font-semibold leading-none tracking-[-0.07em] ${
                          index === 0 ? "text-6xl md:text-8xl" : "text-5xl"
                        }`}
                      >
                        {project.visual}
                      </p>
                      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                        <span className="h-12 rounded-lg bg-white/10" />
                        <span className="h-12 rounded-lg bg-white/10" />
                        <span className="h-12 rounded-lg bg-[#6d28d9]" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={`grid gap-6 p-5 md:p-6 ${index === 0 ? "md:grid-cols-[1fr_auto]" : ""}`}
              >
                <div>
                  <p className="mb-2 text-[10px] font-bold tracking-[0.16em] text-[#6d28d9]">
                    {project.type}
                  </p>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/55">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end gap-2 border-t border-black/10 pt-4 md:min-w-28 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="font-display text-3xl font-semibold tracking-tighter">
                    {project.result}
                  </p>
                  <p className="max-w-16 pb-1 text-[10px] leading-tight text-black/45">
                    {project.resultLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyWork;
