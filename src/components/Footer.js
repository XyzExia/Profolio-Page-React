//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>React Portfolio page</strong> - a React site by{" "}
          <a href="https://github.com/XyzExia" target="_blank" rel="noreferrer">
            Zekun Chen
          </a>
        </p>
        <p>
        <a
            href="https://www.linkedin.com/in/zekun-chen-07a289178/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
