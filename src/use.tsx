import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateROIResults, type ScenarioData } from "@/utils";
import { Heading } from "@/components/ui/heading";

const SingleROICalculator = () => {
  const [data, setData] = useState<ScenarioData>({
    callsToCallCenter: "", // # of Calls to Call Center
    callVolumeReduction: "", // Call Volume Reduction (%)
    daysPerYear: "", // Days Per Year
    workHoursPerDay: "", // Work Hours Per Day
    annualSalary: "", // Annual Salary
    averageCallLength: "", // Average Length of Call (minutes)
    improvementCost: "", // Improvement Cost
    expectedProjectLife: "", // Expected Project Life (Years)
  });

  const results = calculateROIResults(data);

  const handleChange = (field: keyof ScenarioData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setData({
      callsToCallCenter: "", // # of Calls to Call Center
      callVolumeReduction: "", // Call Volume Reduction (%)
      daysPerYear: "", // Days Per Year
      workHoursPerDay: "", // Work Hours Per Day
      annualSalary: "", // Annual Salary
      averageCallLength: "", // Average Length of Call (minutes)
      improvementCost: "", // Improvement Cost
      expectedProjectLife: "", // Expected Project Life (Years)
    });
  };

  return (
    <>
      <div className="container mx-auto p-6 font-barlow">
        <div className="flex md:flex-row flex-col gap-8 justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-7/12">
            <Heading>Calculate ROI</Heading>
            <div className="labels/inputs p-6 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow ">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <Label htmlFor="users">Change in Time Taken to Learn</Label>
                <Input
                  id="changeInTimeTaken"
                  type="number"
                  value={data.changeInTimeTaken}
                  onChange={(e) =>
                    handleChange("changeInTimeTaken", e.target.value)
                  }
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="numberOfUsers">Number of Users</Label>
                <Input
                  id="numberOfUsers"
                  type="number"
                  value={data.numberOfUsers}
                  onChange={(e) =>
                    handleChange("numberOfUsers", e.target.value)
                  }
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="annualSalary">Annual Salary (Trainee)</Label>
                <Input
                  id="annualSalary"
                  type="number"
                  value={data.annualSalary}
                  onChange={(e) => handleChange("annualSalary", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="daysPerYear">Days Per Year</Label>
                <Input
                  id="daysPerYear"
                  type="number"
                  value={data.daysPerYear}
                  onChange={(e) => handleChange("daysPerYear", e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="workHoursPerDay">Work Hours Per Day</Label>
                <Input
                  id="workHoursPerDay"
                  type="number"
                  value={data.workHoursPerDay}
                  onChange={(e) =>
                    handleChange("workHoursPerDay", e.target.value)
                  }
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="improvementCost">Improvement Cost</Label>
                <div className="flex gap-2">
                  <Input
                    id="improvementCost"
                    type="number"
                    value={data.improvementCost}
                    onChange={(e) =>
                      handleChange("improvementCost", e.target.value)
                    }
                    placeholder="0"
                  />
                  {/* <span className="flex items-center text-sm text-gray-600">
                secs
              </span> */}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="expectedProjectLife">
                  Expected Project Life
                </Label>
                <Input
                  id="expectedProjectLife"
                  type="number"
                  value={data.expectedProjectLife}
                  onChange={(e) =>
                    handleChange("expectedProjectLife", e.target.value)
                  }
                  placeholder="0"
                />
              </div>
            </div>
            </div>
            <div className="mt-8 Results md:hidden">
              <div className="">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      label: "Annual ROI",
                      value: results.annualROI
                        ? `${(results.annualROI / 100).toFixed(0)}:1`
                        : "0:1",
                    },
                    {
                      label: "Total ROI",
                      value: results.totalROI
                        ? `${(results.totalROI / 100).toFixed(0)}:1`
                        : "0:1",
                    },
                    {
                      label: "Total Gain from Improvement ($)",
                      value: results.totalGain
                        ? results.totalGain.toFixed(2)
                        : "0",
                    },
                    {
                      label: "Annual Gain from Improvement ($)",
                      value: results.annualGain
                        ? results.annualGain.toFixed(2)
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
            </div>

            <div className="Buttons flex justify-end gap-4 mt-6">
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => {}}
              >
                Calculate
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:flex flex-col hidden Results w-full lg:w-3/12">
            <Heading>Your Results</Heading>
            <div className="p-6 bg-white border-blue-500 border rounded-md shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Annual ROI",
                    value: results.annualROI
                      ? `${(results.annualROI / 100).toFixed(0)}:1`
                      : "0:1",
                  },
                  {
                    label: "Total ROI",
                    value: results.totalROI
                      ? `${(results.totalROI / 100).toFixed(0)}:1`
                      : "0:1",
                  },
                  {
                    label: "Total Gain from Improvement ($)",
                    value: results.totalGain
                      ? results.totalGain.toFixed(2)
                      : "0",
                  },
                  {
                    label: "Annual Gain from Improvement ($)",
                    value: results.annualGain
                      ? results.annualGain.toFixed(2)
                      : "0",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <span className="text-3xl font-semibold text-gray-800">
                      {value}
                    </span>
                    <div className="text-sm font-medium text-gray-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleROICalculator;
