// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ScenarioData } from "@/utils/ReduceCost";
// import { ROIResults } from "@/utils/ReduceCost";

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
//   const sanitizeValue = (value: string | undefined) =>
//     value === undefined || value === "" ? "0" : value;

//   return (
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold">Scenario {scenarioNumber}</h3>

//       <div className="space-y-2">
//         <Label htmlFor={`reduction-${scenarioNumber}`}>
//           Reduction in Training Needs
//         </Label>
//         <Input
//           id={`reduction-${scenarioNumber}`}
//           type="number"
//           value={sanitizeValue(data.reduction)}
//           onChange={(e) => onChange("reduction", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`targetUsers-${scenarioNumber}`}>
//           Number of Target Users
//         </Label>
//         <Input
//           id={`targetUsers-${scenarioNumber}`}
//           type="number"
//           value={data.targetUsers}
//           onChange={(e) => onChange("targetUsers", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`duration-${scenarioNumber}`}>
//           Duration of Training
//         </Label>
//         <Input
//           id={`duration-${scenarioNumber}`}
//           type="number"
//           value={data.duration}
//           onChange={(e) => onChange("duration", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`traineeSalary-${scenarioNumber}`}>
//           Annual Salary Trainee
//         </Label>
//         <Input
//           id={`traineeSalary-${scenarioNumber}`}
//           type="number"
//           value={data.traineeSalary}
//           onChange={(e) => onChange("traineeSalary", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`trainerSalary-${scenarioNumber}`}>
//           Annual Salary Trainer
//         </Label>
//         <Input
//           id={`trainerSalary-${scenarioNumber}`}
//           type="number"
//           value={data.trainerSalary}
//           onChange={(e) => onChange("trainerSalary", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`classes-${scenarioNumber}`}>Number of Classes</Label>
//         <Input
//           id={`classes-${scenarioNumber}`}
//           type="number"
//           value={data.classes}
//           onChange={(e) => onChange("classes", e.target.value)}
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
//             {(results.annualROI / 100).toFixed(0)}:1
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Total ROI</span>
//           <span className="font-semibold">
//             {(results.totalROI / 100).toFixed(0)}:1
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScenarioForm;
