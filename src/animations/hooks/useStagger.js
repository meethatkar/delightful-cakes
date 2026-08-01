import { gsap, useGSAP } from '../config/gsap';

const useStagger = (
  continerRef,
  {
    selector = "[data-stagger]",
    y = 80,
    x = 0,
    opacity = 0,
    duration = 0.8,
    each = 0.15,
    staggerFrom = "center",
    delay = 0,
    ease = "sine.inOut",
    start = "top 90%",
    end = "bottom 70%",
    once = true,
    scrub = true,
    useScrollTrigger = true,
    dependencies = []
  } = {}
) => {
  useGSAP(() => {
    if (!continerRef.current) return;

    const elements = gsap.utils.toArray(
      continerRef.current.querySelectorAll(selector)
    );

    if (!elements.length) return;

    const animConfig = {
      y,
      x,
      opacity,
      duration,
      stagger: {
        each,
        from: staggerFrom,
      },
      delay,
      ease,
    };

    if (useScrollTrigger) {
      animConfig.scrollTrigger = {
        trigger: continerRef.current,
        start,
        end,
        scrub,
        once: !scrub && once,
        onLeave: (self) => {
          if (scrub && once) {
            self.animation?.progress(1);
            self.kill(false);
          }
        }
      };
    }

    gsap.from(elements, animConfig);
  }, { scope: continerRef, dependencies: [selector, y, x, opacity, duration, each, staggerFrom, delay, ease, start, end, once, scrub, useScrollTrigger, ...dependencies] });
}

export default useStagger