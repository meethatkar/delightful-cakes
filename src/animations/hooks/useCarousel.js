import { gsap, useGSAP } from "../config/gsap";

const useCarousel = (containerRef, activeIndex) => {
  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray(container.querySelectorAll("[data-position]"));

    cards.forEach((card) => {
      const position = card.dataset.position;

      // Handle shadows dynamically via GSAP (avoids tailwind class conflicts)
      const shadowLeftRight = "0 15px 35px rgba(0,0,0,0.08)";
      const shadowCenter = "0 25px 60px color-mix(in srgb, var(--color-primary) 22%, transparent)";

      if (position === "left") {
        gsap.to(card, {
          xPercent: -115,
          yPercent: -50,
          scale: 0.85,
          rotation: -3,
          opacity: 0.65,
          zIndex: 10,
          boxShadow: shadowLeftRight,
          duration: 0.6,
          ease: "back.out(1.2)",
        });
      } else if (position === "center") {
        gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          scale: 1.05,
          rotation: 0,
          opacity: 1,
          zIndex: 20,
          boxShadow: shadowCenter,
          duration: 0.6,
          ease: "back.out(1.2)",
        });
      } else if (position === "right") {
        gsap.to(card, {
          xPercent: 15,
          yPercent: -50,
          scale: 0.85,
          rotation: 3,
          opacity: 0.65,
          zIndex: 10,
          boxShadow: shadowLeftRight,
          duration: 0.6,
          ease: "back.out(1.2)",
        });
      } else {
        // hidden states (entering / exiting)
        gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          scale: 0.5,
          rotation: 0,
          opacity: 0,
          zIndex: 0,
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });
};

export default useCarousel;