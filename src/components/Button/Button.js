import React from "react";
import styled, { css } from "styled-components";
import { button, color, font, padding } from "../../global/constants";

const Button = props => {
  const buttonType = props.href ? "a" : "button"

  const ButtonVarient = styled(buttonType)`
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
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border 0.2s ease-in-out;

    border-radius: 4px;
    font-weight: 600;
    font-size: ${font.size.small};
    padding-left: ${button.size.medium};
    padding-right: ${button.size.medium};
    line-height: calc(${button.size.medium} * 2 + 1px);
    color: ${color.gray};
    background-color: #e7e7e7;
    border: 1px solid #ccc;
    fill: ${color.gray};
    text-align: center;

    &:hover {
      text-decoration: none;
    }

    ${props => props.link && css`
      border: 0;
      background-color: transparent;
      border-radius: 0;
    `} 
      
    ${props => props.primary && css`
      border-color: ${props => (props.link ? "transparent" : color.blue)};
      background-color: ${props => props.link ? "transparent" : color.blue};
      color: ${props => (props.link ? color.blue : "white")};
      fill: white;
    `} 

    ${props => props.success && css`
      border-color: ${props => (props.link ? "transparent" : color.green)};
      background-color: ${props => props.link ? "transparent" : color.green};
      color: ${props => (props.link ? color.green : "white")};
      fill: white;
    `}

    ${props => props.small && css`
      padding-left: ${button.size.small};
      padding-right: ${button.size.small};
      line-height: calc(${button.size.small} * 2 + 1px);
    `} 
    
    ${props => props.large && css`
      padding-left: ${button.size.large};
      padding-right: ${button.size.large};
      line-height: calc(${button.size.large} * 2 + 1px);
    `};

    ${props => props.soft && css`
      border-radius: 4px;
    `};

    ${props => props.full && css`
      display: block;
      width: 100%;
    `};

    ${props => props.wrap && css`
      white-space: normal;
      line-height: 1.4;
    `};

    ${props => props.i && css`
      font-style: italic;
    `};

    ${props => props.pr2 && css`
      padding-right: ${padding.small};
    `};
    
    ${props => props.pl0 && css`
      padding-left: 0;
    `};
  `;
  return <ButtonVarient {...props}>{props.children}</ButtonVarient>;
};

export default Button;
