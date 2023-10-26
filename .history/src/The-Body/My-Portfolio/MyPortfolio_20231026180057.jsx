import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
function MyPortfolio() {
  return (
    <div>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <div className="serviceList row">
        <div className="col service">
          <a>
            <img src={portfolio_1} alt="" width="50%" height="50%"/>
            <h4>C</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio
