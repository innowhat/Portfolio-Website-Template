import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Container from "../../styles/Container";
import Heading from "../../styles/Heading";
import SocialContact from "../../widgets/SocialContact";

const AboutCard = () => {
  const { appData } = useContext(LanguageContext);
  const componentData = appData.others.about;
  return (
    <Container secondary>
      <Flex style={{ justifyContent: "center" }} id="about">
        <Card secondary style={{ textAlign: "center" }}>
          <img
            src={componentData.aboutPicture}
            alt={componentData.aboutHeader}
            style={{ width: "150px" }}
          />
        </Card>
        <Card big>
          <Heading h3>{componentData.aboutHeader}</Heading>
          <p>{componentData.aboutDescription}</p>
          <Heading>
            <SocialContact />
          </Heading>
        </Card>
      </Flex>
    </Container>
  );
};

export default AboutCard;
