import React, { Component } from 'react';
import { Card, CardTitle, Button} from 'react-mdl';
import './aboutme.css'
import images from '../images/dow.pdf'

class About extends Component {
  render() {
    return(
      <div >
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="about">
        <h1>ABOUT ME</h1>
        <div className="line"/>
       <p>
          I am a Front End Developer and UI/UX Designer. I love to design awesome websites with great user experience. I am passionate about my work and i never get bore from my work because i love what i do. I write clean, elegant and efficient code because i believe that code is written to read (by humans as well) and not just to be executed by machines. I like to learn new technologies and keep myself updated. I work on HTML, CSS, JavaScript, ReactJs, JQuery, Bootstrap, React-Native etc. Apart from this, i like to play cricket and basketball ,listen music,singing song and travelling.
        </p>
        </div>
        </div>
        <div className="cetificate">
          <h3>CERTIFICATE</h3>
          <div className="line2"/>
          <div className="card">
        <Card shadow={5} style={{marginTop: '2rem',marginLeft:"2rem",marginRight:"2rem"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://udemy-certificate.s3.amazonaws.com/image/UC-F1C3GGHJ.jpg) center / cover'}} ></CardTitle>
           <Button colored style={{backgroundColor:"#76f1d3"}}><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-F1C3GGHJ.jpg" style={{textDecoration:"none"}}>REACT</a></Button>
           </Card>

           <Card shadow={5} style={{marginTop: '2rem',marginLeft:"2rem",marginRight:"2rem"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://udemy-certificate.s3.amazonaws.com/image/UC-CLLLIB6O.jpg) center / cover'}} ></CardTitle>
           
             <Button colored style={{backgroundColor:"#76f1d3"}}><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-CLLLIB6O.jpg" style={{textDecoration:"none"}}>HTML</a></Button>
           </Card>

           <Card shadow={5} style={{marginTop: '2rem',marginLeft:"2rem",marginRight:"2rem"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://udemy-certificate.s3.amazonaws.com/image/UC-B93PN6IS.jpg) center / cover'}} ></CardTitle>
           
             <Button colored style={{backgroundColor:"#76f1d3"}}><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-B93PN6IS.jpg" style={{textDecoration:"none"}}>JAVASCRIPT</a></Button>
           </Card>
           </div>
         </div>
        <div className="button">
        <a  href={images} download="Warish CV">
        <button className="main-button">Download CV</button>
        </a>
        
        </div>
        </div>
    )
  }
}

export default About;
