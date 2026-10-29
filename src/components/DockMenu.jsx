import React from "react";

const DockMenu = () => {
  const dockItems = [
    {
      label: "Home",
      href: "#top",
      path: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z",
    },
    {
      label: "Work",
      href: "#work",
      path: "M9 6V4h6v2m-11 4h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Zm0 0V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2m-9 3h2",
    },
    {
      label: "About",
      href: "#about",
      path: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
    },
    {
      label: "Skills",
      href: "#skills",
      path: "m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 6l-3 12",
    },
    {
      label: "Contact",
      href: "#contact",
      path: "M4 6h16v12H4V6Zm0 1 8 6 8-6",
    },
  ];
  return (
    <div>
      <aside
        aria-label="Quick navigation"
        className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/15 bg-[#17141f]/95 p-1.5 text-white shadow-2xl backdrop-blur md:bottom-auto md:left-3 md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
      >
        <nav className="flex items-center gap-1 md:flex-col">
          {dockItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 hover:bg-[#a78bfa] hover:text-[#17141f] ${
                index === 0 ? "bg-[#6d28d9]" : "text-white/65"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
              >
                <path
                  d={item.path}
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded-md bg-[#17141f] px-2.5 py-1.5 text-[10px] font-bold tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:bottom-auto md:left-full md:ml-3 md:translate-x-0">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default DockMenu;
