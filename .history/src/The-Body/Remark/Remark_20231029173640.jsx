import RemarkSlide from './RemarkSlide';
import remarkImg from "../../../public/download.jpeg";
import './Remark.css'
function Remark() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="remarkImg carousel slide"
        data-bs-ride="carousel"
      >
        <img
          src={remarkImg}
          className=" remImg w-50"
          alt=""
        />
        <RemarkSlide/>
      </div>
    </div>
  );
}

export default Remark
