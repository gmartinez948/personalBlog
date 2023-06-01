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

const NameHeader = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
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
        <button className="contact-me" onClick={() => scrollToBottom()}>
          Contact Me
        </button>
      </motion.h3>
    </div>
  );
};

export default NameHeader;
