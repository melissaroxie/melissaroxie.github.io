import React from "react";
import styled, { css } from "styled-components";
import Button from "../Button";
import { color } from "../../global/constants";

const Navigation = styled.nav`
  ${props => props.fr && css`
    float: right;
  `}
`;
const NavItem = styled.div`
  ${props => props.dib && css`
    display: inline-block;
  `};
`;

const Nav = props => (
  <Navigation role="menubar" {...props}>
    {props.navData.map(button => (
      <NavItem key={button.name} placement={props.placement} role="none" dib>
        <Button
          to={button.to}
          href={button.href}
          link={button.link}
          rel={button.rel}
          alt={button.name}
          soft={button.soft}
          primary={button.primary}
          small={button.small}
          tertiary={button.tertiary}
          aria-label="menuitem"
          data-track="Button Clicked"
          data-track-value={button.name}
          data-track-location={props.placement}
        >
          {button.name}
        </Button>
      </NavItem>
    ))}
  </Navigation>
);

export default Nav;
