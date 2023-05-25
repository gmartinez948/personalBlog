import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button, Radio, Space, Divider } from "antd";
import "../App.css";
import { Alert } from "antd";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailAlert, setEmailAlert] = useState(false);

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (form.current && SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result: any) => {
          setEmailAlert(true);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(27, 27, 27, 27)" }}>
      <form className="Form-Container" ref={form} onSubmit={sendEmail}>
        <h1>Send Me a Message</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <motion.button
          className="Button"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <input className="input button" type="submit" value="Send" />
        </motion.button>
        {emailAlert && (
          <Alert
            style={{ paddingRight: "10%" }}
            message="Thank you for your message!"
            type="success"
          />
        )}
      </form>
    </div>
  );
};

export default ContactMe;
