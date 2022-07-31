// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer with a background in Finance</p>
      <hr />
      <img className="my-pic" src={'https://raw.githubusercontent.com/XyzExia/Profolio-Page-React/main/public/Assets/Profile.jpg'} alt="Pic"/>
      <br></br>
 <br></br>
      <br></br>
      <p className="content">
      Welcome to my Portfolio page where I can showcase some of the fun projects and things that I have been working on.

      </p>
      <div>

<div class="row">
<div class="col-sm-6">
 <div class="card">
   <div class="card-body">
     <h5 class="card-title"  >About Me</h5>
     <p class="card-text">
       Hey My name is Zekun, I am currently a credit assessor at westpac, working in Credit.
       But I have always had a interest in Tech and this page is a demonstration of my steps into web coding 
     </p>
   </div>
 </div>
</div> 
<div class="col-sm-6">
 <div class="card">
   <div class="card-body">
     <h5 class="card-title">My Links </h5>
     <p class="card-text">
       See below for some of my contact links. 
     </p>
     <div class="icon-bar">
     <a href="https://www.linkedin.com/in/zekun-chen-07a289178/" target="_blank" rel="noreferrer">
           <img src="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-linkedin-social-media-justicon-flat-justicon.png"
               alt="linkedin-icon"></img></a>

     <a href="https://github.com/XyzExia" target="_blank" rel="noreferrer">
           <img src="https://img.icons8.com/color/45/000000/github--v3.png"
               alt="github-icon"></img></a>


     <a href="thezechaos@gmail.com" target="_blank" rel="noreferrer">
           <img src="https://img.icons8.com/external-justicon-flat-justicon/45/000000/external-email-notifications-justicon-flat-justicon.png"
               alt="email-icon"></img></a>

 </div>
</div>
</div>


</div>
</div>
</div>
    </div>
    
  );
}

export default About;
