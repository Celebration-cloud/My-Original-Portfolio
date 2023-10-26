import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {useRef} from "react";
function GetInTouch() {
  const [formData, setFormData] = useState({name: "", email: "", subject: "", message: ""})
  const [fail, setFail] = useState("")
  const form = useRef();
  let loading = 'SEND MESSAGE'
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => {return {...prev, [name]: value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loading = 'SENDING...'
    const {name, email, subject, message} = formData
    const data = {
      name,
      email,
      subject,
      message
    }
    emailjs
      .sendForm(
        "service_40zo4or",
        "template_qo99jig",
        form.current,
        "MCvMO3cKm3abSp_xT"
      )
      .then(
        (res) => {
          loading = 'SEND SENT'
          setTimeout(() => {
            loading = 'SEND MESSAGE'
          }, 3000);
          
        },
        (error) => {
          setFail(error.text)
          console.log(error.text);
        }
      );
    console.log(data)
    setFormData({ name: "", email: "", subject: "", message: "" });
  }
  return (
    <>
      <div className="inTouch col-md-8">
        <h5>Get In Touch With Us</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          tempora animi voluptas quo nobis, maiores saepe velit obcaecati eum
          odit minima! Nesciunt omnis praesentium ut est laudantium blanditiis
          nobis quaerat.
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          {fail && }
          <label htmlFor="name">
            <b>Name*</b>
          </label>
          &nbsp;&nbsp;
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
          />{!formData.name.length < 0 && <span>invalid name</span>}
          <br />
          <label htmlFor="email">
            <b>Email Address* &nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <label htmlFor="subject">
            <b>Subject&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="mess"
            required
          />
          <label htmlFor="message">
            <b>Message*&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="message"
              name="message"
              type="text"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              multiline
              rows={4}
              required
            />
          </Box>
          <br />
          <br />
          <button>
            <i className="fa-solid fa-envelope"></i>{loading}
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
