import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
import "./landing.css"
import {FaLinkedin}from "react-icons/fa"
import {IoLogoGithub,IoLogoFacebook} from "react-icons/io"


class Landing extends Component {

 
  render() {
    return(
      <div className=" landing-grid">
      <div className="css-typing">
  <p>
    MY NAME IS WARISH
  </p>
  <p>
    I'M A WEB DEVELOPER
  </p>
  <p>
    I DESIGN RESPONSIVE WEBSITE
  </p>
  

</div>
<div className="ele">
<p>
    CSS|HTML|JAVASCRIPT|REACT|BOOTSTRAP
  </p>
</div >
<div className="row">
  <section>
<a href="https://www.linkedin.com/in/warish-ali-9a3193196/" style={{textDecoration:"none"}}><FaLinkedin className="link"/></a>
</section>
<section>
<a href="https://github.com/warish4996" style={{textDecoration:"none"}}><IoLogoGithub className="link"/></a>
</section>
<section>
<a href="https://www.facebook.com/warishaliw" style={{textDecoration:"none"}}><IoLogoFacebook className="link"/></a>
</section>
</div>
</div>



//       <div style={{width: '10rem', margin: "10%"}}>
//         <Grid className="landing-grid">
//           <Cell col={12}>
//             {/* <img
//               src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
//               alt="avatar"
//               className="avatar-img" */}
//               />

//             <div className="banner-text">
//               <h1>Full Stack Web Developer</h1>

//             <hr/>

//           <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

//         <div className="social-links">

//           {/* LinkedIn */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-linkedin-square" aria-hidden="true" />
//           </a>

//           {/* Github */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-github-square" aria-hidden="true" />
//           </a>

//           {/* Freecodecamp */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-free-code-camp" aria-hidden="true" />
//           </a>

//           {/* Youtube */}
//           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//             <i className="fa fa-youtube-square" aria-hidden="true" />
//           </a>

//         </div>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
    )   }
}

export default Landing;
