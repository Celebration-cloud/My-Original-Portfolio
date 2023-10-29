import portfolio_1 from "../../../public/Screenshot 2023-08-24 110530.png";
import portfolio_2 from "../../../public/Screenshot 2023-10-29 144112.png";
import { v4 as uuid } from "uuid";
const portfolioList = [
  {
    id: uuid(),
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/",
  },
  {
    id: uuid(),
    title: "E-commerce Product Page",
    image: portfolio_2,
    description: "Ability to put items to cart and delete them.",
    link: "https://e-commerce-product-page-t3zp.onrender.com/",
  },
  {
    id: uuid(),
    title: "",
    image: portfolio_2,
    description: "Ability to put items to cart and delete them.",
    link: "https://e-commerce-product-page-t3zp.onrender.com/",
  },
];
export default portfolioList;
