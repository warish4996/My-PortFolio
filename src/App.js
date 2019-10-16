import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  
  
  hideToggle=()=>{
    let selectedId =document.querySelector('.mdl-layout');
    selectedId.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div>
    <Layout>
        <Header class="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
           
           <div class="none"> 
           <Navigation >
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            </div>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/" onClick={()=>this.hideToggle()}>MyPortfolio</Link>}>
            <Navigation onClick={()=>this.hideToggle()}>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
