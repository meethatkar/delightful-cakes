import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap } from "../config/gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer, ScrollTrigger);

const useMarquee = ({
  speed = 50,
  direction = -1,
} = {}) => {
  const containerRef = useRef(null);
  const [activeDirection, setActiveDirection] = useState(direction);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = container.querySelector("[data-marquee-track]");
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 3;

    // Start from middle copy
    let x = -singleSetWidth;
    gsap.set(track, { x });

    // Convert duration speed to pixels-per-frame velocity (assuming ~60fps)
    const baseVelocity = singleSetWidth / (speed * 60);

    let currentDirection = direction;
    let targetVelocity = baseVelocity * currentDirection;
    let currentVelocity = targetVelocity;
    let isHovered = false;

    // Manual ticker for infinite bi-directional wrapping and momentum
    const update = () => {
      // Smooth easing (momentum) towards target velocity
      const target = isHovered ? 0 : targetVelocity;
      currentVelocity += (target - currentVelocity) * 0.1;

      x += currentVelocity;

      // Infinite wrapping logic
      if (x <= -singleSetWidth * 2) {
        x += singleSetWidth;
      } else if (x >= -singleSetWidth) {
        x -= singleSetWidth;
      }

      gsap.set(track, { x });
    };

    // Optimize performance by only running the ticker when the marquee is in view
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => gsap.ticker.add(update),
      onLeave: () => gsap.ticker.remove(update),
      onEnterBack: () => gsap.ticker.add(update),
      onLeaveBack: () => gsap.ticker.remove(update),
    });

    // Agency-level interactions using Observer
    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onWheel: (e) => {
        const nextDirection = e.deltaY > 0 ? -1 : 1;
        if (currentDirection !== nextDirection) {
          currentDirection = nextDirection;
          setActiveDirection(nextDirection);
        }
        targetVelocity = currentDirection * baseVelocity;
      },
      onDrag: (e) => {
        const nextDirection = e.deltaX > 0 ? 1 : -1;
        if (currentDirection !== nextDirection) {
          currentDirection = nextDirection;
          setActiveDirection(nextDirection);
        }
        targetVelocity = currentDirection * baseVelocity;
      }
    });

    // Pause on hover
    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gsap.ticker.remove(update);
      observer.kill();
      st.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { containerRef, activeDirection };
};

export default useMarquee;