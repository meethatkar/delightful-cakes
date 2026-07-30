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

    gsap.fromTo(
      ref.current,
      {
        y,
        opacity,
      },
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
  }, [])
}

export default useReveal