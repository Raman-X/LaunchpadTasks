import { Link } from "react-router";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center mt-16 px-4">
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-3xl text-center bg-white rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-800">Hello!!</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my app. This app has implemented routing using React
            Router DOM. On the products page, you'll find a list of products
            fetched from a fake API. You can also search based on the product
            name. Finally, click on a product to view more details.
          </p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Go to Products Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
