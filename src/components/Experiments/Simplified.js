import React from "react"
import Wrapper from "../Wrapper"
import Section from "../Section"
import Hero from "../Hero"
import Type from "../Type"
import Button from "../Button"
import ProviderButton from "../ProviderButton"

const Simplified = props => (
  <Hero full center>
    <Section large>
      <Wrapper tc w800>
        <Type varient="h1" f1 grayDark m0 lh_copy>Clean up your inbox</Type>
        <Type varient="h2" f5 mb3 gray fw4 lh_copy>Instantly see a list of all your subscription emails. Unsubscribe easily from whatever you don't want.</Type>
        <Wrapper w380>
          <ProviderButton
            onClick={props.handleTermsModal.bind(null, "GOOGLE")}
            text="Clean my Gmail account"
            google
            full
            mb10
            soft
          />
          <ProviderButton
            onClick={props.handleTermsModal.bind(null, "YAHOO")}
            text="Clean my Yahoo account"
            yahoo
            full
            mb10
            soft
          />
          <ProviderButton
            onClick={props.handleTermsModal.bind(null, "OUTLOOK")}
            text="Clean my Outlook, Hotmail & Live"
            outlook
            full
            mb10
            soft
          />
          <ProviderButton
            onClick={props.handleTermsModal.bind(null, "AOL")}
            text="Clean my AOL account"
            aol
            full
            mb10
            soft
          />
        </Wrapper>
        <Type varient="p">
          <Button
            onClick={props.handleDataModal}
            alt="See how we keep it free"
            data-track="Button Clicked"
            data-track-value="See how we keep it free"
            data-track-location="Hero"
            link
            primary
            wrap="true"
            i
          >
            Why we don't charge you for this amazing service.
          </Button>
        </Type>
      </Wrapper>
    </Section>
  </Hero>  
)

export default Simplified