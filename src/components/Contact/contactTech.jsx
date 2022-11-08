import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";


function ContactTech() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);


  const notify = (state) => {
    state === "success"
      ? NotificationManager.success("", "message sent", 1700, () => {})
      : NotificationManager.error("", "message not sent", 1700, () => {});
  };

  function check(eve) {
    // const nmeExp = /^([a-z]|[A-Z]){4,15}$/;
    const nmeExp = /([a-zA-Z]{3,15})+/
    const phnExp = /^(010|011|012|015)[0-9]{8}$/;

    if (eve.target.name === "user_name") {
      if (nmeExp.test(eve.target.value)) {
        eve.target.style.border = "2px solid green";
        setNameCheck(true);
      } else {
        eve.target.style.border = "2px solid red";
        setNameCheck(false);
      }
    } else if (eve.target.name === "phone_number") {
      if (phnExp.test(eve.target.value)) {
        eve.target.style.border = "2px solid green";
        setPhoneCheck(true);
      } else {
        eve.target.style.border = "2px solid red";
        setPhoneCheck(false);
      }
    }

    //   const phnExp = /^(010|011|012|015)[0-9]{8}$/;

    //   if(nmeExp.test(name) && phnExp.test(phone))
    //       return true;
    //   else
    //       return false;
  }

  const clear = (e) => {
    e.preventDefault()
    document.getElementById("name1").value = null;
    document.getElementById("phone1").value = null;
    document.getElementById("message1").value = null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
   if(nameCheck && phoneCheck && document.getElementById("name1").value!=="" &&  document.getElementById("phone1").value!=="")
   {
    setLoading(true);
    emailjs
      .sendForm(
        "service_vg00od9",
        "template_df609bk",
        form.current,
        "QaFtbp2lXayO2eJSb"
      )
      .then(
        (result) => {
          setLoading(false);
      setTimeout(function(){
        window.location.href = "/";
      },2000)

          notify("success");
        },
        (error) => {
          setLoading(false);
          alert(error.text);
          notify("error");
        }
      )
   }
   else{
    notify("error")
   }
  };

  return (
    <div className="contact row gx-0">
      <div className="col-1"></div>
      <div className="col-9 detailesBody">
        <div className="row">
          <div className="col-md-5">
            <FontAwesomeIcon className="icon-brand" icon={faHeadset} />
            <h1>Technical _Support</h1>
          </div>
          <div className="col-md-7 bord">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name1" className="form-label">
                  Enter your name
                </label>
                <input
                  onChange={(event) => check(event)}
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone1" className="form-label">
                  Phone number 
                </label>
                <input
                onChange={(event) => check(event)}
                  name="phone_number"
                  type="number"
                  className="form-control"
                  id="phone1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  problem 
                </label>
                <div className="form-outline">
                  <input
                    readOnly
                    value={
                      "Technical Support"
                    }
                    className="form-control text-dark"
                    name="problem"
                  ></input>
                </div>
              </div>
              <div className="form-outline mb-4">
                <label htmlFor="message1" className="form-label">
                  Message problem 
                </label>
                <textarea
                  className="form-control text-dark"
                  name="message"
                  id="message1"
                  rows="4"
                ></textarea>
              </div>
              <button className="btn btn-primary me-2 mt-2" type="submit" value="Send">
                {loading ? <i className="spinner-border icon"></i> : "Send"}
              </button>
              <button className="btn btn-warning me-2 mt-2" onClick={(e)=>clear(e)}>clear data</button>
              <a href='https://api.whatsapp.com/send/?phone=%2B201026166266&text&type=phone_number&app_absent=0' className="btn btn-success btn-md mt-2">technical what'sapp <FontAwesomeIcon className="detaileIcon" icon={faWhatsapp} /></a>
            </form>
            
            <NotificationContainer />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTech;
