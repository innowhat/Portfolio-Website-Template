import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ResponsiveNav from "../styles/ResponsiveNav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = styled.div`
  /* border-bottom: 2px solid MediumPurple; */
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    color: ${({ theme }) => theme.secondaryColor};
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
  @media (max-width: 650px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const NavMenu = () => {
  const { appData } = useContext(LanguageContext);
  const componentData = appData.nav;

  return (
    <ResponsiveNav
      menuOpenButton={<FaBars size={40} color="#fff" />}
      menuCloseButton={<FaTimes size={40} color="#fff" />}
      changeMenuOn="650px"
      largeMenuClassName="large-menu"
      smallMenuClassName="small-menu"
      menu={
        <Menu>
          <ul>
            <li>
              <NavLink to="/">{componentData.home}</NavLink>
            </li>
            <li>
              <NavLink to="/skills">{componentData.skills}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">{componentData.projects}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{componentData.contact}</NavLink>
            </li>
          </ul>
        </Menu>
      }
    />
  );
};

export default NavMenu;
