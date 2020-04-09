import React from "react";
import Card from "../../styles/Card";
import Heading from "../../styles/Heading";
import styled from "styled-components";

const Cover = styled.div`
  margin: 10px 10px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  border-radius: 10px;
  display: flex;
`;

const ProjectList = props => {
  const componentData = props.appData;
  const myProjectList = componentData.projectList.map(project => (
    <Cover>
      <Card doTrans Shadow style={{ textAlign: "center" }}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.img} alt={project.name} style={{ width: "100%" }} />
        </a>
      </Card>
      <Card big>
        <Heading h3>{project.name}</Heading>
        <p>{project.details}</p>
      </Card>
    </Cover>
  ));
  return <React.Fragment>{myProjectList}</React.Fragment>;
};

export default ProjectList;
