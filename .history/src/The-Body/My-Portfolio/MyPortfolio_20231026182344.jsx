import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
import {v4 as uuid} from 'uuid'
const portfolioList = [
  {
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/"
  },
];
function MyPortfolio() {
  return (
    <div>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <div className="serviceList row">
        {portfolioList.map((item) => (
          <div key={uuid()} className="col service">
            <a
              href={it}
              style={{ color: "black" }}
            >
              <img src={item.image} alt="" width="100%" height="50%" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPortfolio
