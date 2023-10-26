import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
co
function MyPortfolio() {

  return (
    <div>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <div className="serviceList row">
        <div className="col service">
          <a>
            <img src={portfolio_1} alt="" width="50%" height="50%"/>
            <h4>Country Search api</h4>
            <p>Ability to search for any country</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio
