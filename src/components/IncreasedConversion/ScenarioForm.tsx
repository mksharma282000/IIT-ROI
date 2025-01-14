// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ScenarioData } from "@/utils/IncreasedConversion";
// import { ROIResults } from "@/utils/IncreasedConversion";

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
//         <Label htmlFor={`annualSiteProfit-${scenarioNumber}`}>
//           Annual Site Profit
//         </Label>
//         <Input
//           id={`annualSiteProfit-${scenarioNumber}`}
//           type="number"
//           value={data.annualSiteProfit}
//           onChange={(e) => onChange("annualSiteProfit", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`currentConversionRate-${scenarioNumber}`}>
//           Current Conversion Rate
//         </Label>
//         <Input
//           id={`currentConversionRate-${scenarioNumber}`}
//           type="number"
//           value={data.currentConversionRate}
//           onChange={(e) => onChange("currentConversionRate", e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor={`improvedConversionRate-${scenarioNumber}`}>
//           Improved Conversion Rate
//         </Label>
//         <Input
//           id={`improvedConversionRate-${scenarioNumber}`}
//           type="number"
//           value={data.improvedConversionRate}
//           onChange={(e) => onChange("improvedConversionRate", e.target.value)}
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
//           onChange={(e) =>
//             onChange("expectedProjectLife", e.target.value)
//           }
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
