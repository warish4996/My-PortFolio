import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Images from '../images/hi.jpg'
import './aboutme.css'
import images from '../images/down.pdf'
import javascript from '../images/javascript.png'
import htmlCss from '../images/html-css.jpg'
import react from '../images/React.png'
import redux from '../images/Redux.png'
import materialUi from '../images/materialUi.png'
import hooks from '../images/Hooks.png'
import Git from '../images/Git.png'


class Resume extends Component {
  render() {
    return(
      <div>
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{marginTop:'4rem'}}>
              <img 
                src={Images}
                alt="avatar"
                style={{height: '200px',borderRadius: '50px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Warish Ali</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I design ,code and modify the websites,from layout to fuction and according to client's specification and creat
              responsive website,I work on CSS|HTML|REACT|JAVASCRIPT|BOOTSTRAP </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>592K/438 Subhani Khera Telibagh Lucknow(U.P)</p>
            <h5>Phone</h5>
            <p>8960749337</p>
            <h5>Email</h5>
            <p>warishce@gmail.com</p>
            <h5>Skype</h5>
            <p>live:.cid.b22214bc1cbec307</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="SHRI RAMSWAROOP MEMORIAL UNIVERSITY"
              schoolDescription="University in Dewa road Barbanki,(U.P)"
               />

               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> */}
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'JAN/2019'}
              endYear={'May/2019'}
              jobName="Self-employed"
              jobDescription="I have 6 month of self experience. I also design some website by my self like Resort Booking
              ,Burger Builder and My portfolio and these websites perfectly working on every size of screen  using React,CSS,HTML,Bootstrap,etc.."/>

              <Experience
                startYear={'JUNE/2019'}
                endYear={'APRIL/2020'}
                jobName="e-developers world"
                jobDescription="I have also 11 months experience in e-developers world where I worked on E-cart website ,hotel managment website
                and company managment website."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Grid className="demo-grid-1">
              <Cell col={4}>
                <img style={{width:'150px'}} src={javascript} alt='javascript'/>
              </Cell>
              <Cell col={4}>
              <img style={{width:'150px',height:'112.5px'}} src={htmlCss}/>
              </Cell>
              <Cell col={4}>
              <img style={{width:'150px',height:'112.5px'}} src={react}/>
              </Cell>
              </Grid>
              <Grid className="demo-grid-1">
              <Cell col={4}>
                <img style={{width:'150px',height:'112.5px'}} src={redux}/>
              </Cell>
              <Cell col={4}>
              <img style={{width:'150px',height:'112.5px'}} src={hooks}/>
              </Cell>
              <Cell col={4}>
              <img style={{width:'150px',height:'112.5px'}} src={materialUi}/>
              </Cell>
              </Grid>
              <Grid className="demo-grid-1">
              <Cell col={4}>
                <img style={{width:'150px',height:'112.5px'}} src={Git}/>
              </Cell>
              </Grid>
          </Cell>
         
        </Grid>
        
      </div>
      <div class="button">
      <a  href={images} download="Warish CV">
        <button class="main-button">Download CV</button>
        </a>
        </div>
      </div>
    )
  }
}

export default Resume;
