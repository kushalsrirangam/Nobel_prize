import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "insights", label: "Insights" },
  { id: "trends", label: "Trends" },
  { id: "people", label: "People" },
  { id: "storytelling", label: "Stories" },
  { id: "dashboard", label: "Dashboard" },
  { id: "chatbot", label: "Chatbot" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 140 <= scrollY) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-sm transition-all duration-300 border-b dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-2">

        {/* Title */}
        <h1
          className={`text-center font-extrabold transition-all duration-300 ${
            scrolled ? "text-xl" : "text-3xl"
          } text-gray-900 dark:text-white tracking-tight mb-2`}
        >
          🏅 Laureate Lens <span className="text-blue-600 dark:text-blue-400">🌍</span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center mt-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                active === section.id
                  ? "border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 pb-1"
                  : ""
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
