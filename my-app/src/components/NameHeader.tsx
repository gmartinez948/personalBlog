import { easeIn, motion } from "framer-motion";

const headerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 2 } },
};

const hiText = {
  hidden: { opacity: 0, x: 400 },
  showHi: {
    opacity: 1,
    x: 20,
    transition: {
      duration: 2,
      scale: 5,
      ease: "easeIn",
    },
  },
};

const nameText = {
  hidden: { opacity: 0, y: -300 },
  showName: {
    opacity: 1,
    y: -125,
    transition: {
      delay: 1,
      duration: 3,
      ease: "easeOut",
    },
  },
};

const engineerText = {
  hidden: { opacity: 0, scale: 1, y: 300 },
  showEngineerText: {
    opacity: 1,
    y: -160,
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeOut",
    },
  },
};

const NameHeader = () => {
  return (
    <motion.div
      className="Header-img"
      variants={headerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div className="Header">
        <div>
          <motion.div variants={hiText} initial="hidden" animate="showHi">
            Hi!
          </motion.div>
          <motion.div
            className="Name-Text"
            variants={nameText}
            initial="hidden"
            animate="showName"
          >
            I'm Guillermo Martinez
          </motion.div>
          <motion.div
            variants={engineerText}
            initial="hidden"
            animate="showEngineerText"
          >
            Full Stack Software Engineer
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NameHeader;
