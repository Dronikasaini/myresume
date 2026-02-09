import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]); // default first section

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // 1/3 screen

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
};
