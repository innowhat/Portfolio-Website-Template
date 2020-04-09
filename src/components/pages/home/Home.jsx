import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import LinkButton from "../../styles/LinkButton";
import ContainerContent from "../../styles/ContainerContent";
import Tools from "../skills/Tools";
import Tech from "../skills/Tech";
import Competencies from "../skills/Competencies";
import HomeCover from "./HomeCover";
import HireCard from "../others/HireCard";
import AboutCard from "../others/AboutCard";

import { LanguageContext } from "../../context/LanguageContext";

function Home() {
  const { appData } = useContext(LanguageContext);
  let listStart = 0;
  let listEnd = 12;
  return (
    <React.Fragment>
      <Container primary id="home">
        <ContainerContent>
          <HomeCover appData={appData.home} />
        </ContainerContent>
      </Container>
      <Container>
        <Competencies appData={appData.skills.competencies} />
        <div style={{ textAlign: "center" }}>
          <LinkButton>
            <Link to="/skills">{appData.misc.learnMore}</Link>
          </LinkButton>
        </div>
      </Container>
      <AboutCard />
      <Container>
        <Tech
          appData={appData.skills.tech}
          listStart={listStart}
          listEnd={listEnd}
        />
        <br />
        <div style={{ textAlign: "center" }}>
          <LinkButton>
            <Link to="/skills">{appData.misc.seeMore}</Link>
          </LinkButton>
        </div>
      </Container>
      <HireCard />
      <Container>
        <Tools
          appData={appData.skills.tools}
          listStart={listStart}
          listEnd={listEnd}
        />
        <br />
        <div style={{ textAlign: "center" }}>
          <LinkButton>
            <Link to="/skills">{appData.misc.seeMore}</Link>
          </LinkButton>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Home;
