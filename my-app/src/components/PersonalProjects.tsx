import { useRef } from "react";
import { Avatar, Card, Col } from "antd";
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
      "an attempt to explore, inform and educate the American public on the disparity of minority organ donorship in the United States",
    gitHub: "https://github.com/gmartinez948/OrganProject",
  },
];

const PersonalProjectGrid = () => {
  const handleGitHubClick = (github: string) => {
    window.open(github);
  };

  return (
    <div className="Personal-project">
      {personalProjects.map((project: PersonalProjectDataProps) => (
        <Col span={5}>
          <Card
            style={{ width: 400, height: 300 }}
            cover={
              <img alt="example" src={project.photo} style={{ height: 300 }} />
            }
            title={project.title}
            bordered={true}
            hoverable={true}
            onClick={() => handleGitHubClick(project.gitHub)}
          >
            {project.summary}
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default PersonalProjectGrid;
