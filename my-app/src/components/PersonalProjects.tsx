import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";

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

const ProjectSlider = ({
  title,
  photo,
  summary,
  gitHub,
  handleGitHubClick,
}: PersonalProjectDataProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const transformText = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <section className="PersonalProject">
      <div ref={ref}>
        <img className="personalProject" src={photo} alt={title} />
      </div>
      <motion.h2 className="PersonalProject" style={transformText}>
        {title}
        <br />
        <p className="Project-Summary">{summary}</p>
        <br />
        <motion.button
          className="GitHub"
          whileHover={{
            scale: 1.2,
          }}
          onClick={() => handleGitHubClick && handleGitHubClick(gitHub)}
        >
          GitHub
        </motion.button>
      </motion.h2>
    </section>
  );
};

const PersonalProjectGrid = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.001,
  });

  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  return (
    <div className="Personal-Project-Container">
      <div>
        {personalProjects.map(({ title, photo, summary, gitHub }) => {
          return (
            <ProjectSlider
              title={title}
              photo={photo}
              summary={summary}
              gitHub={gitHub}
              handleGitHubClick={handleGitHubClick}
            />
          );
        })}
        <motion.div style={{ scaleX }}></motion.div>
      </div>
    </div>
  );
};

export default PersonalProjectGrid;
