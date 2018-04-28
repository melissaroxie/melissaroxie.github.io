import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Wrapper from "../Wrapper";
import Nav from "../Nav";
import Logo from "../Logo";
import Type from "../Type";
import data from "./data";

const Footer = () => (
  <Section tc large role="contentinfo" id="footer">
    <Wrapper small>
      <Logo />
      <Section small>
        <Nav navData={data} placement="Footer" dib />
      </Section>
      <Type varient="p" m0 f6 gray>
        © {new Date().getFullYear()}
        {" Unroll.Me Inc. All rights reserved. "}
        <a
          href="https://unroll.me/legal/terms"
          data-track="Button Clicked"
          data-track-value="Terms of service"
          data-track-location="Footer"
        >
          Terms of Service
        </a>
        {" & "}
        <a
          href="https://unroll.me/legal/privacy"
          data-track="Button Clicked"
          data-track-value="Privacy policy"
          data-track-location="Footer"
        >
          Privacy Policy
        </a>.
      </Type>
    </Wrapper>
  </Section>
);

export default Footer;
