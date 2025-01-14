import React from "react";
import SingleROICalculator from "@/components/IncreasedProductivity/Calculate";
import ROICalculator from "@/components/IncreasedProductivity/Compare";import Header from "./Header";
import Footer from "./Footer";
const IncreasedProductivity = () => {
  return (
    <div className="">
    <Header />
    <SingleROICalculator />
    <ROICalculator />
    <Footer />
  </div>
  );
};

export default IncreasedProductivity;
