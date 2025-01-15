import React from "react";
import SingleROICalculator from "@/components/IncreasedProductivity/Calculate";
import ROICalculator from "@/components/IncreasedProductivity/Compare";import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion"; // Import framer-motion

const IncreasedProductivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: -20 }} // Animation for when the route changes
      transition={{ duration: 0.5, ease: "easeInOut" }} // Animation timing
      className=""
    >
      <Header />
      <SingleROICalculator />
      <ROICalculator />
      <Footer />
    </motion.div>
  );
};

export default IncreasedProductivity;
