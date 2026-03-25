"use client";
import Image from "next/image";
import React from "react";

const ReviewCard = ({rev}) => {
  return (
    <div className="p-4 border rounded-2xl shadow-sm hover:shadow-md transition space-y-3 bg-white">
      
      {/* User Info */}
      <div className="flex items-center gap-3">
        <Image
          src={rev.photo}
          alt={rev.user}
          width={40}
          height={40}
          className=" rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm">{rev.user}</h3>
          <p className="text-xs text-gray-500">⭐ {rev.rating}</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {rev.review}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        <p className="text-xs text-gray-400">
          {new Date(rev.date).toLocaleDateString()}
        </p>

        {/* Like Button */}
        <button
          className="px-3 py-1 rounded-full text-xs font-medium transition"
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;