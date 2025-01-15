import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Page Components
import Home from "./pages/Home";
import IncreasedProductivity from "./pages/IncreasedProductivity";
import ReducedReliance from "./pages/ReducedReliance";
import IncreasedConversion from "./pages/IncreasedConversion";
import ReducedCost from "./pages/ReducedCost";
import DecreasedDropoff from "./pages/DecreasedDropoff";
import ReducedLearning from "./pages/ReducedLearning";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/increased-productivity" element={<IncreasedProductivity />} />
        <Route path="/reduced-reliance" element={<ReducedReliance />} />
        <Route path="/increased-conversion" element={<IncreasedConversion />} />
        <Route path="/reduced-cost" element={<ReducedCost />} />
        <Route path="/decreased-dropoff" element={<DecreasedDropoff />} />
        <Route path="/reduced-learning" element={<ReducedLearning />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </Suspense>
  );
}

export default App;
