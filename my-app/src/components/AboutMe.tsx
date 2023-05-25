import { useRef } from "react";
import "../App.css";
import { AnimatePresence, motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      x: 0,
      duration: 2,
    },
  },
};
const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="AboutMe">
        <img
          className="AboutMe-img"
          alt="about me img"
          src="./me.jpg"
          style={{ height: 600 }}
        />
        <div className="aboutMeText">
          <h1 className="About-Me-Header">About Me</h1>I am a full stack
          software engineer with one year of experience working with Ruby on
          Rails, Typescript/Javascript, React, and GraphQL. During my time at
          Gusto, I worked on new product features that helped customers stay tax
          compliant, improved the codebase by tackling tech debt, and fixed bugs
          in production code. I have a strong passion for seeing projects come
          to life. There is nothing cooler than starting with an idea and ending
          with a well-tested, successful product. Another passion of mine is
          finding and fixing bugs. I love the "AHA" moment and then writing
          reliable tests to prevent the unwanted behavior. Although I am
          animated about software development, I also love working with people!
          Every week, you will find my calendar stacked with pairing sessions
          because I believe that is the best way to learn - from each other.
          Currently, I am searching for a new opportunity. Please reach out to
          me if you have any connections or are looking to hire for an L1
          engineer.
          <div
            ref={ref}
            className="Language-img"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img alt="react" src="./react-logo.svg" style={{ height: 40 }} />
            <img
              alt="typescript"
              src="./typescript.svg"
              style={{ height: 40 }}
            />
            <img alt="node" src="./nodelogo.svg" style={{ height: 40 }} />
            <img alt="ruby" src="./rubylogo.svg" style={{ height: 40 }} />
            <img alt="python" src="./python-icon.svg" style={{ height: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
