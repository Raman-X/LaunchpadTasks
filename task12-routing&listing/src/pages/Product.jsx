import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-base-200">
        <Navbar />
        <p className="text-4xl font-semibold text-base-content mt-12">
          Loading details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="flex justify-center px-4 py-12">
        <div className="card bg-base-100 shadow-xl w-full max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden">
          {/* Product Image */}
          <figure className="flex-1 bg-base-200 p-6 md:p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 md:h-96 object-contain"
            />
          </figure>

          {/* Product Details */}
          <div className="card-body flex-1 p-6 md:p-10">
            <h2 className="text-4xl font-bold mb-4 text-primary">Details</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-base-content">
              {product.title}
            </h3>

            <p className="text-base-content text-base md:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="badge badge-primary text-xl">
                Price: ${product.price}
              </span>
              <span className="badge badge-secondary text-lg">
                Category: {product.category}
              </span>
              <span className="badge badge-accent text-lg">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <div className="mt-4">
              <Link to="/products" className="btn btn-outline btn-lg">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
