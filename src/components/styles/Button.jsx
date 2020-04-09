import React from "react";
import styled, { css } from "styled-components";
import Loader from "./Loader";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props =>
    props.secondary
      ? props => props.theme.secondaryBackground
      : props => props.theme.primaryBackground};
  color: #fff;
  padding: 10px 15px;
  font-size: ${props => {
    if (props.big) return "20px";
    return "16px";
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  border: 1px solid
    ${props =>
      props.secondary
        ? props => props.theme.secondaryBackground
        : props => props.theme.primaryBackground};

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: transparent;
        a {
          color: ${({ theme }) => theme.primaryColor}!important;
        }
      `
    );
  }}
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColor};
    transition: color 0.25s ease-in-out;
  }
`;

const Button = ({ secondary, big, inverse, loading, children, ...props }) => {
  return (
    <StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
      {loading ? <Loader small white /> : children}
    </StyledButton>
  );
};

export default Button;
