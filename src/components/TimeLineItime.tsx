import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import Fuse from "fuse.js";
import { useTimelineData } from "../../utils/https";
import ScrollToTopButton from "./Buttons/ScrollToTopButton";
import Footer from "./UI/Footer";

const Timeline: React.FC = () => {
  const { data: timelineData, isLoading, error } = useTimelineData();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) return <div>Error: {"No Data"}</div>;

  const fuse = new Fuse(timelineData?.Timeline || [], {
    keys: ["Title", "Episode", "Category", "Description"],
    includeScore: true,
  });

  const results = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : timelineData?.Timeline || [];

  const filteredResults = results.filter((item) => item.Id === 227);

  return (
    <div id="audio" className="max-w-4xl mx-auto p-4 ">
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="mb-4">
        {searchTerm && (
          <p className="text-gray-700">
            {results.length > 0
              ? `Results for: "${searchTerm}"`
              : `No Results For: "${searchTerm}"`}
          </p>
        )}
      </div>
      {filteredResults.map((item) => (
        <div
          key={item.Id}
          className="flex flex-col md:flex-row mb-8 pb-8 border-b border-gray-200"
        >
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src={`https://arthurfrost.qflo.co.za/${item.Image}`}
              alt={item.Title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-2">{item.Title}</h2>
            <p className="text-gray-600 mb-2">Episode: {item.Episode}</p>
            <p className="text-gray-600 mb-2">Category: {item.Category}</p>
            <p className="text-gray-600 mb-4">{item.Description}</p>
            {item.Audio && (
              <audio controls className="w-full mb-4">
                <source
                  src={`https://arthurfrost.qflo.co.za/${item.Audio}`}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            )}
            {item.Icon && (
              <img
                src={`https://arthurfrost.qflo.co.za/${item.Icon}`}
                alt="Icon"
                className="w-8 h-8"
              />
            )}
            <p className="text-sm text-gray-500 mt-2">
              Created on: {item.CreateDate}
            </p>
          </div>
        </div>
      ))}

      <ScrollToTopButton />
    </div>
  );
};

export default Timeline;
