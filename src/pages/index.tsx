import Image from "next/image";
import { Inter } from "next/font/google";
import Timeline from "./components/TimeLineItime";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Timeline />
    </>
  );
}
