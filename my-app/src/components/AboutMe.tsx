import { useRef, useEffect } from "react";
import "../App.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

const languageTransition = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
};
const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="AboutMe">
      <img className="AboutMe-img" alt="about me img" src="./me.jpg" />
      <p className="AboutMe">
        I am a full stack software engineer with one year of experience working
        with Ruby on Rails, Typescript/Javascript, React, and GraphQL. During my
        time at Gusto, I worked on new product features that helped customers
        stay tax compliant, improved the codebase by tackling tech debt, and
        fixed bugs in production code. I have a strong passion for seeing
        projects come to life. There is nothing cooler than starting with an
        idea and ending with a well-tested, successful product. Another passion
        of mine is finding and fixing bugs. I love the "AHA" moment and then
        writing reliable tests to prevent the unwanted behavior. Although I am
        animated about software development, I also love working with people!
        Every week, you will find my calendar stacked with pairing sessions
        because I believe that is the best way to learn - from each other.
        Currently, I am searching for a new opportunity. Please reach out to me
        if you have any connections or are looking to hire for an L1 engineer.
      </p>
      <motion.div
        ref={ref}
        className="Language-grid"
        variants={languageTransition}
        initial="hidden"
        animate={controls}
      >
        <img className="language" alt="react" src="./react-logo.svg" />
        <img className="language" alt="typescript" src="./typescript.svg" />
        <img className="language" alt="node" src="./nodelogo.svg" />
        <img className="language" alt="ruby" src="./rubylogo.svg" />
        <img className="language" alt="python" src="./python-icon.svg" />
      </motion.div>
    </div>
  );
};

export default AboutMe;
