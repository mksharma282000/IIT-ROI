import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IncreasedProductivity from "./pages/IncreasedProductivity";
import ReducedReliance from "./pages/ReducedReliance";
import IncreasedConversion from "./pages/IncreasedConversion";
import ReducedCost from "./pages/ReducedCost";
import DecreasedDropoff from "./pages/DecreasedDropoff";
import ReducedLearning from "./pages/ReducedLearning";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/increased-productivity"
            element={<IncreasedProductivity />}
          />
          <Route path="/reduced-reliance" element={<ReducedReliance />} />
          <Route
            path="/increased-conversion"
            element={<IncreasedConversion />}
          />
          <Route path="/reduced-cost" element={<ReducedCost />} />
          <Route path="/decreased-dropoff" element={<DecreasedDropoff />} />
          <Route path="/reduced-learning" element={<ReducedLearning />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
