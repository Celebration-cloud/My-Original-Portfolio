import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
function MyPortfolio() {
  return (
    <div>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <div className="serviceList row">
        <div className="col service">
          <a>
            <img src={portfolio_1} alt="" width={100%/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio
