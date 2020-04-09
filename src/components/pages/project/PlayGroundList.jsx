import React from "react";
import Flex from "../../styles/Flex";
import Card from "../../styles/Card";
import Heading from "../../styles/Heading";
import LinkButton from "../../styles/LinkButton";

const PlayGroundList = props => {
  const componentData = props.appData.playGround;
  const myPlayGroundList = componentData.playGroundList.map(playground => (
    <Card Shadow key={playground.name}>
      <p>{playground.name}</p>
      <a href={playground.url} target="_blank" rel="noopener noreferrer">
        <img
          src={playground.img}
          alt={playground.name}
          style={{ width: "100%", height: "100px" }}
        />
      </a>
    </Card>
  ));

  return (
    <React.Fragment>
      <Heading h3 center>
        {componentData.header}
      </Heading>
      <Flex style={{ justifyContent: "center", textAlign: "center" }}>
        {myPlayGroundList}
      </Flex>
      <br />
      <div style={{ textAlign: "center" }}>
        <LinkButton>
          <a
            href={componentData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {componentData.more}
          </a>
        </LinkButton>
      </div>
    </React.Fragment>
  );
};

export default PlayGroundList;
