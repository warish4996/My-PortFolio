import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import AboutMe from './aboutme/aboutme';
import Contact from './contact/contact';
import Projects from './project/projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
