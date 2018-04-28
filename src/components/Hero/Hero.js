import React from "react";
import styled, { css } from "styled-components";

const HeroStyled = styled.div`
  width: 100%;
  ${props => props.full && css`
    height: 90vh;
    margin-bottom: 100px;
    min-height: 600px;
  `}
  ${props => props.center && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Hero = props => <HeroStyled {...props}>{props.children}</HeroStyled>;

export default Hero;
