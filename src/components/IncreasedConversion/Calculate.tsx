import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  calculateROIResults,
  type ScenarioData,
} from "@/utils/IncreasedConversion";
import { Heading } from "@/components/ui/heading";
import { jsPDF } from "jspdf";
import { GrDocumentPdf } from "react-icons/gr";

const SingleROICalculator = () => {
  const [data, setData] = useState<ScenarioData>({
    annualSiteProfit: "",
    currentConversionRate: "",
    improvedConversionRate: "",
    improvementCost: "",
    expectedProjectLife: "",
  });

  const [calculatedResults, setCalculatedResults] = useState({
    annualROI: 0,
    totalROI: 0,
    totalGain: 0,
    annualGain: 0,
  });

  const downloadPDF = () => {
    const doc = new jsPDF();
    // Add Title
    doc.setFontSize(16);
    doc.text("IIT ROI Calculator Report", 20, 20);

    // Add Input Data
    doc.setFontSize(12);
    doc.text("Input Data:", 20, 40);

    // Dynamically add input data
    const inputLabels = [
      { label: "Pre-Design Drop-off Rate", value: data.annualSiteProfit },
      { label: "Post-Design Drop-off Rate", value: data.currentConversionRate },
      {
        label: "Current Monthly Page Traffic",
        value: data.improvedConversionRate,
      },
      { label: "Average Order Size", value: data.improvementCost },
      { label: "Profit % Per Order", value: data.expectedProjectLife },
    ];

    let yOffset = 50; // Starting y-coordinate for input data
    inputLabels.forEach(({ label, value }) => {
      doc.text(`${label}: ${value || "N/A"}`, 20, yOffset);
      yOffset += 10; // Increment y-coordinate
    });

    // Add Results
    doc.text("Results:", 20, yOffset + 10);
    yOffset += 20; // Adjust for results section

    const resultsLabels = [
      {
        label: "Annual ROI",
        value: calculatedResults.annualROI
          ? `${(calculatedResults.annualROI / 100).toFixed(0)}:1`
          : "0:1",
      },
      {
        label: "Total ROI",
        value: calculatedResults.totalROI
          ? `${(calculatedResults.totalROI / 100).toFixed(0)}:1`
          : "0:1",
      },
      {
        label: "Total Gain from Improvement ($)",
        value: calculatedResults.totalGain
          ? calculatedResults.totalGain.toFixed(2)
          : "0",
      },
      {
        label: "Annual Gain from Improvement ($)",
        value: calculatedResults.annualGain
          ? calculatedResults.annualGain.toFixed(2)
          : "0",
      },
    ];

    resultsLabels.forEach(({ label, value }) => {
      doc.text(`${label}: ${value}`, 20, yOffset);
      yOffset += 10; // Increment y-coordinate
    });

    // Save the PDF
    doc.save("ROI_Report.pdf");
  };
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleChange = (field: keyof ScenarioData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const results = calculateROIResults(data);
    setCalculatedResults(results);
    setShowDownloadButton(true);
  };

  const handleClear = () => {
    setData({
      annualSiteProfit: "",
      currentConversionRate: "",
      improvedConversionRate: "",
      improvementCost: "",
      expectedProjectLife: "",
    });
    setCalculatedResults({
      annualROI: 0,
      totalROI: 0,
      totalGain: 0,
      annualGain: 0,
    });
    setShowDownloadButton(false);
  };

  return (
    <>
      <div className="container mx-auto p-6 font-barlow">
        <div className="flex flex-col space-y-2 justify-center items-center pt-6 pb-16">
          <h3 className="text-4xl font-bold text-gray-800">
            Increased Conversion
          </h3>
          <p className="text-lg font-medium text-gray-600">
            Improve engagement and achieve higher success rates.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-8 justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-7/12">
            <Heading>Calculate ROI</Heading>
            <div className="labels/inputs p-6 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow ">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="users">Annual Site Profit</Label>
                  <Input
                    id="annualSiteProfit"
                    type="number"
                    value={data.annualSiteProfit}
                    onChange={(e) =>
                      handleChange("annualSiteProfit", e.target.value)
                    }
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="currentConversionRate">
                    Current Conversion Rate
                  </Label>
                  <Input
                    id="currentConversionRate"
                    type="number"
                    value={data.currentConversionRate}
                    onChange={(e) =>
                      handleChange("currentConversionRate", e.target.value)
                    }
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="improvedConversionRate">
                    Improved Conversion Rate
                  </Label>
                  <Input
                    id="improvedConversionRate"
                    type="number"
                    value={data.improvedConversionRate}
                    onChange={(e) =>
                      handleChange("improvedConversionRate", e.target.value)
                    }
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="improvementCost">Improvement Cost</Label>
                  <Input
                    id="improvementCost"
                    type="number"
                    value={data.improvementCost}
                    onChange={(e) =>
                      handleChange("improvementCost", e.target.value)
                    }
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col gap-1 ">
                  <Label htmlFor="projectLife">Expected Project Life</Label>
                  <div className="flex gap-2">
                    <Input
                      id="projectLife"
                      type="number"
                      value={data.expectedProjectLife}
                      onChange={(e) =>
                        handleChange("expectedProjectLife", e.target.value)
                      }
                      placeholder="0"
                    />
                    <span className="flex items-center text-sm text-gray-600">
                      Year(s)
                    </span>
                  </div>
                </div>

                {/* <div className="flex flex-col gap-1 w-min ">
                  <Label htmlFor="cost">Improvement Cost</Label>
                  <div className="flex gap-2">
                    <Input
                      id="cost"
                      type="number"
                      value={data.cost}
                      onChange={(e) => handleChange("cost", e.target.value)}
                      placeholder="0"
                    />
                  </div>
                </div> */}

                {/* <div className="flex flex-col gap-1 w-min ">
                  <Label htmlFor="projectLife">Expected Project Life</Label>
                  <Input
                    id="projectLife"
                    type="number"
                    value={data.projectLife}
                    onChange={(e) =>
                      handleChange("projectLife", e.target.value)
                    }
                    placeholder="0"
                  />
                </div> */}
              </div>
              <div className="mt-8 Results md:hidden">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      label: "Annual ROI",
                      value: calculatedResults.annualROI
                        ? `${(calculatedResults.annualROI / 100).toFixed(0)}:1`
                        : "0:1",
                    },
                    {
                      label: "Total ROI",
                      value: calculatedResults.totalROI
                        ? `${(calculatedResults.totalROI / 100).toFixed(0)}:1`
                        : "0:1",
                    },
                    {
                      label: "Total Gain from Improvement ($)",
                      value: calculatedResults.totalGain
                        ? calculatedResults.totalGain.toFixed(2)
                        : "0",
                    },
                    {
                      label: "Annual Gain from Improvement ($)",
                      value: calculatedResults.annualGain
                        ? calculatedResults.annualGain.toFixed(2)
                        : "0",
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-row  w-full">
                      <div className="text-left text-sm font-medium text-gray-500 w-1/2">
                        {label}
                      </div>
                      <span className="md:text-3xl font-semibold text-gray-500 w-1/2 text-center">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="Buttons flex justify-end gap-3 mt-10">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 w-36 text-base"
                  onClick={handleClear}
                >
                  CLEAR
                </Button>
                <Button
                  variant="blue"
                  className="rounded-[8px]"
                  onClick={handleCalculate}
                >
                  CALCULATE
                </Button>
              </div>

              {showDownloadButton && (
                <div className="DownloadPDF md:hidden flex gap-3 justify-center mt-8">
                  <button
                    className="rounded-[2px] underline text-xs text- font-barlow "
                    onClick={downloadPDF}
                  >
                    <GrDocumentPdf size={20} />
                  </button>
                  <button
                    className="rounded-[2px] underline text- text-sm font-barlow text-left"
                    onClick={downloadPDF}
                  >
                    Click here to download Report
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Right Section */}
          <div className=" md:flex flex-col hidden Results w-full lg:w-3/12">
            <Heading>Your Results</Heading>
            <div className="p-5 bg-white border border-blueborder flex  flex-col gap-10 rounded-md shadow-sm hover:shadow-md transition-shadow h-[280px]">
              <div className="grid grid-cols-2 gap-10">
                {[
                  {
                    label: "Annual ROI",
                    value: calculatedResults.annualROI
                      ? `${(calculatedResults.annualROI / 100).toFixed(0)}:1`
                      : "0:1",
                  },
                  {
                    label: "Total ROI",
                    value: calculatedResults.totalROI
                      ? `${(calculatedResults.totalROI / 100).toFixed(0)}:1`
                      : "0:1",
                  },
                  {
                    label: "Total Gain from Improvement ($)",
                    value: calculatedResults.totalGain
                      ? calculatedResults.totalGain.toFixed(2)
                      : "0",
                  },
                  {
                    label: "Annual Gain from Improvement ($)",
                    value: calculatedResults.annualGain
                      ? calculatedResults.annualGain.toFixed(2)
                      : "0",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <span className="text-xl font-bold text-black">
                      {value}
                    </span>
                    <div className="text-base font-semibold text-customGray">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {showDownloadButton && (
                <div className="DownloadPDF flex gap-3 justify-center">
                  <button
                    className="rounded-[2px] underline text-xs text- font-barlow "
                    onClick={downloadPDF}
                  >
                    <GrDocumentPdf size={20} />
                  </button>
                  <button
                    className="rounded-[2px] underline text- text-sm font-barlow text-left"
                    onClick={downloadPDF}
                  >
                    Click here to download Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleROICalculator;
