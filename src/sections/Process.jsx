import React from "react";
import {ArrowUpRight} from "lucide-react"

const Process = () => {
  return (
    <div>
      <section id="process" className="bg-[#17141f] text-white">
        <div className="mx-auto max-w-360 px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#a78bfa]">
                MY PROCESS
              </p>
              <h2 className="font-display text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
                Clear process.
                <br />
                Better outcomes.
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-white/55 md:justify-self-end">
              No black boxes or unnecessary complexity. You’ll always know
              what’s happening, why it matters, and what comes next.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                text: "We align on your goals, audience, content, and what success should look like.",
              },
              {
                step: "02",
                title: "Design & build",
                text: "I shape the experience in Figma, then bring it to life with clean, scalable code.",
              },
              {
                step: "03",
                title: "Launch & grow",
                text: "After testing every detail, we launch with a foundation ready for what comes next.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="group relative min-h-72 overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-7 transition-colors hover:bg-white/8 md:p-8"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#a78bfa]">
                    {item.step}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60">
                    <ArrowUpRight strokeWidth={1} />
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 md:bottom-8 md:left-8 md:right-8">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/50">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1.45fr_0.55fr]">
            <blockquote className="rounded-4xl bg-[#6d28d9] p-8 md:p-10">
              <span className="font-serif text-6xl leading-none text-[#a78bfa]">
                “
              </span>
              <p className="mt-3 max-w-3xl font-display text-2xl font-medium leading-snug tracking-[-0.03em] md:text-4xl">
                The best websites don’t just look impressive—they make the next
                action feel obvious.
              </p>
              <footer className="mt-8 text-xs font-bold tracking-[0.16em] text-white/55">
                MY APPROACH TO DIGITAL WORK
              </footer>
            </blockquote>
            <div className="flex min-h-64 flex-col justify-between rounded-4xl bg-[#a78bfa] p-8 text-[#17141f]">
              <p className="text-xs font-bold tracking-[0.16em]">
                CORE TOOLKIT
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "React",
                  "WordPress",
                  "Tailwind",
                  "TypeScript",
                  "Git",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-black/20 px-3 py-2 text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
