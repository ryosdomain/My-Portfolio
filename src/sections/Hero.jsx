import React from 'react'
import {ArrowRight} from 'lucide-react'
const Hero = () => {
  return (
    <div>
        <section
        id="top"
        className="relative mx-auto grid max-w-360 gap-10 overflow-hidden px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1fr_320px] lg:px-16"
      >
        <div className="pointer-events-none absolute right-[10%] top-10 h-64 w-64 rounded-full border border-black/10 md:h-96 md:w-96">
          <div className="absolute inset-8 rounded-full border border-black/10" />
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]" />
        </div>
        <div className="relative z-10">
          <div className="mb-8 flex w-fit items-center gap-3 rounded-full border border-black/15 bg-white/50 px-4 py-2 text-[10px] font-bold tracking-[0.18em] backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6d28d9] opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#6d28d9]" />
            </span>
            AVAILABLE FOR SELECT PROJECTS
          </div>
          <h1 className="font-display max-w-250 text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
            I BUILD
            <br />
            <span className="relative inline-block font-serif font-normal italic tracking-[-0.06em]">
              digital
              <svg
                aria-hidden="true"
                viewBox="0 0 470 34"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-6 w-full text-[#6d28d9]"
              >
                <path d="M3 25C122 2 319 6 467 18" fill="none" stroke="currentColor" strokeWidth="7" />
              </svg>
            </span>{' '}
            THINGS.
          </h1>
        </div>

        <div className="relative z-10 flex flex-col justify-end lg:pb-2">
          <p className="max-w-sm text-xl leading-relaxed text-black/65">
            Web developer and UI designer turning ideas into fast, thoughtful websites that work as
            beautifully as they look.
          </p>
          <a
            href="#work"
            className="mt-8 flex w-fit items-center gap-5 border-b border-black pb-2 text-sm font-bold tracking-wide"
          >
            EXPLORE MY WORK <ArrowRight strokeWidth={1} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero