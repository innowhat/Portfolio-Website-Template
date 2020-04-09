import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import Container from "../../styles/Container";
import ContainerFlex from "../../styles/ContainerFlex";
import ContainerContent from "../../styles/ContainerContent";
import Heading from "../../styles/Heading";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Tools from "./Tools";
import Tech from "./Tech";

import { FaCode, FaPen, FaPalette } from "react-icons/fa";
import HireCard from "../others/HireCard";
import styled from "styled-components";
import AboutCard from "../others/AboutCard";

const Content = styled.div`
  hr {
    border: 0.5px solid ${({ theme }) => theme.primaryBackground};
    width: 50%;
  }
`;

function Skills() {
  const { appData } = useContext(LanguageContext);
  const { themeObject } = useContext(ThemeContext); // Todo Replace later

  const getThemeColor = themeObject; // Todo Replace later
  const componentData = appData.skills;

  return (
    <Content>
      <Container primary id="skills">
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
      <ContainerFlex style={{ padding: "50px 0 50px 0", textAlign: "center" }}>
        <Flex style={{ justifyContent: "center" }}>
          <Card Shadow doTrans>
            <FaPalette size={80} color={getThemeColor.primaryBackground} />
            <Heading h2 center>
              {componentData.competencies.item1.header}
            </Heading>
            <p>{componentData.competencies.item1.details}</p>
          </Card>
          <Card doTrans Shadow>
            <FaCode size={80} color={getThemeColor.primaryBackground} />
            <Heading h2 center>
              {componentData.competencies.item2.header}
            </Heading>
            <p>{componentData.competencies.item2.details}</p>
          </Card>
          <Card doTrans Shadow>
            <FaPen size={80} color={getThemeColor.primaryBackground} />
            <Heading h2 center>
              {componentData.competencies.item3.header}
            </Heading>
            <p>{componentData.competencies.item3.details}</p>
          </Card>
        </Flex>
      </ContainerFlex>
      <AboutCard />
      <Container>
        <Tech appData={appData.skills.tech} />
      </Container>
      <HireCard />
      <Container>
        <Tools appData={appData.skills.tools} />
      </Container>
    </Content>
  );
}

export default Skills;
