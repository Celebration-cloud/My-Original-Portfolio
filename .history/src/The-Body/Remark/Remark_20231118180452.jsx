import RemarkSlide from './RemarkSlide';
import remarkImg from "../../../public/download.jpeg";
import './Remark.css'
function Remark() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="remarkImg carousel slide"
        data-bs-ride="carousel"
      >
        <img
          src={remarkImg}
          className=" remImg w-100"
          alt=""
        />
        <RemarkSlide/>
      </div>
    </>
  );
}

export default Remark
