import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "../styles/Container";
import Flex from "../styles/Flex";
import { LanguageContext } from "../context/LanguageContext";
import SocialContact from "../widgets/SocialContact";

const Footing = styled.footer`
  background: #000;
  color: #fff;
`;

const FootingNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  /* padding: 0 1rem; */
  @media (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FootingNavItems = styled.div`
  /* margin-left: 1.5rem; */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    padding: 0 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 12px;

    &:focus,
    &:hover,
    &:active {
      /*color: #fa923f; */
      opacity: 0.6;
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Footer = () => {
  const { appData } = useContext(LanguageContext);

  const navData = appData.nav;

  return (
    <Footing>
      <Container>
        <Flex style={{ justifyContent: "center", height: "100px" }}>
          <SocialContact />
        </Flex>

        <Flex style={{ justifyContent: "center", height: "100px" }}>
          <FootingNav>
            <FootingNavItems>
              <ul>
                <li>
                  <NavLink to="/">{navData.home}</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/skills">{navData.skills}</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/projects">{navData.projects}</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/contact">{navData.contact}</NavLink>
                </li>
              </ul>
            </FootingNavItems>
          </FootingNav>
        </Flex>
      </Container>
      <Container>
        <FootingNav>
          <Spacer />
          <FootingNavItems>
            <small>Copyright © 2020 sitename.com</small>
          </FootingNavItems>
          <Spacer />
        </FootingNav>
      </Container>
    </Footing>
  );
};

export default Footer;
