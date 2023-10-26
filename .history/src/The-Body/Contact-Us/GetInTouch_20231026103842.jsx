import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function GetInTouch() {
  const [formData, setFormData] = useState({name: "", email: "", subject: "", message: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <b>Name*</b>
          </label>
          &nbsp;&nbsp;
          <input id="name" name="fullName" value={formData.name} type="text" placeholder="Name" required />
          <br />
          <label htmlFor="email">
            <b>Email Address* &nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <input id="email" name="email" value={form} type="email" placeholder="Email" required />
          <br />
          <label htmlFor="subject">
            <b>Subject&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <input id="subject" name="subject" type="text" placeholder="Subject" className="mess" required />
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
              placeholder="Message..."
              multiline
              rows={4}
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
