import React from "react";
import Isvg from "react-inlinesvg";
import styled, { css } from "styled-components";
import ButtonAndroid from "./androidButton.svg";
import ButtonApple from "./appleButton.svg";
import HideText from "../HideText";
import { margin } from ".././../global/constants"

const Wrapper = styled.a`
  display: inline-block;
  svg {
    height: 48px;
    width: auto;

    ${props =>
      props.small &&
      css`
        height: 40px;
      `};
  }
  ${props => props.ml1 && css`
    margin-left: ${margin.smallest}
  `};
  ${props => props.mr1 && css`
    margin-right: ${margin.smallest}
  `};
  ${props => props.mt1 && css`
    margin-top: ${margin.smallest}
  `};
`;

const AppButton = props => (
  <Wrapper {...props}>
    <Isvg src={props.android ? ButtonAndroid : ButtonApple} />
    <HideText>{props.android ? "Download on the Play Store" : "Download on the App Store"}</HideText>
  </Wrapper>
);

export default AppButton;
