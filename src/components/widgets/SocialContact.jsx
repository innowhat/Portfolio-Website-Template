import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../context/LanguageContext";

const SocialNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  /* padding: 0 1rem; */
  @media (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialNavItems = styled.div`
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

const SocialContact = () => {
  const { appData } = useContext(LanguageContext);

  const componentData = appData.others.about;
  const socialLinkList = componentData.aboutSocial.map(socialLink => (
    <li key={socialLink.name}>
      <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
        <img
          src={socialLink.icon}
          alt={socialLink.name}
          style={{ width: "50px" }}
        />
      </a>
    </li>
  ));

  return (
    <SocialNav>
      <SocialNavItems>
        <ul>{socialLinkList}</ul>
      </SocialNavItems>
    </SocialNav>
  );
};

export default SocialContact;
