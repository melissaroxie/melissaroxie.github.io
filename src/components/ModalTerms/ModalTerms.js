import React from "react";
import Modal from "../Modal";
import Type from "../Type";
import Button from "../Button"
import ButtonGroup from "../ButtonGroup"

const modalTitle = "What We Do With Your Data";

const ModalTerms = props => (
  <Modal
    title="Terms of Service & Privacy Policy"
    isActive={props.isActive}
    closeModal={props.closeModal}
    small
  >
    <Type varient="p" lh_copy gray tc>
      By pressing <strong>"I Agree"</strong> you agree to our <a href="https://unroll.me/legal/terms">Terms of Service</a> and <a href="https://unroll.me/legal/privacy">Privacy Policy</a>.
    </Type>
    <ButtonGroup>
      <Button onClick={props.closeModal} link>Cancel</Button>
      <Button
        href={`https://unroll.me/a/provider-auth-redirect?provider=${props.provider}`}
        onClick={props.onButtonClick}
        success
      >
        I Agree
      </Button>
    </ButtonGroup>
  </Modal>
);

export default ModalTerms;
