import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-6xl">
          {/* Page Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 text-center">
            Products
          </h2>

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by title"
            className="input input-neutral mb-4"
          />
          <br />
          <br />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  alt={product.title}
                  id={product.id}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 p-12 bg-base-100 rounded-3xl shadow-xl">
              <p className="text-xl md:text-2xl text-base-content">
                Loading..... Please Wait
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
