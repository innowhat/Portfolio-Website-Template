// Link.js
import styled from "styled-components";

const LinkButton = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  transition: color 0.25s ease-in-out;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default LinkButton;
