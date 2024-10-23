import { useEffect, useState } from "react";

export const useScroll = (threshold: number = 1.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const viewportHeight = window.innerHeight;

          // Если прокрутили больше определённого процента высоты видимой области
          if (scrollPosition > viewportHeight * threshold) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
};
