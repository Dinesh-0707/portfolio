// Shared Framer Motion piece: a quiet scroll reveal.
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.2, 0.8, 0.2, 1];

/** Wraps any element; it fades and rises slightly the first time it scrolls into view. */
export function Reveal({ as = 'div', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.12, margin: '0px 0px -6% 0px' });
  const [shown, setShown] = useState(false);
  useEffect(() => { if (inView) setShown(true); }, [inView]);

  const M = motion[as];
  const hidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  return (
      <M ref={ref} initial={hidden} animate={shown ? { opacity: 1, y: 0 } : hidden} transition={{ duration: 0.6, ease: EASE, delay }} {...rest}>
        {children}
      </M>
  );
}
