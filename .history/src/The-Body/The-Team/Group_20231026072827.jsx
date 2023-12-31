import './Group.css'
import profile
function Group() {
  return (
    <>
      <div className="card">
        <div className="image">
          <img
            className="pro"
            src="../../../public/WIN_20230907_17_39_13_Pro.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <a href="#">
            <span className="title">Ojingulu Celebration</span>
          </a>

          <p className="desc">Web Developer</p>

          <button className="butt">
            <a href="../../../public/Resume-Celebration-Ojingulu.pdf">
              <p className="text">Download Resume</p>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>{" "}
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>{" "}
                </svg>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Group
