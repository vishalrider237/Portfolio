import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context";
const Contact =()=>{
    
    const formRef=useRef();
    const [done,setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const handleSubmit =(e)=>{
               e.preventDefault();
               emailjs.sendForm('service_zxb7pxf', 'template_lxp9uem', formRef.current, 'tNyVwZxmH_A2LYhWy')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    };
    
    return <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-title">My Contact</h1>
                      
                  
                  <div className="c-info">
                      <div className="c-info-item">
                             <img 
                             src={Phone}
                             alt=""
                             className="c-icon"></img>
                             +91-8000267469
                      </div>
                      <div className="c-info-item">
                             <img 
                             src={Email}
                             alt=""
                             className="c-icon"></img>
                             vishalpandey10022000@gmail.com
                      </div>
                      <div className="c-info-item">
                             <img 
                             src={Address}
                             alt=""
                             className="c-icon"></img>
                             vill+post-Raghunathpur dist-Buxar Bihar pin-802134
                      </div>
                      <div className="c-info-item">
                      <img
                             src={Github}
                             alt=""
                             className="c-icon" ></img>
                            <a href="https://github.com/vishalrider237" className="link">GitHub</a>
                      </div>
                      <div className="c-info-item">
                      <img
                             src={Linkedin}
                             alt=""
                             className="c-icon" ></img>
                            <a href="https://www.linkedin.com/in/vishal-pandey-03041b1b7/" className="link">Connect With Me</a>
                      </div>
                  </div>
              </div>
              <div className="c-right">
              <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
             freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
            <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
            {done && "Thanku..."}
          </form>
          
            </div>
            
          </div>
    </div>
}
export default Contact;