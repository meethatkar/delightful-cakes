import { useLayoutEffect } from 'react'
import { gsap } from '../config/gsap';

const useReveal = (
  ref, {
    y = 80,
    opacity = 0,
    duration = 0.8,
    ease = "power3.out",
    delay = 0,
  } = {}
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ref.current, { y, opacity });

      gsap.to(
        ref.current,
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          }
        }
      )
    }, ref);

    return () => ctx.revert();
  }, [y, opacity, duration, ease, delay, ref])
}

export default useReveal