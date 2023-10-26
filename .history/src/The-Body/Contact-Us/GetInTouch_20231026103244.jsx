import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function GetInTouch() {
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
        <form>
          <label htmlFor="name">
            <b>Name*</b>
          </label>
          &nbsp;&nbsp;
          <input id="name" name="fullName" type="text" placeholder="Name" required />
          <br />
          <label htmlFor="email">
            <b>Email Address* &nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <input id="email" name="email" type="email" placeholder="Email" required />
          <br />
          <label htmlFor="subject">
            <b>Subject&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <input id="subject" type="text" placeholder="Subject" className="mess" required />
          <label htmlFor="email">
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
              id="outlined-textarea"
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
