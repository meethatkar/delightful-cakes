import { gsap, useGSAP } from "../config/gsap";
import { categoryPositions } from "@/data/categoryPositions";

const useFeaturedCategoriesSpread = (sectionRef) => {
  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = gsap.utils.toArray(
      section.querySelectorAll("[data-spread-item]")
    );

    cards.forEach((card) => {
      const isCenter = card.dataset.position === "center-center";

      gsap.set(card, {
        x: 0,
        y: 0,
        opacity: isCenter ? 1 : 0,
        scale: isCenter ? 1 : 0,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 10%",
        end: "+=1000",
        scrub: 1,
        pin: true,
        // markers: true
      },
    });

    const positions = window.innerWidth >= 1024
      ? categoryPositions.desktop
      : categoryPositions.tablet;

    const centerCard = cards.find(card => card.dataset.position === "center-center");

    tl.to(centerCard, {
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
    }, 0);

    cards.forEach((card) => {
      const positionKey = card.dataset.position;
      const position = positions[positionKey];
      const isCenter = positionKey === "center-center";

      if (isCenter) return;

      tl.to(
        card,
        {
          opacity: 1,
          scale: 1,
          x: position.x,
          y: position.y,
          duration: 1,
          ease: "power3.out",
        },
        0
      );
    });
  }, { scope: sectionRef });
};

export default useFeaturedCategoriesSpread;
