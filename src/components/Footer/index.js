import React from "react";
import { FooterLayout } from "./styles";

export const Footer = () => (
  <FooterLayout className="site-footer">
    <p className="site-info">
      {new Date().getFullYear()}  |  Co-OS{" "}
    </p>
    <p>
      <a href="https://github.com/crowdwork/">
        View this on Github
      </a>
    </p>
  </FooterLayout>
);
