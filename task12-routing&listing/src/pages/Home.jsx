import { Link } from "react-router";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center mt-16 px-4">
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-3xl text-center bg-base-100 rounded-3xl shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Hello!!
          </h2>
          <p className="text-base md:text-lg text-base-content leading-relaxed">
            Welcome to my app. This app has implemented routing using React
            Router DOM. On the products page, you'll find a list of products
            fetched from a fake API. You can also search based on the product
            name. Finally, click on a product to view more details.
          </p>
          <Link
            to="/products"
            className="mt-4 btn btn-primary btn-lg transition-transform transform hover:scale-105"
          >
            Go to Products Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
