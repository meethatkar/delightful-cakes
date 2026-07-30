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
    once = false,
    scrub = 1
  } = {}
) => {
  useGSAP(() => {
    if (!continerRef.current) return;

    const elements = gsap.utils.toArray(
      continerRef.current.querySelectorAll(selector)
    );

    if (!elements.length) return;

    gsap.from(elements, {
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
      scrollTrigger: {
        trigger: continerRef.current,
        start,
        end,
        once,
        scrub,
        markers: true,
      }
    });
  }, { scope: continerRef });
}

export default useStagger