import React from "react";
import Logo from "../Logo";
import Section from "../Section";
import Wrapper from "../Wrapper";
import Nav from "../Nav";
import data from "./data";

const Header = props => (
  <header role="banner">
    <Section small>
      <Wrapper full>
        <Logo fl />
        <Nav
          navData={data}
          placement="Header"
          fr
        />
      </Wrapper>
    </Section>
  </header>
);

export default Header;
