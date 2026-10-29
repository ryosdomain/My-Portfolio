import React from 'react'
import {ArrowUpRight} from "lucide-react"
const Footer = () => {
  return (
    <div>
        <footer id="contact" className="bg-[#f8f7fc] text-[#17141f]">
        <div className="mx-auto max-w-360 px-5 pb-28 pt-5 md:px-10 md:pb-10 md:pt-6 lg:px-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#6d28d9] px-6 py-14 text-white md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -right-4 -top-24 h-64 w-64 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute right-24 top-12 h-3 w-3 rounded-full bg-[#c4b5fd] shadow-[0_0_30px_rgba(196,181,253,0.9)]" />

            <div className="relative z-10 flex flex-col">
              <div className="mb-12 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/65">
                <span className="h-2 w-2 rounded-full bg-[#c4b5fd]" />
                CURRENTLY BOOKING NEW PROJECTS
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-white/65">
                Have an idea, a redesign, or a product that needs a thoughtful digital home?
              </p>
              <h2 className="font-display mt-5 max-w-5xl text-[clamp(3.6rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                Let’s build
                <br />
                something <span className="font-serif font-normal italic text-[#c4b5fd]">great.</span>
              </h2>

              <a
                href="mailto:hello@yourname.dev"
                className="group mt-12 flex w-fit items-center gap-5 rounded-full bg-white px-6 py-4 font-semibold text-[#17141f] transition-transform hover:-translate-y-1"
              >
                Start a conversation
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17141f] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight strokeWidth={1} />
                </span>
              </a>
            </div>
          </div>

          <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:py-16">
            <div>
              <a href="#top" className="font-display text-2xl font-bold tracking-[-0.04em]">
                DEV/FOLIO<span className="text-[#6d28d9]">.</span>
              </a>
              <p className="mt-4 max-w-sm leading-relaxed text-black/50">
                Independent web developer and designer creating clear, memorable digital experiences.
              </p>
              <a
                className="mt-6 inline-block border-b border-black/30 pb-1 font-semibold transition-colors hover:text-[#6d28d9]"
                href="mailto:hello@yourname.dev"
              >
                hello@yourname.dev
              </a>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.18em] text-black/40">EXPLORE</p>
              <div className="flex flex-col items-start gap-3 font-semibold">
                {['Work', 'About', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="transition-transform hover:translate-x-1 hover:text-[#6d28d9]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.18em] text-black/40">CONNECT</p>
              <div className="flex flex-col items-start gap-3 font-semibold">
                {['LinkedIn', 'GitHub', 'Dribbble'].map((item) => (
                  <a key={item} href="#" className="group flex items-center gap-2 hover:text-[#6d28d9]">
                    {item}
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight strokeWidth={1} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-black/15 pt-6 text-xs text-black/45 md:flex-row md:items-center md:justify-between">
            <p>© 2025 YOUR NAME. All rights reserved.</p>
            <p>Designed in Figma · Built with React & Tailwind</p>
            <a href="#top" className="font-semibold text-[#17141f] transition-colors hover:text-[#6d28d9]">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer