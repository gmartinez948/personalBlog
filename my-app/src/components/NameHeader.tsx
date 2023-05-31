import { easeIn, motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const button = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 4.5,
    },
  },
};

const NameHeader = () => {
  return (
    <div className="Header-with-img">
      <motion.h3
        className="intro-text"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {"Hi! I'm Guillermo Martinez".split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {"Full Stack Software Engineer".split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <motion.button
          className="contact-me"
          variants={button}
          initial="hidden"
          animate="visible"
        >
          Contact Me
        </motion.button>
      </motion.h3>
    </div>
  );
};

export default NameHeader;
