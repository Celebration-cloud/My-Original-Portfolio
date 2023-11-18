import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useRef} from "react";
function GetInTouch() {
  const [formData, setFormData] = useState({name: "", email: "", subject: "", message: ""})
  const [fail, setFail] = useState("")
  const [message, setMessage] = useState('SEND MESSAGE')
  const form = useRef();
  let loading = 'SEND MESSAGE'
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => {return {...prev, [name]: value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    loading = 'SENDING...'
    setMessage('SENDING...')
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
        () => {
          loading = 'MESSAGE SENT'
          setMessage("MESSAGE SENT");
          setTimeout(() => {
            loading = 'SEND MESSAGE'
            setMessage("SEND MESSAGE");
          }, 1000);
          
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
          {fail && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                {fail}
              </Alert>
            </Stack>
          )}
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
          />
          {!formData.name.length < 0 && <span>invalid name</span>}
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
          <br />
          <br />
          <button>
            <i className="fa-solid fa-envelope"></i>
            {me}
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
