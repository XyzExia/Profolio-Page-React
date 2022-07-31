//Reference the Project.js to pull each JS file.

import React from "react";

function Portfolio() {
  return (
    <div>

<div class="w3-content w3-padding">

  <div class="w3-container w3-padding-32" id="projects">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
  </div>

  <div class="w3-row-padding">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class=" w3-black w3-padding">Dayplan</div>
        <a href="https://xyzexia.github.io/Homework-Week-5/"> 
        <img src={process.env.PUBLIC_URL + "https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/Dayplan.PNG"} alt="House"></img>
        </a>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-black w3-padding">  README Generator </div>
        <a href="https://github.com/XyzExia/README-Generator"> 
        <img src={process.env.PUBLIC_URL + "https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/NODEJS readme.PNG"} alt="House"></img>
        </a>
      </div>
    </div>

    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class=" w3-black w3-padding">Team-profile-generator</div>
        <a href="https://github.com/XyzExia/Team-profile-generator">
        <img src={process.env.PUBLIC_URL + "https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/example 1.png"} alt="House"></img>
        </a>
      </div>
    </div>
  </div>

  <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Group Projects</h3>

  <div class="w3-row-padding">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <a href="https://github.com/Gkal14/MoviDex"> 
        <div class=" w3-black w3-padding">MovieDex group project</div>
        <img src={process.env.PUBLIC_URL + "https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/Project 1.PNG"} alt="House"></img>
        </a>
        <div>
          <a href="https://gkal14.github.io/MoviDex/"> live link</a>
        </div>
      </div>
    </div>

    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class=" w3-black w3-padding">RPG-journey-Gamee</div>
        <a href="https://github.com/louieiply/RPG-journey-Game"> 
        <img src={process.env.PUBLIC_URL + "https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/rpgs.png"} alt="House"></img>
        </a>
      </div>
      <div>
        <a href="https://rpg-game-lpanz.herokuapp.com/"> live link</a>
      </div>
    </div>

  </div>

</div>
</div>
  );
}

export default Portfolio;
