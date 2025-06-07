import { useEffect, useRef, useState } from "react";

const useScrollDirection = () => {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const getScrollY = () =>
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = getScrollY();

          // Check if at top first
          const atTop = currentScrollY <= 2;
          setIsAtTop(atTop);

          // Only set direction if not at top
          if (!atTop && Math.abs(currentScrollY - lastScrollY.current) > 4) {
            setDirection(currentScrollY > lastScrollY.current ? "down" : "up");
            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { direction, isAtTop };
};

export default useScrollDirection;
