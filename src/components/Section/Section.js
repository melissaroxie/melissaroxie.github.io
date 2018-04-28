import styled, { css } from "styled-components";
import { padding, color } from "../../global/constants";

const Section = styled.div`
  ${props =>
    props.small &&
    css`
      padding-top: ${padding.small};
      padding-bottom: ${padding.small};
    `} ${props =>
      props.medium &&
      css`
        padding-top: ${padding.medium};
        padding-bottom: ${padding.medium};
      `} ${props =>
      props.large &&
      css`
        padding-top: ${padding.medium};
        padding-bottom: ${padding.medium};
        @media only screen and (min-width: 500px) {
          padding-top: ${padding.large};
          padding-bottom: ${padding.large};
        }
      `} ${props =>
      props.primary &&
      css`
        background-color: ${color.grayLightest};
      `} ${props =>
      props.secondary &&
      css`
        background-color: ${color.blueDark};
      `} ${props =>
      props.tertiary &&
      css`
        background-color: ${color.blue};
      `};
      ${props => props.tc && css`
      text-align: center;
    `}
    ${props => props.pb0_ns && css`
      @media only screen and (min-width: 500px) {
        padding-bottom: 0;
      }
    `}

    ${props => props.mb4 && css`
      margin-bottom: ${padding.small}
    `}
`;

export default Section;
