import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {useRef} from "react";
function GetInTouch() {
  const [formData, setFormData] = useState({name: "", email: "", subject: "", message: ""})
  const form = useRef();
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => {return {...prev, [name]: value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, }
    const data = {

    }
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <i className="fa-solid fa-envelope"></i>SEND MESSAGE
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
