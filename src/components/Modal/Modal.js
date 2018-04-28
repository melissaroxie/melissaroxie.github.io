import React, { Component } from "react";
import styled, { css } from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import Type from "../Type";
import { icon } from "../../global/constants";

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(62, 72, 82, 0.1);
  z-index: 9999;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`;

const CloseBackground = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  background-color: white;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  max-width: 480px;
  z-index: 2;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05), 0 0px 50px 0px rgba(0, 0, 0, 0.1);

  ${props => props.small && css`
    max-width: 340px;
  `}
`;

const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 26px;
  font-weight: 300;
  padding: 0 15px;
`;

class Modal extends Component {
  render() {
    const { children, isActive, title, closeModal, ...props } = this.props;

    return isActive ? (
      <Mask>
        <div>
          <ModalWrapper
            role="dialog"
            aria-labelledby={title}
            aria-describedby={title}
            tabIndex="-1"
            {...props}
          >
            <Header>
              <Type varient="h1" f3 lh_copy fw6 grayDark mt0>
                {title}
              </Type>
              <Close>
                <Button
                  tabIndex="0"
                  onClick={closeModal}
                  aria-label="close"
                  data-track="Button Clicked"
                  data-track-value="Close Modal"
                  data-track-location={`${title} Modal`}
                  link
                  pa2
                  lh_solid
                >
                  <Icon type={icon.close} />
                </Button>
              </Close>
            </Header>

            <div>{children}</div>
          </ModalWrapper>
        </div>
        <CloseBackground
          onClick={closeModal}
          aria-label="close"
          data-track="Button Clicked"
          data-track-value="Close Modal"
          data-track-location={`${title} Modal`}
        />
      </Mask>
    ) : null;
  }
}

export default Modal;
