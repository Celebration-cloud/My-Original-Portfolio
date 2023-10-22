
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
        <form action="">
          <label htmlFor="name">
            <b>Name*</b>
          </label>
          &nbsp;&nbsp;
          <input type="text" placeholder="Name" required />
          <br />
          <label htmlFor="email">
            <b>Email Address* &nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <input type="email" placeholder="Email" required />
          <br />
          <label htmlFor="email">
            <b>Subject&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <input type="text" placeholder="Subject" className="mess" required />
          <label htmlFor="email">
            <b>Message*&nbsp;</b>
          </label>
          &nbsp;&nbsp;
          <br />
          <input
            type="text"
            className="message"
            placeholder="Message..."
            name=""
            required
          />
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

export default GetInTouch
