import React, { useState } from "react";
import { jsPDF } from "jspdf";

const Mohit = () => {
  const [investment, setInvestment] = useState("");
  const [gain, setGain] = useState("");
  const [roi, setRoi] = useState("");

  const calculateROI = () => {
    if (investment && gain) {
      const calculatedRoi = ((gain - investment) / investment) * 100;
      setRoi(calculatedRoi.toFixed(2));
    } else {
      alert("Please fill in both fields");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(16);
    doc.text("IIT ROI Calculator Report", 20, 20);

    // Add Input Data
    doc.setFontSize(12);
    doc.text(`Investment Amount: ${investment}`, 20, 40);
    doc.text(`Gain Amount: ${gain}`, 20, 50);
    doc.text(`Calculated ROI: ${roi} %`, 20, 60);

    // Save the PDF
    doc.save("ROI_Report.pdf");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>ROI Calculator</h1>
      <div>
        <label>
          Investment Amount:
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            style={{ marginLeft: "10px" }}
            className="border"
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Gain Amount:
          <input
            type="number"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
            style={{ marginLeft: "10px" }}
            className="border"
          />
        </label>
      </div>
      <div style={{ marginTop: "10px", color: "White" }}>
        <button
          style={{ backgroundColor: "blue" }}
          className="border p-2"
          onClick={calculateROI}
        >
          Calculate ROI
        </button>
      </div>
      {roi && (
        <div style={{ marginTop: "20px" }}>
          <h2>Calculated ROI: {roi} %</h2>
        </div>
      )}
      {roi && (
        <button
          onClick={downloadPDF}
          style={{
            marginTop: "20px",
            backgroundColor: "#007BFF",
            color: "blue",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Download PDF
        </button>
      )}
    </div>
  );
};

export default Mohit;
