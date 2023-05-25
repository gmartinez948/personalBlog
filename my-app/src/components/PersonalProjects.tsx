import { useRef } from "react";
import { motion } from "framer-motion";
import { Avatar, Card, Col, Row } from "antd";
import "../App.css";
const { Meta } = Card;

export interface PersonalProjectDataProps {
  title: string;
  photo: string;
  summary: string;
  gitHub: string;
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      y: 0,
      duration: 1,
    },
  },
};

const PersonalProjectGrid = () => {
  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  return (
    <>
      <h1 className="h1-Personal-Projects">Personal Projects</h1>
      <motion.div
        className="Personal-project"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <Row gutter={[140, 20]}>
          {personalProjects.map((project: PersonalProjectDataProps) => (
            <Col xs={20} sm={16} md={10} xl={8} span={6}>
              <Card
                className="Personal-project-item"
                cover={
                  <img
                    alt="example"
                    src={project.photo}
                    style={{ height: 300 }}
                  />
                }
                title={project.title}
                hoverable={true}
                style={{ backgroundColor: "rgb(104, 195, 163)" }}
                onClick={() => handleGitHubClick(project.gitHub)}
              >
                {project.summary}
              </Card>
            </Col>
          ))}
        </Row>
      </motion.div>
    </>
  );
};

export default PersonalProjectGrid;
