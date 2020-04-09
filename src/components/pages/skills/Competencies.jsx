import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import { FaCode, FaPen, FaPalette } from "react-icons/fa";
import styled from "styled-components";
import Heading from "../../styles/Heading";

const Content = styled.div`
  text-align: center;
`;

const Competencies = () => {
  const { themeObject } = useContext(ThemeContext); // Todo Replace later
  const { appData } = useContext(LanguageContext);

  const componentData = appData.skills.competencies;

  const getThemeColor = themeObject; // Todo Replace later
  return (
    <Content>
      <Flex style={{ justifyContent: "center" }}>
        <Card>
          <FaPalette size={80} color={getThemeColor.primaryBackground} />
          <Heading h2 center>
            {componentData.item1.header}
          </Heading>
          <p>{componentData.item1.subHeader}</p>
        </Card>
        <Card>
          <FaCode size={80} color={getThemeColor.primaryBackground} />
          <Heading h2 center>
            {componentData.item2.header}
          </Heading>
          <p>{componentData.item2.subHeader}</p>
        </Card>
        <Card>
          <FaPen size={80} color={getThemeColor.primaryBackground} />
          <Heading h2 center>
            {componentData.item3.header}
          </Heading>
          <p>{componentData.item3.subHeader}</p>
        </Card>
      </Flex>
    </Content>
  );
};

export default Competencies;
