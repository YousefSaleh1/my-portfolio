import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, AnimationControls, delay } from 'framer-motion';

interface TScaleAnimation {
  children: React.ReactNode;
  delayValue: number;
}

function ScaleAnimation ({ children,delayValue, ...props }:TScaleAnimation) {
  const controls: AnimationControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    onChange : (inView, entry) => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }}
 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 ,delay : delayValue } },
    hidden: { opacity: 0, scale: 0.50, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleAnimation;