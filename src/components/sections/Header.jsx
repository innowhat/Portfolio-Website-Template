import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import NavMenu from "../widgets/NavMenu";
import { NavLink } from "react-router-dom";
import LanguageToggle from "../widgets/LanguageToggle";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.gradientBackground};
  height: auto;
  z-index: 1;
  opacity: 0.95;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;
const LeftGrid = styled.div`
  width: 100px;
  img {
    width: 40px;
    height: 40px;
  }
`;
const CenterGrid = styled.div`
  width: 80%;
`;
const RightGrid = styled.div`
  width: 100px;
  text-align: right;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container normal>
        <Grid>
          <LeftGrid>
            <NavLink to="/">
              <h4>SITENAME</h4>
            </NavLink>
          </LeftGrid>
          <CenterGrid>
            <NavMenu />
          </CenterGrid>
          <RightGrid>
            <LanguageToggle />
          </RightGrid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
