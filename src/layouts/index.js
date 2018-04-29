import React from "react";
import Link from "gatsby-link"

const TemplateWrapper = ({ children }) => (
  <div className="ph3 ph4-m ph5-l">
    <div className="mw9 center relative">
      <nav className="db dt-l w-100 border-box pa3 pt3 pt4-l">
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link className="avenir link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/" title="Home">Home</Link>
          <Link className="avenir link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/portfolio" title="Portfolio">Portfolio</Link>
          <a className="avenir link dim dark-gray f6 f5-l dib" href="mailto:melissa@melissacalamia.com" title="Contact">Contact</a>
        </div>
      </nav>
    </div>
    <main role="main">{children()}</main>
  </div>
);

export default TemplateWrapper;
