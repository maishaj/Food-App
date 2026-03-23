import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={food.foodImg}
          alt={food.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {food.title}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          Category: {food.category}
        </p>

        <p className="text-xl font-bold text-green-600 mb-4">
          ৳ {food.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Add to Cart
          </button>

          <Link href={`/foods/${food.id}`}
            className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;