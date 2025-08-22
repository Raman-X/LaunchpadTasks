import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />

      <div className="flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
            Products
          </h2>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.title} // fakestoreapi uses "title" not "name"
                  description={product.description}
                  image={product.image}
                  alt={product.title}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 p-12 bg-white rounded-2xl shadow-xl">
              <p className="text-xl md:text-2xl text-gray-700">
                No products found. Please try again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
