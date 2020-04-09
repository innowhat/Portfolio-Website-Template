import React from "react";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import styled from "styled-components";
import Heading from "../../styles/Heading";

const Cover = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 10%;
  padding-top: 5%;
  color: ${({ theme }) => theme.secondaryColor};

  p {
    font-size: 20px;
  }
  img {
    width: 200px;
    text-align: center;
  }

  h1 {
    font-size: 73px;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
    }
    img {
      width: 100px;
    }
  }
`;

const HomeCover = (props) => {
  const componentData = props.appData;
  return (
    <Cover>
      <Flex>
        <Card doTrans style={{ width: "100%" }}>
          <h1>{componentData.coverTitle}</h1>
          <Heading h2 center style={{ color: "#fff" }}>
            {componentData.coverTitle2}
          </Heading>
          <Heading h3 center style={{ color: "#fff" }}>
            {componentData.coverDescription}
          </Heading>
        </Card>
      </Flex>
    </Cover>
  );
};

export default HomeCover;
