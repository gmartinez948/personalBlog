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
      <h1 className="Personal-Projects-Header">Personal Projects</h1>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          className="Project-Image_Box"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={personalProjects[index].photo as any}
        >
          <div style={{ minHeight: "0" }}>
            <img
              className="Personal-Project-Image"
              src={personalProjects[index].photo}
              alt={personalProjects[index].title}
            ></img>
          </div>
          <h2 style={{ fontStyle: "italic" }}>
            {personalProjects[index].title}
          </h2>
          <p style={{ fontStyle: "italic" }}>
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
      <motion.button className="PrevSlide" onClick={prevSlide}>
        {"<"}
      </motion.button>
      <button className="NextSlide" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default PersonalProjectGrid;
