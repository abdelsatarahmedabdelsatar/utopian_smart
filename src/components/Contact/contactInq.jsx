import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useRef,useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";
import "./contact.css";
import { db } from './../../Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


function ContactInq() {

  const form = useRef();
  const {problem} = useParams();
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    db.collection("problems").where("title", "==", problem).onSnapshot((snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        console.log(message);
  },[]);


  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs.sendForm('service_vg00od9', 'template_df609bk', form.current, 'QaFtbp2lXayO2eJSb')
      .then((result) => {
       setLoading(false);
       window.location.href = "/";
      }, (error) => {
        setLoading(false);
        alert(error.text);
      });
    }


  return (
    <div className="contact row text-light gx-0">
      <div className="col-1"></div>
      <div className="col-9" style={{ paddingTop: "80px" }}>
        <div className="row">
          <div className="col-md-5">
          <FontAwesomeIcon className="icon-brand" icon={faQuestionCircle} />
            <h1 className="mt-4">_Inquiries</h1>
          </div>
          <div className="col-7 bord">
          <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your name (ادخل أسمك)
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number (رقم التليفون)
            </label>
            <input
              name="phone_number"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
               problem (المشكلة)
            </label>
            <div className="form-outline">
              <input
                readOnly
                value={(message.length > 0 ? message[0].title : "")+" (Inquiries)"}
                className="form-control text-dark"
                name="problem"
              ></input>
              </div>
          
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message problem (نص المشكلة)
            </label>
              <textarea className="form-control text-dark" name="message" id="textArea1" rows="4"></textarea>
            
            </div>
          <button
            className="btn btn-primary"
            type="submit"
            value="Send"
          >
            {loading ? <i className="spinner-border"></i>:"Send"}
          </button>
        </form>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default ContactInq;