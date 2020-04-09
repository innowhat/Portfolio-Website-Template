import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Container from "../../styles/Container";
import ContainerContent from "../../styles/ContainerContent";
import Heading from "../../styles/Heading";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import ProjectList from "./ProjectList";
import PlayGroundList from "./PlayGroundList";
import HireCard from "../others/HireCard";
import AboutCard from "../others/AboutCard";
function Projects() {
  const { appData } = useContext(LanguageContext);
  const componentData = appData.projects;

  return (
    <React.Fragment>
      <Container primary id="projects">
        <ContainerContent>
          <Flex
            style={{
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <Card style={{ width: "100%" }}>
              <Heading center style={{ color: "#fff" }}>
                {componentData.title}
              </Heading>
              <Heading center h4 style={{ color: "#fff" }}>
                {componentData.description}
              </Heading>
            </Card>
          </Flex>
        </ContainerContent>
      </Container>
      <Container>
        <ProjectList appData={appData.projects} />
      </Container>
      <AboutCard />
      <Container style={{ padding: "100px 0" }}>
        <PlayGroundList appData={appData.projects} />
      </Container>
      <HireCard />
    </React.Fragment>
  );
}

export default Projects;
