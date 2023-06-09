import { easeIn, motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import styles from "../App";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
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
      delay: 2.9,
      duration: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const buttonHover = {
  scale: 1.2,
};

const NameHeader = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };

  const goToGithub = () => {
    window.open("https://github.com/gmartinez948");
  };

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/guillermo-948-martinez/");
  };

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
        <br />
        <div className="Contact-Me-Container">
          <motion.button
            className="contact-me"
            variants={button}
            initial="hidden"
            animate="visible"
            onClick={() => scrollToBottom()}
            whileHover={buttonHover}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.button>
          <motion.button
            className="contact-me"
            variants={button}
            initial="hidden"
            animate="visible"
            onClick={() => goToLinkedIn()}
            whileHover={buttonHover}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedIn />
          </motion.button>
          <motion.button
            className="contact-me"
            variants={button}
            initial="hidden"
            animate="visible"
            onClick={() => goToGithub()}
            whileHover={buttonHover}
            whileTap={{ scale: 0.9 }}
          >
            <GitHub />
          </motion.button>
        </div>
      </motion.h3>
    </div>
  );
};

export default NameHeader;
