import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScenarioForm from "./ScenarioForm";
import { calculateROIResults, getEmptyScenarioData, type ScenarioData, type ROIResults } from "@/utils/roiCalculations";

const ROICalculator = () => {
  const [scenarios, setScenarios] = useState<ScenarioData[]>([
    getEmptyScenarioData(),
    getEmptyScenarioData(),
    getEmptyScenarioData()
  ]);

  const [results, setResults] = useState<ROIResults[]>([
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
    { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 }
  ]);

  const handleInputChange = (scenarioIndex: number, field: keyof ScenarioData, value: string) => {
    const newScenarios = [...scenarios];
    newScenarios[scenarioIndex] = {
      ...newScenarios[scenarioIndex],
      [field]: value
    };
    setScenarios(newScenarios);
  };

  const calculateROI = () => {
    const newResults = scenarios.map(scenario => calculateROIResults(scenario));
    setResults(newResults);
  };

  const handleClear = () => {
    setScenarios([
      getEmptyScenarioData(),
      getEmptyScenarioData(),
      getEmptyScenarioData()
    ]);
    setResults([
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 },
      { totalGain: 0, annualGain: 0, annualROI: 0, totalROI: 0 }
    ]);
  };

  return (
    <Card className="w-full max-w-6xl p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Compare ROIs</h2>
        <p className="text-sm text-center text-gray-600">Enter your scenarios to compare ROIs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {scenarios.map((scenario, index) => (
          <ScenarioForm
            key={index}
            data={scenario}
            results={results[index]}
            onChange={(field, value) => handleInputChange(index, field, value)}
            scenarioNumber={index + 1}
          />
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <Button onClick={calculateROI} className="w-32">COMPARE</Button>
        <Button onClick={handleClear} variant="outline" className="w-32">CLEAR</Button>
      </div>
    </Card>
  );
};

export default ROICalculator;