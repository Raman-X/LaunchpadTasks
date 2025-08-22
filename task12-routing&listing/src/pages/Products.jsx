import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Products = () => {
  // Fetching data from the API
  // https://fakestoreapi.com/products

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Products;
