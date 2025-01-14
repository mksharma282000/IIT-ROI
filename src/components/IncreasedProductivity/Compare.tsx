import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  calculateROIResults,
  getEmptyScenarioData,
  type ScenarioData,
  type ROIResults,
} from "@/utils/IncreasedProductivity";
import { Heading } from "@/components/ui/heading";
import BestResults from "./BestResults";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const inputFields = [
  { label: "# of Users", field: "users" },
  { label: "Uses Per Day", field: "usesPerDay" },
  { label: "Days Per Year", field: "daysPerYear" },
  { label: "Work Hours Per Day", field: "workHoursPerDay" },
  { label: "Annual Salary", field: "annualSalary" },
  { label: "Increase in Efficiency", field: "increaseInEfficiency" },
  { label: "Improvement Cost", field: "improvementCost" },
  { label: "Expected Project Life", field: "expectedProjectLife" },
];

const ResultRow = ({ label, value, format = "number" }) => (
  <div className="flex justify-between py-1">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-medium">
      {format === "ratio"
        ? `${value.toFixed(1)}:1`
        : value.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
    </span>
  </div>
);

const ROICalculator = () => {
  const [scenarios, setScenarios] = useState<ScenarioData[]>([
    getEmptyScenarioData(),
    getEmptyScenarioData(),
    getEmptyScenarioData(),
  ]);
  const [results, setResults] = useState<ROIResults[]>([
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
  ]);
  const options = {
    // default is `save`
    filename: "ROICal.pdf",
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.

    resolution: 3,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: 2,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "portrait",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  const handleInputChange = (
    scenarioIndex: number,
    field: keyof ScenarioData,
    value: string
  ) => {
    const newScenarios = [...scenarios];
    newScenarios[scenarioIndex] = {
      ...newScenarios[scenarioIndex],
      [field]: value,
    };
    setScenarios(newScenarios);
  };

  const calculateROI = () => {
    setResults(scenarios.map(calculateROIResults));
  };

  const handleClear = () => {
    setScenarios([
      getEmptyScenarioData(),
      getEmptyScenarioData(),
      getEmptyScenarioData(),
    ]);
    setResults([
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
    ]);
  };
  const openPDF = () => {
    generatePDF(() => document.getElementById("wrapper"), options);
  };

  return (
    <>
      <div className="container mx-auto p-4 sm:p-6 font-barlow">
        <div
          id="wrapper"
          className="flex flex-col lg:flex-row gap-8 justify-center"
        >
          {/* Left Section */}
          <div className="w-full lg:w-7/12">
            <Heading>Compare ROI's</Heading>
            <Card className="p-6 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <div className="grid gap-6">
                {/* Headers */}
                <div className="hidden sm:grid grid-cols-4 gap-4 text-center font-medium">
                  <div />
                  <div>Scenario 1</div>
                  <div>Scenario 2</div>
                  <div>Scenario 3</div>
                </div>

                {/* Input Fields */}
                {inputFields.map(({ label, field }) => (
                  <div
                    key={field}
                    className="flex flex-col sm:flex-row sm:flex-nowrap gap-2 sm:gap-10"
                  >
                    {/* Label */}
                    <div className="flex justify-end sm:w-1/3">
                      <label className="text-sm text-gray-900 flex  w-full">
                        {label}
                      </label>
                    </div>

                    {/* Input Fields */}
                    <div className="flex sm:w-full gap-2 sm:gap-14">
                      {[0, 1, 2].map((scenarioIndex) => (
                        <Input
                          key={`${field}-${scenarioIndex}`}
                          type="number"
                          value={scenarios[scenarioIndex][field]}
                          onChange={(e) =>
                            handleInputChange(
                              scenarioIndex,
                              field as keyof ScenarioData,
                              e.target.value
                            )
                          }
                          placeholder="0"
                          className="w-full sm:w-1/4 "
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Results */}
                <div id="Print" className="mt-8 sm:w-5/6">
                  <h3 className="text-xl font-semibold mb-4">Your Result</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-4 sm:gap-6">
                    <div className="text-sm text-gray-600  flex flex-col gap-5">
                      <span>Total ROI</span>
                      <span>Annual ROI</span>
                      <span>Total Gain</span>
                      <span>Annual Gain</span>
                    </div>
                    {results.map((result, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <ResultRow
                          label=""
                          value={result.totalROI}
                          format="ratio"
                        />
                        <ResultRow
                          label=""
                          value={result.annualROI}
                          format="ratio"
                        />
                        <ResultRow label="" value={result.totalGain} />
                        <ResultRow label="" value={result.annualGain} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
                  <Button variant="outline" onClick={handleClear}>
                    CLEAR
                  </Button>
                  <Button
                    onClick={calculateROI}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    CALCULATE
                  </Button>
                  <Button onClick={openPDF}>Download PDF</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/12">
            <Heading>Your Results</Heading>
            <Card className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Annual ROI",
                    value: results[0]?.annualROI || "0:1",
                  },
                  { label: "Total ROI", value: results[0]?.totalROI || "0:1" },
                  {
                    label: "Total Gain from Improvement ($)",
                    value: results[0]?.totalGain || "0",
                  },
                  {
                    label: "Annual Gain from Improvement ($)",
                    value: results[0]?.annualGain || "0",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <span className="text-3xl font-semibold">{value}</span>
                    <div className="text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ROICalculator;
