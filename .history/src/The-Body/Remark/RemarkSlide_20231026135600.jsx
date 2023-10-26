
function RemarkSlide() {
  return (
    <di>
      <div className="inner carousel-inner">
        <div className="countUp carousel-item active">
          <i className="fa-solid fa-rocket fa-3x"></i>
          <h4>Projects Achieved</h4>
          <h2 className="number">100</h2>
        </div>
        <div className="countUp carousel-item">
          <i className="fa-solid fa-trophy fa-3x"></i>
          <h4>Award win</h4>
          <h2 className="number">100</h2>
        </div>
        <div className="countUp carousel-item">
          <i className="fa-solid fa-briefcase fa-3x"></i>
          <h4>Trusted Clients</h4>
          <h2 className="number">120</h2>
        </div>
        <div className="countUp carousel-item">
          <i className="fa-solid fa-thumbs-up fa-3x"></i>
          <h4>FaceBook Likes</h4>
          <h2 className="number">1300</h2>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </di>
  );
}

export default RemarkSlide
