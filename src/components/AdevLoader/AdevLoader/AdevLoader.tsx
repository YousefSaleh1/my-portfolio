import { motion } from "framer-motion";
import "./AdevLoader.css";
function AdevLoader() {
  return (
    <div className="loader-a">
      <div className="container-view">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 5 }}
        >
          <div className="text-center">
            <p>welcome viewer</p>
          </div>
          <div className="secondry-text">
            <p>please Wait...</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="loading-page"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 3.5 }}
      >
        <svg
          id="svg-a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>

        <div className="name-container">
          <motion.div
            className="logo-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            {"</>"} x1 team dev
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdevLoader;
