import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
const portfolioList = [
  {
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country",
  }
];
function MyPortfolio() {

  return (
    <div>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <div className="serviceList row">
        {portfolioList.map}
        <div className="col service">
          <a>
            <img src={portfolio_1} alt="" width="50%" height="50%"/>
            <h4></h4>
            <p></p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio
