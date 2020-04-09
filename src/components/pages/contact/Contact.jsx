import React, { useContext } from "react";
import Container from "../../styles/Container";
import ContainerContent from "../../styles/ContainerContent";
import ContactForm from "./ContactForm";
import Heading from "../../styles/Heading";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import { LanguageContext } from "../../context/LanguageContext";
import AboutCard from "../others/AboutCard";
import LinkButton from "../../styles/LinkButton";

function Contact() {
  const { appData } = useContext(LanguageContext);

  return (
    <React.Fragment>
      <Container primary id="contact">
        <ContainerContent>
          <Flex
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card style={{ width: "100%" }}>
              <Heading h2 center style={{ color: "#fff" }}>
                {appData.contact.title}
              </Heading>
              <Heading center h5 style={{ color: "#fff" }}>
                {appData.contact.description}
              </Heading>
            </Card>
          </Flex>
        </ContainerContent>
      </Container>
      <Container>
        <Flex>
          <Card>
            <img
              src={appData.contact.titleImage}
              alt={appData.contact.titleImage}
              style={{ width: "100px" }}
            />
            <Heading h4>{appData.contact.emailDescription}</Heading>
            <LinkButton href="mailto:name@email.com">Send email</LinkButton>
          </Card>
          <Card big Shadow>
            <ContactForm appData={appData.contact} />
          </Card>
        </Flex>
      </Container>
      <AboutCard />
    </React.Fragment>
  );
}
export default Contact;
