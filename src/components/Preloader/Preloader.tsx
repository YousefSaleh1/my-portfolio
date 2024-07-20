// import { motion } from "framer-motion";
import "./Preloader.css";
const PreLoader = () => {
//    const loaderVariants = {
//     animationOne: {
//         x: [-20, 20],
//         y: [0 , -30],
//         transition: {
//             x : {
//                 yoyo : Infinity,
//                 duration : 0.5,
//             },
//             y : {
//                 yoyo : Infinity,
//                 duration : 0.25,
//             }
//         }
//     }
//   };
  
  return (
  
    <div className='spinner-container'>
        <div className="spinner"></div>
    </div>
    // <motion.div className="loader"
    //             variants={loaderVariants}
    //             animate="animtaionOne"
    // >

    // </motion.div>
  )
};

export default PreLoader;
