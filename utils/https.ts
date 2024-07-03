import axios from "axios";
import { TimelineItem } from "./types";

interface ApiResponse {
  Timeline: TimelineItem[];
}

const getTimelineData = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(
      "https://arthurfrost.qflo.co.za/php/getTimeline.php"
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching timeline data: ${error}`);
  }
};

export { getTimelineData };
