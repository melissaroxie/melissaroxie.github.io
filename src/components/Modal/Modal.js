import React, { Component } from "react";
import styled, { css } from "styled-components";

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
  max-width: 800px;
  z-index: 2;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05), 0 0px 50px 0px rgba(0, 0, 0, 0.1);

  ${props => props.small && css`
    max-width: 340px;
  `}

  img {
    width: 100%;
    min-width: 100%;
    max-width: auto;
  }
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
            {/*
            <Header>
              <Close>
                <button
                  tabIndex="0"
                  onClick={closeModal}
                  aria-label="close"
                >
                  Close
                </button>
              </Close>
            </Header>
            */}

            <div>{children}</div>
          </ModalWrapper>
        </div>
        <CloseBackground
          onClick={closeModal}
          aria-label="close"
        />
      </Mask>
    ) : null;
  }
}

export default Modal;
