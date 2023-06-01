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

const PersonalProjectGrid = () => {
  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  return (
    <>
      <h1 className="Personal-Projects">Personal Projects</h1>
      <Row gutter={[16, 16]} style={{ paddingBottom: "10%" }}>
        {personalProjects.map((project: PersonalProjectDataProps) => (
          <Col xs={24} md={12} xl={8} span={8} style={{ display: "flex" }}>
            <Card
              // className="Personal-project-item"
              cover={<img alt="example" src={project.photo} />}
              title={project.title}
              hoverable={true}
              style={{
                backgroundColor: "rgb(189, 195, 199)",
                margin: "10px 15% 10px 15%",
              }}
              onClick={() => handleGitHubClick(project.gitHub)}
            >
              {project.summary}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PersonalProjectGrid;
