import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Container from "../../styles/Container";
import ContainerContent from "../../styles/ContainerContent";
import styled from "styled-components";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Heading from "../../styles/Heading";

const Cover = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;
  color: ${({ theme }) => theme.secondaryColor};

  img {
    width: 100px;
  }
`;

function NotFound() {
  const { appData } = useContext(LanguageContext);
  const componentData = appData.others.error;

  return (
    <React.Fragment>
      <Container primary id="notfound">
        <Cover>
          <ContainerContent>
            <Flex>
              <Card big style={{ width: "100%", textAlign: "center" }}>
                <Heading center style={{ color: "#fff" }}>
                  {" "}
                  {componentData.header}
                </Heading>
                <Heading h5 center style={{ color: "#fff" }}>
                  {" "}
                  {componentData.subHeader}
                </Heading>
              </Card>
            </Flex>
          </ContainerContent>
        </Cover>
      </Container>

      <Container>
        <Card style={{ width: "100%" }}>
          <p style={{ textAlign: "center" }}>{componentData.details}</p>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default NotFound;
