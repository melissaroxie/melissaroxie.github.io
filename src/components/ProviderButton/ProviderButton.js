import React from "react";
import styled, { css } from "styled-components";
import { button, color, font, padding } from "../../global/constants";

const ProviderButton = props => {
  return (
    <Button {...props} label={props.text} role="button">{props.text}</Button>
  )
};

const Button = styled.a`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  font-family: inherit;
  cursor: pointer;
  user-select: none;
  border: none;
  text-decoration: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  background-image: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out;
  border-radius: 4px;
  font-weight: 600;
  font-size: ${font.size.small};
  padding-left: ${button.size.medium};
  padding-right: ${button.size.medium};
  line-height: calc(${button.size.medium} * 2 + 1px);
  color: white;
  background-color: #e7e7e7;
  border: 1px solid #ccc;
  fill: white;
  text-align: center;

  &:hover {
    text-decoration: none;
  }

  ${props => props.google && css`
    background-color: #de3c38;
    border-color: #de3c38;
  `}
  ${props => props.yahoo && css`
    background-color: #a62aff;
    border-color: #a62aff;
  `}
  ${props => props.outlook && css`
    background-color: #0072ff;
    border-color: #0072ff;
  `}
  ${props => props.aol && css`
    background-color: black;
    border-color: black;
  `}



  ${props => props.full && css`
    display: block;
    width: 100%;
  `}

  ${props => props.soft && css`
    border-radius: 50px;
  `}

  ${props => props.mb10 && css`
    margin-bottom: 10px;
  `}
`

export default ProviderButton
