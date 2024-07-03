import React from "react";

const LoadingSpiner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 opacity-50 z-50">
      <div className="text-gray-800">
        <svg className="animate-spin h-12 w-12" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a4 4 0 00-4-4V3.618L6.382 9.236z"
          ></path>
        </svg>
        <p className="mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpiner;
