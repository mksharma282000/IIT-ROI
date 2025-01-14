// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ScenarioData } from "@/utils/ReducedReliance";
// import { ROIResults } from "@/utils/ReducedReliance";

// interface ScenarioFormProps {
//   data: ScenarioData;
//   results: ROIResults;
//   onChange: (field: keyof ScenarioData, value: string) => void;
//   scenarioNumber: number;
// }

// const ScenarioForm = ({ data, results, onChange, scenarioNumber }: ScenarioFormProps) => {
//   return (
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold">Scenario {scenarioNumber}</h3>
      
//       <div className="space-y-2">
//         <Label htmlFor={`users-${scenarioNumber}`}>Calls To Call Center</Label>
//         <Input
//           id={`callsToCallCenter-${scenarioNumber}`}
//           type="number"
//           value={data.callsToCallCenter}
//           onChange={(e) => onChange("callsToCallCenter", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`callVolumeReduction-${scenarioNumber}`}>Call Volume Reduction</Label>
//         <Input
//           id={`callVolumeReduction-${scenarioNumber}`}
//           type="number"
//           value={data.callVolumeReduction}
//           onChange={(e) => onChange("callVolumeReduction", e.target.value)}
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
//         <Label htmlFor={`workHours-${scenarioNumber}`}>Work Hours Per Day</Label>
//         <Input
//           id={`workHours-${scenarioNumber}`}
//           type="number"
//           value={data.workHoursPerDay}
//           onChange={(e) => onChange("workHoursPerDay", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`salary-${scenarioNumber}`}>Annual Salary ($)</Label>
//         <Input
//           id={`salary-${scenarioNumber}`}
//           type="number"
//           value={data.annualSalary}
//           onChange={(e) => onChange("annualSalary", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`averageCallLength-${scenarioNumber}`}>Average Call Length (seconds)</Label>
//         <Input
//           id={`averageCallLength-${scenarioNumber}`}
//           type="number"
//           value={data.averageCallLength}
//           onChange={(e) => onChange("averageCallLength", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`cost-${scenarioNumber}`}>Improvement Cost ($)</Label>
//         <Input
//           id={`cost-${scenarioNumber}`}
//           type="number"
//           value={data.improvementCost}
//           onChange={(e) => onChange("improvementCost", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`projectLife-${scenarioNumber}`}>Expected Project Life (Years)</Label>
//         <Input
//           id={`projectLife-${scenarioNumber}`}
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
//             {results.totalGain.toLocaleString('en-US', { maximumFractionDigits: 2 })}
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Annual Gain ($)</span>
//           <span className="font-semibold">
//             {results.annualGain.toLocaleString('en-US', { maximumFractionDigits: 2 })}
//           </span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Annual ROI</span>
//           <span className="font-semibold">{(results.annualROI / 100).toFixed(0)}:1</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Total ROI</span>
//           <span className="font-semibold">{(results.totalROI / 100).toFixed(0)}:1</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScenarioForm;