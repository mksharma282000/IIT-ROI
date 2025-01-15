import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import Footer from "./Footer";
// import homeimg from "../assets/homeimg.jpg";
import { Fullscreen } from "lucide-react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="md:flex w-full bg-gray-50 font-barlow justify-center md:gap-10 pt-10">
        <div className="md:w-1/2 px-6 md:px-12 flex flex-col justify-center">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-800">
            <span>Maximize </span>
            <span className="text-orange-500">Impact</span>
            <span>, Minimize Guesswork.</span>
          </h1>
          <h1 className="md:text-xl text-lg font-medium text-gray-800 md:my-6 my-2 ">
            Calculate, analyze, and act smarter with our precision-driven tool.
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                text: "Increased Productivity",
                route: "/increased-productivity",
              },
              { text: "Reduced Reliance", route: "/reduced-reliance" },
              { text: "Increased Conversion", route: "/increased-conversion" },
              { text: "Reduced Cost", route: "/reduced-cost" },
              { text: "Decreased Dropoff", route: "/decreased-dropoff" },
              { text: "Reduced Learning", route: "/reduced-learning" },
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => navigate(option.route)}
                className="w-full p-4 rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex items-end p-4 w-full h-full md:w-[600px] md:h-[600px] rounded-lg shadow-lg overflow-hidden">
          {/* Background Animation */}
          <BackgroundGradientAnimation>
            {/* Overlay Text */}
            <div className="absolute z-50 inset-0 flex items-center justify-center text-center">
              <p className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 drop-shadow-2xl">
                ROI CAL
              </p>
            </div>
          </BackgroundGradientAnimation>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

// flex-grow flex flex-col items-center h-screen justify-center py-20 px-4
