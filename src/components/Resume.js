// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
  return (
    <div>
      <div>
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "public/Zekun Chen Resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download A Copy</span>
        </a>
      </div>
      <br></br>
      <br></br>
      <div>
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>JSON</li>
            <li>React, Jquery</li>
            <li>Git</li>
            
        </ul>
      </div>
    </div>
  );
}

export default Resume;
