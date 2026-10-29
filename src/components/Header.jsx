import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="mx-auto flex max-w-360 items-center justify-between border-b border-black/20 px-5 py-5 md:px-10 lg:px-16">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-[-0.04em]"
        >
          DEV/FOLIO<span className="text-[#6d28d9]">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold md:flex">
          <a className="transition-colors hover:text-[#6d28d9]" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-[#6d28d9]" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-[#6d28d9]" href="#skills">
            Skills
          </a>
          <a
            className="flex items-center gap-3 rounded-full bg-[#17141f] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            href="#contact"
          >
            Let’s talk
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/30 md:hidden"
        >
          <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
        </button>
      </header>

      {menuOpen && (
        <nav className="mx-5 flex flex-col border-b border-black/20 py-5 text-xl font-semibold md:hidden">
          {["work", "about", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="border-t border-black/10 py-3 capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
