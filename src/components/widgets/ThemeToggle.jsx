import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  position: relative;
`;
const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 15px;
  border-radius: 15px;
  background: #16222a;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0;
    margin-left: -1px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const Toggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  height: 15px;
  &:checked + ${ToggleLabel} {
    background: #00b4db;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ThemeToggle = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <div>
      <ToggleWrapper>
        <Toggle
          id="checkbox"
          type="checkbox"
          defaultChecked={theme === "dark" ? true : false}
          onChange={themeToggle}
        />
        <ToggleLabel htmlFor="checkbox" />
      </ToggleWrapper>
    </div>
  );
};

export default ThemeToggle;
