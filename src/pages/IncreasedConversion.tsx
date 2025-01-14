import React from "react";
import SingleROICalculator from "@/components/IncreasedConversion/Calculate";
import ROICalculator from "@/components/IncreasedConversion/Compare";
import Header from "./Header";
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
