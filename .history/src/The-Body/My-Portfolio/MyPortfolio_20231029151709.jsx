import portfolioList from './PortfolioList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MyPortfolio.css'

function MyPortfolio() {
  return (
    <>
      <h4 id="scrollspyHeading3">Portfolio</h4>
      <br />
      <br />
      <div className="port row">
        {portfolioList.map((item) => (
          <Card className="port" key={item.id} sx={{ maxWidth: 250,  }}>
            <a href={item.link} target='_self' style={{color: "black"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="50%"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MyPortfolio
