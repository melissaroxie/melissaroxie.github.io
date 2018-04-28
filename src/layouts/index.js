import React from "react";

const TemplateWrapper = ({ children }) => (
  <div>
    <main role="main">{children()}</main>
  </div>
);

export default TemplateWrapper;
