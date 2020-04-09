import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Heading from "../../styles/Heading";

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Container from "../../styles/Container";

const HireCard = () => {
  const { appData } = useContext(LanguageContext);
  const componentData = appData.others.hire;
  return (
    <Container secondary>
      <Flex id="hire" style={{ justifyContent: "center", padding: "50px 0" }}>
        <Card secondary style={{ textAlign: "center" }}></Card>
        <Card big>
          <Heading h3>{componentData.header}</Heading>
          <p>{componentData.subHeader}</p>
          <Link to="/contact">{appData.misc.contact}</Link>
        </Card>
      </Flex>
    </Container>
  );
};

export default HireCard;
