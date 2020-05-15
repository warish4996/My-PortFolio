import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import './projects.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // toggleCategories() {

  //   if(this.state.activeTab === 0){
  //     return(
  //       <div className="projects-grid">
  //         {/* Project 1 */}
  //         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  //           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
  //           <CardText>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  //           </CardText>
  //           <CardActions border>
  //             <Button colored>GitHub</Button>
  //             <Button colored>CodePen</Button>
  //             <Button colored>Live Demo</Button>
  //           </CardActions>
  //           <CardMenu style={{color: '#fff'}}>
  //             <IconButton name="share" />
  //           </CardMenu>
  //         </Card>

  //         {/* Project 2 */}
  //         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  //           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
  //           <CardText>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  //           </CardText>
  //           <CardActions border>
  //             <Button colored>GitHub</Button>
  //             <Button colored>CodePen</Button>
  //             <Button colored>Live Demo</Button>
  //           </CardActions>
  //           <CardMenu style={{color: '#fff'}}>
  //             <IconButton name="share" />
  //           </CardMenu>
  //         </Card>

  //         {/* Project 3 */}
  //         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  //           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
  //           <CardText>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  //           </CardText>
  //           <CardActions border>
  //             <Button colored>GitHub</Button>
  //             <Button colored>CodePen</Button>
  //             <Button colored>Live Demo</Button>
  //           </CardActions>
  //           <CardMenu style={{color: '#fff'}}>
  //             <IconButton name="share" />
  //           </CardMenu>
  //         </Card>
  //       </div>


  //     )
  //   } else if(this.state.activeTab === 1) {
  //     return (
  //       <div><h1>This is Angular</h1></div>
  //     )
  //   } else if(this.state.activeTab === 2) {
  //     return (
  //       <div><h1>This is VueJS</h1></div>
  //     )
  //   } else if(this.state.activeTab === 3) {
  //     return (
  //       <div><h1>This is MongoDB</h1></div>
  //     )
  //   }

  // }



  render() {
    return(
      <div className="Project">
        <h2>PROJECT</h2>
        <div className="line2"/>
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid> */}
 <div className="projects-grid">
           {/* Project 1 */}
         {/* <Card shadow={5} style={{minWidth: '450', marginTop: '5rem'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
           <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
           </CardText>
           <CardActions border>
             <Button colored>GitHub</Button>
             <Button colored>CodePen</Button>
             <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card> */}

         {/* Project 2 */}
         <div className="projects"/>
         <Card shadow={5} style={{ marginTop: '2rem',marginLeft:"2rem",marginRight:"2rem"}} className='mdl-card1'>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg) center / cover'}} >Burger Builder</CardTitle>
           <CardText>
            This is Burger Builder website which can be use to place burger order as customer specification,Build on React,CSS,JSX,React-router,firebase,etc..
           </CardText>
           <CardActions border>
             <Button  colored><a href="https://github.com/warish4996/Burger-builder" style={{textDecoration:"none"}}>GitHub</a></Button>
             {/* <Button colored><a href="https://react-burger-347be.firebaseapp.com/" style={{textDecoration:"none"}}>Live Demo</a></Button> */}
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
           </CardMenu>
         </Card>

         {/* Project 3 */}
         <Card shadow={5} style={{marginTop: '2rem',marginLeft:"2rem",marginRight:"2rem"}} className='mdl-card1'>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.beach.com/wp-content/uploads/2018/12/The-Royal-Play-del-Carmen_07-1170x600.jpg) center / cover'}} >Resort</CardTitle>
           <CardText>
             This Resort booking website where customer can book Resort according customer need,Build on React,CSS,JSX,React-router,etc..
           </CardText>
           <CardActions border>
             <Button colored><a href="https://github.com/warish4996/react-beach-resort" style={{textDecoration:"none"}}>GitHub</a></Button>
             <Button colored><a href="https://react-beach-resort-yup.netlify.com/" style={{textDecoration:"none"}}>Live Demo</a></Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
           </CardMenu>
         </Card>
         </div>
         <div/>
       </div> 
    )
  }
}

export default Projects;
