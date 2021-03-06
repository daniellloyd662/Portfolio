import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
//Emailjs is used to send an automatic email on form submission
//Run npm add emailjs to use these features
// See https://duckduckgo.com/?q=emailjs+react&t=brave&ia=web for react documentation from emailjs

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    //   preventDefault prevents page from refreshing on submit
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k69fhc6",
        "template_xjzeqjp",
        formRef.current, //Updated from default 'form'
        "user_J8P6PfR8nWepTrLbSCw3H"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const formElements = [...e.target.children]; //Returns all html objects within the form
    //For all html objects within the form, if a placeholder exists then clear the field
    formElements.forEach((element) => {
      element.placeholder && (element.value = "");
    });
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Get In Touch</h1>
          <div className="c-info">
            <div className="c-info-item"></div>
            <img src={Phone} alt="" className="c-icon" />
            +1 831-345-4028
          </div>
          <div className="c-info">
            <div className="c-info-item"></div>
            <img src={Email} alt="" className="c-icon" />
            daniel.lloyd.sc@gmail.com
          </div>
          <div className="c-info">
            <div className="c-info-item"></div>
            <img src={Address} alt="" className="c-icon" />
            Dallas, TX
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Are you looking for new developers?</b> Contact me. I'm always
            open to new opportunities.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <br></br>
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button>Submit</button>
            {done && "Thank you, I will reach out to you soon"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
