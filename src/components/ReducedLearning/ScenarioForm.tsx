// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ScenarioData } from "@/utils/ReducedLearning";
// import { ROIResults } from "@/utils/ReducedLearning";

// interface ScenarioFormProps {
//   data: ScenarioData;
//   results: ROIResults;
//   onChange: (field: keyof ScenarioData, value: string) => void;
//   scenarioNumber: number;
// }

// const ScenarioForm = ({
//   data,
//   results,
//   onChange,
//   scenarioNumber,
// }: ScenarioFormProps) => {
//   return (
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold">Scenario {scenarioNumber}</h3>

//       <div className="space-y-2">
//         <Label htmlFor={`changeInTimeTaken-${scenarioNumber}`}>
//           Change in Time Taken to Learn
//         </Label>
//         <Input
//           id={`changeInTimeTaken-${scenarioNumber}`}
//           type="number"
//           value={data.changeInTimeTaken}
//           onChange={(e) => onChange("changeInTimeTaken", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`numberOfUsers-${scenarioNumber}`}>
//           Number of Users
//         </Label>
//         <Input
//           id={`numberOfUsers-${scenarioNumber}`}
//           type="number"
//           value={data.numberOfUsers}
//           onChange={(e) => onChange("numberOfUsers", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`annualSalary-${scenarioNumber}`}>
//           Annual Salary (Trainee)
//         </Label>
//         <Input
//           id={`annualSalary-${scenarioNumber}`}
//           type="number"
//           value={data.annualSalary}
//           onChange={(e) => onChange("annualSalary", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`daysPerYear-${scenarioNumber}`}>Days Per Year</Label>
//         <Input
//           id={`daysPerYear-${scenarioNumber}`}
//           type="number"
//           value={data.daysPerYear}
//           onChange={(e) => onChange("daysPerYear", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`workHoursPerDay-${scenarioNumber}`}>
//           Work Hours Per Day
//         </Label>
//         <Input
//           id={`workHoursPerDay-${scenarioNumber}`}
//           type="number"
//           value={data.workHoursPerDay}
//           onChange={(e) => onChange("workHoursPerDay", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`improvementCost-${scenarioNumber}`}>
//           Improvement Cost
//         </Label>
//         <Input
//           id={`improvementCost-${scenarioNumber}`}
//           type="number"
//           value={data.improvementCost}
//           onChange={(e) => onChange("improvementCost", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`expectedProjectLife-${scenarioNumber}`}>
//           Expected Project Life
//         </Label>
//         <Input
//           id={`expectedProjectLife-${scenarioNumber}`}
//           type="number"
//           value={data.expectedProjectLife}
//           onChange={(e) => onChange("expectedProjectLife", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Total Gain ($)</span>
//           <span className="font-semibold">
//             {results.totalGain.toLocaleString("en-US", {
//               maximumFractionDigits: 2,
//             })}
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Annual Gain ($)</span>
//           <span className="font-semibold">
//             {results.annualGain.toLocaleString("en-US", {
//               maximumFractionDigits: 2,
//             })}
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Annual ROI</span>
//           <span className="font-semibold">
//             {(results.annualROI / 100).toFixed(2)}:1
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Total ROI</span>
//           <span className="font-semibold">
//             {(results.totalROI / 100).toFixed(2)}:1
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScenarioForm;
