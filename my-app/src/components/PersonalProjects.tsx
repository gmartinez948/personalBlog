import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { NumberLiteralType } from "typescript";

export interface PersonalProjectDataProps {
  title: string;
  photo: string;
  summary: string;
  gitHub: string;
  handleGitHubClick?: (github: string) => void;
}

const personalProjects: ReadonlyArray<PersonalProjectDataProps> = [
  {
    title: "BlogForReason",
    photo: "./earthquake-turkey-syria-main-teaser.jpg",
    summary:
      "Full Stack blogging app to help promote donations to worldy catastrophic events",
    gitHub: "https://github.com/gmartinez948/Blogs-For-Turkey",
  },
  {
    title: "Marxet Trading App",
    photo: "./trade.jpeg",
    summary: "Full Stack trading app for goods",
    gitHub: "https://github.com/roman-marxists",
  },
  {
    title: "Organ Project",
    photo: "./organs.jpeg",
    summary:
      "An attempt to explore, inform and educate the American public on the disparity of minority organ donorship in the United States",
    gitHub: "https://github.com/gmartinez948/OrganProject",
  },
];

const variants = {
  hidden: (direction: number) => {
    return { x: direction > 0 ? 200 : -200, opacity: 0 };
  },
  visible: { x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { x: direction > 0 ? -200 : 200, opacity: 0 };
  },
};

const PersonalProjectGrid = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  const nextSlide = () => {
    setDirection(1);
    if (index === personalProjects.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(personalProjects.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="Personal-Project-Container">
      <h1>Personal Projects</h1>
      <div className="Personal-Project-Box">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate="visible"
            initial=" hidden"
            exit="exit"
          >
            <img
              className="Personal-Project-Image"
              src={personalProjects[index].photo}
              alt={personalProjects[index].title}
              key={personalProjects[index] as any}
            ></img>
            <h2>{personalProjects[index].title}</h2>
            <p>{personalProjects[index].summary}</p>
            <button
              onClick={() => handleGitHubClick(personalProjects[index].gitHub)}
            >
              Github
            </button>
            <button onClick={prevSlide}>{"<"}</button>
            <button onClick={nextSlide}>{">"}</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersonalProjectGrid;
