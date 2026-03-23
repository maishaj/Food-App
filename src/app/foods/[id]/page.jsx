import Image from "next/image";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);
  console.log(food);

  if (!food) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold">
        Food Not Found!
      </div>
    );
  }

  // 🔥 Extract YouTube ID
  const getYouTubeId = (url) => {
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };
  const videoId = food.video ? getYouTubeId(food.video) : null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Back Button */}
      <Link href="/">
        <button className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
          ← Back
        </button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-full">
          <Image
            src={food?.foodImg || "/logo.png"}
            alt={food?.title || "Food Image"}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between">
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{food.title}</h1>

            <p className="text-gray-500 mb-1">
              Category: {food.category}
            </p>

            <p className="text-gray-500 mb-3">
              Area: {food.area}
            </p>

            <p className="text-green-600 text-2xl font-semibold mb-4">
              ৳ {food.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
              Add to Cart
            </button>

            <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-lg transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* 🎥 Video Section */}
      {videoId && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Recipe Video</h2>

          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Food Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;