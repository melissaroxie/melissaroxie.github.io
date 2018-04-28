import React from "react";
import styled, { css } from "styled-components";
import { color, margin } from "../../global/constants";

const Type = props => {
  const TypeVarient = styled(props.varient)`
    ${props => props.gray && css`
      color: ${color.gray};
    `};
    ${props => props.grayDark && css`
      color: ${color.grayDark};
    `};
    ${props => props.white && css`
      color: white;
    `};

    ${props => props.lh_copy && css`
      line-height: 1.5;
    `};

    ${props => props.tc && css`
      text-align: center;
    `};
    
    ${props => props.f1 && css`
      font-size: 3rem;
    `};
    ${props => props.f2_ns  && css`
      @media screen and (min-width: 48em) {
        font-size: 2.25rem;
      }
    `};
    ${props => props.f3 && css`
      font-size: 1.5rem;
    `};
    ${props => props.f5 && css`
      font-size: 1.25rem;
    `};
    ${props => props.f6 && css`
      font-size: .875rem;
    `};

    ${props => props.fw4 && css`
      font-weight: 400;
    `};

    ${props => props.b && css`
      font-weight: bold;
    `};
    
    ${props => props.m0 && css`
      margin: 0;
    `};

    ${props => props.mb1 && css`
      margin-bottom: ${margin.smallest};
    `};

    ${props => props.mb0 && css`
      margin-bottom: 0;
    `};

    ${props => props.mb3 && css`
      margin-bottom: ${margin.medium};
    `};

    ${props => props.f1_ns && css`
      @media screen and (min-width: 48em) {
        font-size: 3rem;
      }
    `};    
  `;

  return <TypeVarient {...props}>{props.children}</TypeVarient>;
};

export default Type
