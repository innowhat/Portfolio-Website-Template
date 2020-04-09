import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/project/Projects";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/others/NotFound";
import styled from "styled-components";
import ThemeToggle from "../widgets/ThemeToggle";

const WidgetWrapper = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transform: rotate(90deg);
  a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }
`;

function Content() {
  return (
    <React.Fragment>
      <WidgetWrapper>
        <ThemeToggle />
      </WidgetWrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills/" component={Skills} />
        <Route path="/projects/" component={Projects} />
        <Route path="/contact/" component={Contact} />
        <Route path="" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default Content;
