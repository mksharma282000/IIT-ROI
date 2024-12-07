import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateROIResults, type ScenarioData } from "@/utils/roiCalculations";

const SingleROICalculator = () => {
  const [data, setData] = useState<ScenarioData>({
    users: "",
    usesPerDay: "",
    daysPerYear: "",
    workHoursPerDay: "",
    annualSalary: "",
    increaseInEfficiency: "",
    improvementCost: "",
    expectedProjectLife: ""
  });

  const results = calculateROIResults(data);

  const handleChange = (field: keyof ScenarioData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setData({
      users: "",
      usesPerDay: "",
      daysPerYear: "",
      workHoursPerDay: "",
      annualSalary: "",
      increaseInEfficiency: "",
      improvementCost: "",
      expectedProjectLife: ""
    });
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 -mx-6 -mt-6 p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Calculate Increased Productivity</h2>
        </div>

        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="users"># of Users:</Label>
            <Input
              id="users"
              type="number"
              value={data.users}
              onChange={(e) => handleChange("users", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="usesPerDay">Uses Per Day:</Label>
            <Input
              id="usesPerDay"
              type="number"
              value={data.usesPerDay}
              onChange={(e) => handleChange("usesPerDay", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="daysPerYear">Days Per Year:</Label>
            <Input
              id="daysPerYear"
              type="number"
              value={data.daysPerYear}
              onChange={(e) => handleChange("daysPerYear", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workHours">Work Hours Per Day:</Label>
            <Input
              id="workHours"
              type="number"
              value={data.workHoursPerDay}
              onChange={(e) => handleChange("workHoursPerDay", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Annual Salary:</Label>
            <Input
              id="salary"
              type="number"
              value={data.annualSalary}
              onChange={(e) => handleChange("annualSalary", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="efficiency">Increase in Efficiency:</Label>
            <div className="flex gap-2">
              <Input
                id="efficiency"
                type="number"
                value={data.increaseInEfficiency}
                onChange={(e) => handleChange("increaseInEfficiency", e.target.value)}
                placeholder="0"
              />
              <span className="flex items-center text-sm text-gray-600">secs</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cost">Improvement Cost:</Label>
            <Input
              id="cost"
              type="number"
              value={data.improvementCost}
              onChange={(e) => handleChange("improvementCost", e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectLife">Expected Project Life:</Label>
            <div className="flex gap-2">
              <Input
                id="projectLife"
                type="number"
                value={data.expectedProjectLife}
                onChange={(e) => handleChange("expectedProjectLife", e.target.value)}
                placeholder="0"
              />
              <span className="flex items-center text-sm text-gray-600">Year(s)</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              className="flex-1 bg-blue-700 hover:bg-blue-800"
              onClick={() => {}}
            >
              CALCULATE
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleClear}
            >
              CLEAR
            </Button>
          </div>

          <div className="space-y-3 bg-gray-50 p-4 rounded-lg mt-6">
            <div className="flex justify-between">
              <span className="font-medium">Total Gain from Improvement ($)</span>
              <span>{results.totalGain ? results.totalGain.toFixed(2) : 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Annual Gain from Improvement ($)</span>
              <span>{results.annualGain ? results.annualGain.toFixed(2) : 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Annual ROI</span>
              <span>{results.annualROI ? (results.annualROI / 100).toFixed(0) : 0}:1</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total ROI</span>
              <span>{results.totalROI ? (results.totalROI / 100).toFixed(0) : 0}:1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleROICalculator;
