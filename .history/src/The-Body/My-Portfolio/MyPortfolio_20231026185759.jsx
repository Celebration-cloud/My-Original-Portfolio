import portfolio_1 from '../../../public/Screenshot 2023-08-24 110530.png'
import {v4 as uuid} from 'uuid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MyPortfolio.css'
const portfolioList = [
  {
    id: uuid(),
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/"
  },
  {
    id: uuid(),
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/"
  },
  {
    id: uuid(),
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/"
  },
];
function MyPortfolio() {
  return (
    <>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <br />
      <br />

      <div className="port row">
        {portfolioList.map((item) => (
          //   <div key={item.id} className="myWork col">
          //     <a
          //       href={item.link}
          //       style={{ color: "black" }}
          //     >
          //       <img src={item.image} alt="" width="40%" height="50%" />
          //       <h4>{item.title}</h4>
          //       <p>{item.description}</p>
          //     </a>
          //   </div>
          <Card className="port" key={item.id} sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <img/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MyPortfolio
