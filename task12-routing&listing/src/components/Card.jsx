import { Link } from "react-router";

const Card = ({ image, alt, title, description, id }) => {
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl rounded-3xl overflow-hidden ">
      {/* Product Image */}
      <figure className="h-64 w-full bg-base-200 flex items-center justify-center">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col justify-between min-h-48">
        <div>
          <h2 className="card-title text-primary text-xl md:text-2xl mb-2">
            {title}
          </h2>
          <p className="text-base-content text-sm md:text-base line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex justify-end">
          <Link
            to={`/products/${id}`}
            className="btn btn-primary btn-sm hover:scale-105 transform transition-all duration-300"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
