import React from "react";
import Link from "gatsby-link"
import { StickyContainer, Sticky } from "react-sticky"
import styled from  "styled-components"

const TemplateWrapper = ({ children }) => (
  <div className="ph3 ph4-m ph5-l db">
    <StickyContainer>
      <Sticky topOffset={600}>
        {({ style }) => (
          <HeaderWrapper style={style} className="relative">  
            <div className="mw9 center relative cf pv3 mt1">
              <div className="fl">
                <span className="f4 lh-solid avenir ttu tracked fw1 black-70">Melissa Calamia</span>
              </div>
              <nav className="fr">
                <Link className="avenir link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/" title="About">About</Link>
                <Link className="avenir link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/portfolio" title="Portfolio">Portfolio</Link>
                <Link className="avenir link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/resume" title="Resume">Resume</Link>
                <a className="avenir link dim dark-gray f6 f5-l dib" href="mailto:melissa@melissacalamia.com" title="Contact">Contact</a>
              </nav>
            </div>
          </HeaderWrapper>
        )}
      </Sticky>
      <main role="main">{children()}</main>
    </StickyContainer>
  </div>
);

const HeaderWrapper = styled.header`
  z-index: 90;
  background-color: white;
`

export default TemplateWrapper;
