import React from "react";
import Flex from "../../styles/Flex";
import Button from "../../styles/Button";
import Heading from "../../styles/Heading";

const Techs = props => {
  const componentData = props.appData;
  const myTechList = componentData.techList
    .slice(props.listStart, props.listEnd)
    .map(tech => (
      <Button big inverse key={tech.name} style={{ width: "220px" }}>
        <a href={tech.url} target="_blank" rel="noopener noreferrer">
          <p> {tech.name}</p>
        </a>
      </Button>
    ));

  return (
    <React.Fragment>
      <Heading h2 center>
        {componentData.techHeader}
      </Heading>
      <Flex style={{ justifyContent: "center", textAlign: "center" }}>
        {myTechList}
      </Flex>
    </React.Fragment>
  );
};

export default Techs;
