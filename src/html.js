import React from "react";
import favicon from "../static/favicon/apple-icon.png";
import config from "../data/SiteConfig";

module.exports = class HTML extends React.Component {
  render() {
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8" />
          <link href="//fonts.googleapis.com" rel="dns-prefetch" />
          <meta content="True" name="HandheldFriendly" />
          <meta content="320" name="MobileOptimized" />
          <meta content="white" name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
            name="viewport"
          />
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:title" content={config.ogTitle} />
          <meta property="og:image" content={config.ogImageFacebook} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:description"
            content={config.ogDescriptionFacebook}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@melissaroxie" />
          <meta name="twitter:creator" content="@melissaroxie" />
          <meta name="twitter:title" content={config.siteTitle} />
          <meta
            name="twitter:description"
            content={config.ogDescriptionTwitter}
          />
          <meta name="twitter:image" content={config.ogImageTwitter} />
          <meta content="on" httpEquiv="cleartype" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css" />
          {this.props.headComponents}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
