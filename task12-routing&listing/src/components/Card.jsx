import { Link } from "react-router";

const Card = ({ image, alt, title, description }) => {
  return (
    <div className="bg-white w-80 md:w-96 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <div className="h-64 w-full relative">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between min-h-48">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm md:text-base line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
