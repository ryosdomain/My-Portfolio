import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <section id="about" className="bg-[linear-gradient(135deg,#ddd6fe_0%,#f5f3ff_100%)]">
        <div className="mx-auto grid max-w-360 gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em]">ABOUT ME</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Design eye.
              <br />
              Developer mind.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-2xl leading-snug md:text-3xl">
              I bridge the gap between design and development—creating tailored digital experiences
              without the handoff headaches.
            </p>
            <p className="mt-7 max-w-xl leading-relaxed text-black/65">
              From flexible WordPress builds to custom React interfaces, I choose the right tool for
              the job. I care about clean code, sharp details, accessibility, and websites that help
              businesses move forward.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                ['5+', 'Years creating'],
                ['40+', 'Projects shipped'],
                ['100%', 'Built with care'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-black/15 bg-black/5 p-4 backdrop-blur">
                  <p className="font-display text-3xl font-semibold tracking-tighter">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-black/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe