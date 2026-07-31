import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../config/gsap";

const useTextReveal = (targetRef, options = {}) => {
  const {
    trigger = "mount",
    scrollStart = "top 85%",
    splitBy = "lines",
    duration = 0.67,
    stagger = 0.085,
    delay = 0,
    ease = "power1.in",
  } = options;

  const splitRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    if (!targetRef.current) return;

    let elements;
    if (splitBy === "lines") {
      const outerSplit = new SplitText(targetRef.current, {
        type: "lines",
        linesClass: "clip-line-parent"
      });
      const innerSplit = new SplitText(outerSplit.lines, {
        type: "lines",
        linesClass: "clip-line-child"
      });

      // Ensure the outer wrapper has overflow hidden to act as a mask
      gsap.set(outerSplit.lines, { overflow: "hidden" });

      splitRef.current = {
        revert: () => {
          innerSplit.revert();
          outerSplit.revert();
        }
      };
      elements = innerSplit.lines;
    } else {
      splitRef.current = new SplitText(targetRef.current, {
        type: splitBy,
        lineThreshold: 0.3
      });
      elements = splitRef.current[splitBy];
    }

    gsap.set(elements, {
      yPercent: 110
    });

    tlRef.current = gsap.timeline({
      paused: true,
      defaults: { delay }
    });

    tlRef.current.to(elements, {
      yPercent: 0,
      opacity: 1,
      duration,
      stagger: {
        each: stagger,
        from: "start"
      },
      ease,
    });

    if (trigger === "mount") {
      tlRef.current.play();
    }

    if (trigger === "scroll") {
      ScrollTrigger.create({
        trigger: targetRef.current,
        start: scrollStart,
        once: true,
        onEnter: () => tlRef.current?.play()
      });
    }

    return () => {
      tlRef.current?.kill();
      if (splitRef.current?.revert) {
        splitRef.current.revert();
      }
    };

  }, { scope: targetRef, dependencies: [trigger, splitBy, delay, scrollStart, duration, stagger, ease] });

  return {
    play: () => tlRef.current?.play(),
    reverse: () => tlRef.current?.reverse(),
    reset: () => tlRef.current?.pause(0),
  };
};

export default useTextReveal;
