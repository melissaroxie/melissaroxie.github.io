import React from "react"
import Wrapper from "../Wrapper"
import Section from "../Section"
import Hero from "../Hero"
import Type from "../Type"
import Button from "../Button"
import Icon from "../Icon"
import ProviderButton from "../ProviderButton"
import { icon } from "../../global/constants"

const Original = props => (
  <Hero full center>
    <Section>
      <Wrapper tc small>
        <Type varient="h1" f1 grayDark m0 lh_copy>
          Clean up your inbox
        </Type>
        <Type varient="h2" f5 mb3 gray fw4 lh_copy>
          Instantly see a list of all your subscription emails.
          Unsubscribe easily from whatever you don&#39;t want.
        </Type>
        
        <Button
          href="https://unroll.me/a/signup"
          onClick={props.onButtonClick}
          alt="Signup"
          data-track="Button Clicked"
          data-track-value="Get Started Now"
          data-track-location="Hero"
          data-track-varient="Desktop"
          large
          primary
          soft
          pr2
        >
          Get Started Now
          <Icon type={icon.right} size={24} ml2 />
        </Button>
        
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

export default Original