import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, AnimationControls } from 'framer-motion';

interface TProjectCardAnimationProps {
  children: React.ReactNode;
  delayValue?: number;
}

function ProjectCardAnimation ({ children,delayValue, ...props }:TProjectCardAnimationProps) {
  const controls: AnimationControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    onChange : (inView) => {
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
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 ,delay : delayValue} },
    hidden: { opacity: 0, x: -100, transition: { type: 'spring', stiffness: 100 } }
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
}

export default ProjectCardAnimation;