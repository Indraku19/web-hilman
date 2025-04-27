// components/Lottie/bugFreeCode.tsx
"use client";

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from 'public/Lottie/freeCodes.json';

const BugFreeCode = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem;
    if (container.current) {
      anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return <div ref={container} />;
};

export default BugFreeCode;

