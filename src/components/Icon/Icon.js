import React from "react";
import styled, { css } from "styled-components";
import { margin } from "../../global/constants"

const Svg = styled.svg`
  vertical-align: middle;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  path {
    fill: inherit;
  }
  ${props => props.ml2 && css`
    margin-left: ${margin.small}
  `}
`;

const Icon = props => {
  return (
    <Svg height={`${props.size}px`} viewBox="0 0 32 32" {...props}>
      <path d={props.type} />
    </Svg>
  );
};

Icon.defaultProps = {
  size: 16
};

export default Icon;
