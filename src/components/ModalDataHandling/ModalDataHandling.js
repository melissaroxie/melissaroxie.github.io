import React from "react";
import Modal from "../Modal";
import Type from "../Type";
import IllustrationData from "../Images/data_illustrator.svg";

const modalTitle = "What We Do With Your Data";

const ModalDataHandling = props => (
  <Modal
    title={modalTitle}
    isActive={props.isActive}
    closeModal={props.closeModal}
  >
    <img src={IllustrationData} />
    <Type varient="p" lh_copy gray>
      We don't charge you for Unroll.Me because Slice Technologies, which owns
      Unroll.Me, measures e‑commerce through a technology that automatically
      recognizes commercial emails and extracts purchase information from them.
    </Type>
    <Type varient="p" lh_copy gray>
      Slice strips away personal information– your name, email, address,
      anything that could identify you – to build anonymized market research
      products that analyze and track consumer trends. We respect your privacy
      and don’t share your receipts, emails or any of your personal information
      with our clients as part of our business model.
    </Type>
    <Type varient="p" lh_copy gray>
      To see how Slice Intelligence uses this data, take a look at the Slice
      Intelligence{" "}
      <a
        href="https://intelligence.slice.com/blog/"
        rel="noopener"
        data-track="Button Clicked"
        data-track-value="Slice Blog"
        data-track-location={`${modalTitle} Modal`}
      >
        blog
      </a>.
    </Type>
    <Type varient="p" lh_copy gray>
      <a href="https://unroll.me/faq/#data">Learn more.</a>
    </Type>
  </Modal>
);

export default ModalDataHandling;
