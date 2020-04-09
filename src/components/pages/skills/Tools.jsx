import React from "react";
import Flex from "../../styles/Flex";
import Button from "../../styles/Button";
import Heading from "../../styles/Heading";

const Tools = props => {
  const componentData = props.appData;
  const myToolsList = componentData.toolsList
    .slice(props.listStart, props.listEnd)
    .map(tool => (
      <Button big inverse key={tool.name} style={{ width: "150px" }}>
        <a href={tool.url} target="_blank" rel="noopener noreferrer">
          <p> {tool.name}</p>
        </a>
      </Button>
    ));

  return (
    <React.Fragment>
      <Heading h2 center>
        {componentData.toolsHeader}
      </Heading>
      <Flex style={{ justifyContent: "center", textAlign: "center" }}>
        {myToolsList}
      </Flex>
    </React.Fragment>
  );
};

export default Tools;
