import './OurSkills.css'
function OurSkill() {
  return (
    <div className="skillBody" style={{ textAlign: "left" }}>
      <h4 style={{ color: "black" }}>Our Skills</h4>
      <br />
      <div className="container">
        <div className="ourSkill row row-cols-2">
          <div className="col row-col">
            <h2 className="inMind">YOU HAVE A PROJECT IN YOUR MIND ?</h2>
            <h4>OR SIMPLY YOU WANT TO SAY HELLO ?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quam rerum magnam dolorum sapiente eaque praesentium,
              similique beatae, velit adipisci quo minima ipsam, quia placeat
              tenetur eos quisquam cumque iste!
            </p>
            <button><a #scrollspyHeading4>
              <i className="fa-solid fa-envelope"></i>CONTACT US
            </a>
              
            </button>
          </div>
          <div className="col row-col">
            <h6> Responsive Web Design</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%", backgroundColor: "black" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <h6> React.js </h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "black" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <h6>HTML & CSS</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%", backgroundColor: "black" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <h6> Bootstrap (Framework)</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "78%", backgroundColor: "black" }}
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <h6>Good Communication</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "100%", backgroundColor: "black" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <h6>Javascript</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "85%", backgroundColor: "black" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default OurSkill
