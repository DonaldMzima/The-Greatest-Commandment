import React from "react";
import { useTimelineData } from "../../../utils/https";

const Timeline: React.FC = () => {
  const { data: timelineData, isLoading, error } = useTimelineData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {"No Data"}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {timelineData?.Timeline.map((item) => (
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
    </div>
  );
};

export default Timeline;
