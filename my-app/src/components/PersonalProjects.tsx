import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    return { x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.5 };
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "ease-in", stiffness: 50, damping: 20 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        x: { type: "ease-in", stiffness: 50, damping: 20 },
        opacity: { duration: 0.2 },
      },
    };
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
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="Personal-Project-Box"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={personalProjects[index].photo as any}
        >
          <img
            className="Personal-Project-Image"
            src={personalProjects[index].photo}
            alt={personalProjects[index].title}
          ></img>
          <h2 className="Personal-Project-Box">
            {personalProjects[index].title}
          </h2>
          <p className="Personal-Project-Box">
            {personalProjects[index].summary}
          </p>
          <button
            className="GitHub"
            onClick={() => handleGitHubClick(personalProjects[index].gitHub)}
          >
            Github
          </button>
        </motion.div>
      </AnimatePresence>
      <div className="Slider-Button-Box">
        <button className="PrevSlide" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="NextSlide" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PersonalProjectGrid;
