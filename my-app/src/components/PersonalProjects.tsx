import { useRef } from "react";
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
      <Row gutter={[30, 20]}>
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
              bordered={true}
              hoverable={true}
              onClick={() => handleGitHubClick(project.gitHub)}
            >
              {project.summary}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PersonalProjectGrid;
