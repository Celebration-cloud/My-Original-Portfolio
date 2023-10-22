import './Slides.css'
function Slides() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../public/sea-minimalist-wallpaper-7680x4320_56.jpg"
              className="d-block w-100 h-100"
              alt=""
            />
            <div className="carousel-caption d-md-block">
              <h5>A Beautiful Mountain</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../public/Astronaut.jpg"
              className="d-block w-100 h-100"
              alt=""
            />
            <div className="carousel-caption d-md-block">
              <h5>A Beautiful Moon</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../public/snow-mountain-night-wallpaper-3840x2160_54.jpg"
              className="d-block w-100 h-100"
              alt=""
            />
            <div className="carousel-caption d-md-block">
              <h5>A Beautiful Landscape</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Slides
