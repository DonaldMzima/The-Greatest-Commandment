import Image from "next/image";
import { Inter } from "next/font/google";
import Timeline from "../components/TimeLineItime";
import Navbar from "../components/UI/Navbar";
import Hero from "../components/UI/Hero";
import Footer from "../components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />

      <Timeline />
    </>
  );
}