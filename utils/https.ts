import { useQuery } from "react-query";
import { ApiResponse } from "./types";

const fetchTimelineData = async (): Promise<ApiResponse> => {
  const response = await fetch(
    "https://arthurfrost.qflo.co.za/php/getTimeline.php"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useTimelineData = () => {
  return useQuery("timelineData", fetchTimelineData);
};

export { useTimelineData };
