import React, { Component } from 'react';
import './contact.css'
import { FaFacebook,FaGithub,FaLinkedin,FaTelegramPlane,FaViber,FaMapMarkerAlt } from "react-icons/fa"




class Contact extends Component {
  state={
    contact:{
      name:"",
      email:"",
      subject:"",
      message:"",
      
    },
    error:null
 }

 onClickHandler=(event)=>{
   let hi= this.state.contact
   if(hi.name===""||hi.email===""||hi.subject===""||hi.message===""){
     let errormsg="PLEASE FILL ALL FIELDS"
     this.setState({error:errormsg})
     return alert("Please Fill all feilds")
   }

   //const serviceID= "123457";
  const templateId = 'template_PJM3DA2Z';
  

	this.sendFeedback(templateId,{message_html: this.state.contact.message,from_name: this.state.contact.name,subject:this.state.contact.subject ,reply_to: this.state.contact.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'warishce@gmail.com', templateId,
  	variables
  	).then(res => {
      let errormsg="Mail sent successfully"
      this.setState({error:errormsg})
  	})
  	// Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    
 
 }

 onChangeHandler=(event)=>{
  const{name,value}=event.target
  let change={...this.state.contact,[name]:value}
  this.setState({contact:change})
  }
  render() {
    return(
      <div className="contact"> 
      <div className="contact-div2">
        <h2>CONTACT INFORMATION</h2>
        <div className="line"/>
        <div className="div">
        <label ><FaMapMarkerAlt/>Address</label>
        <p>592k/438 Subhani Khera Telibagh Lucknow (U.P),India</p>
        <label><FaViber/>Phone</label>
        <p>8960749337,8318042250</p>
        <label><FaTelegramPlane />Email</label>
        <p>warishce@gmail.com</p>
        <div className="line"/>
        <div className="Crow">
        <section>
          <a href="https://www.facebook.com/warishaliw" style={{textDecoration:"none"}}><FaFacebook className="links"/></a>
          </section>

          <section>
          <a href="https://github.com/warish4996" style={{textDecoration:"none"}}><FaGithub className="links"/></a>
          
          </section>
          
          <section>
          <a href="https://www.linkedin.com/in/warish-ali-9a3193196/" style={{textDecoration:"none"}}><FaLinkedin className="links"/></a>
          </section>
          </div>
        </div>
      </div>
      <div className="contact-div">
        <h2>CONTACT</h2>
        <div className="line"/>
        <div className="contact-column">
         <p> {this.state.error}</p>
        <input className="input" name="name" placeholder="NAME" value={this.state.contact.name} onChange={this.onChangeHandler}/><br/>
        <input className="input" name="email" placeholder="EMAIL" value={this.state.contact.email} onChange={this.onChangeHandler}/><br/>
        <input className="input" name="subject" placeholder="SUBJECT" value={this.state.contact.subject} onChange={this.onChangeHandler}/><br/>
        <textarea className="textarea" name="message" placeholder="MESSAGE" value={this.state.contact.message} onChange={this.onChangeHandler}/><br/>

        </div>
        <div>
          <button className="main-button" onClick={this.onClickHandler}>Send Message</button>
        </div>
        <div className="line"/>
        <div className="Crow2">
          <section>
          <a href="https://www.facebook.com/warishaliw" style={{textDecoration:"none"}}><FaFacebook className="links"/></a>
          </section>

          <section>
          <a href="https://github.com/warish4996" style={{textDecoration:"none"}}><FaGithub className="links"/></a>
          
          </section>
          
          <section>
          <a href="https://www.linkedin.com/in/warish-ali-9a3193196/" style={{textDecoration:"none"}}><FaLinkedin className="links"/></a>
          </section>
          </div>
      </div>
     
      </div>
    )
  }
}

export default Contact;
