import { MouseEventHandler } from "react";
import { Avatar, Card, Col, Row } from "antd";
import "../App.css";
import TurkeyPhoto from "./earthquake-turkey-syria-main-teaser.jpg";
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
      "an attempt to explore, inform and educate the American public on the disparity of minority organ donorship in the United States",
    gitHub: "https://github.com/gmartinez948/OrganProject",
  },
];

const PersonalProjectGrid = () => {
  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  return (
    <Row className="Personal-project" gutter={16}>
      {personalProjects.map((project: PersonalProjectDataProps) => (
        <Col span={8}>
          <Card
            cover={<img alt="example" src={project.photo} />}
            title={project.title}
            bordered={true}
            hoverable={true}
            onClick={() => handleGitHubClick(project.gitHub)}
          >
            {project.summary}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PersonalProjectGrid;
