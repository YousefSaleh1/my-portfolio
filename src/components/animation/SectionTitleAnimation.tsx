import { useInView } from 'react-intersection-observer';
import { useAnimation ,motion} from 'framer-motion';
import { useEffect } from 'react';

interface TSectionTitleAnimation {
    children: React.ReactNode;
    
  }

function SectionTitleAnimation({ children, ...props }:TSectionTitleAnimation) {
    const controls = useAnimation();
  const [ref, inView] = useInView({
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
  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    transition={{ duration: 1, delay: 0.25 }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -30 }
    }}
    {...props}
  >
    {children}
  </motion.div>
  )
}

export default SectionTitleAnimation