import React from "react";
import { ArrowUpRight } from "lucide-react";
const Skill = () => {
  const skills = [
    ["01", "WordPress", "Custom themes, plugins, WooCommerce"],
    ["02", "React.js", "Fast, interactive web applications"],
    ["03", "Tailwind CSS", "Responsive, scalable interfaces"],
    ["04", "Figma", "UI design, prototypes, design systems"],
  ];
  return (
    <div>
      <section
        id="skills"
        className="mx-auto max-w-360 px-5 py-20 md:px-10 md:py-28 lg:px-16"
      >
        <p className="mb-10 text-xs font-bold tracking-[0.2em] text-[#6d28d9]">
          WHAT I DO
        </p>
        <div className="border-t border-black/20">
          {skills.map(([number, title, description]) => (
            <div
              key={title}
              className="group grid gap-3 border-b border-black/20 py-7 transition-all duration-300 hover:bg-white/60 md:grid-cols-[80px_1fr_1fr_52px] md:items-center md:px-4"
            >
              <span className="text-xs font-bold text-black/40">{number}</span>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                {title}
              </h3>
              <p className="text-black/55">{description}</p>
              <span className="relative hidden h-11 w-11 items-center justify-center md:flex">
                <span className="absolute inset-0 rounded-full border-2 border-[#6d28d9] border-r-transparent group-hover:animate-spin motion-reduce:animate-none" />
                <span className="scale-75 text-[#6d28d9] transition-transform duration-300 group-hover:scale-90">
                  <ArrowUpRight strokeWidth={1} />
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;
