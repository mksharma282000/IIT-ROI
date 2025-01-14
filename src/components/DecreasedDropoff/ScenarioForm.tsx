// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ScenarioData } from "@/utils/DecreasedDropoff";
// import { ROIResults } from "@/utils/DecreasedDropoff";

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
//     <>
//       <div className="flex">
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Scenario {scenarioNumber}</h3>

//         <div className="space-y-2">
//           <Label htmlFor={`preDesignRate-${scenarioNumber}`}>
//             Pre-Design Drop-off Rate
//           </Label>
//           <Input
//             id={`preDesignRate-${scenarioNumber}`}
//             type="number"
//             value={data.preDesignRate}
//             onChange={(e) => onChange("preDesignRate", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`postDesignRate-${scenarioNumber}`}>
//             Post-Design Drop-off Rate
//           </Label>
//           <Input
//             id={`postDesignRate-${scenarioNumber}`}
//             type="number"
//             value={data.postDesignRate}
//             onChange={(e) => onChange("postDesignRate", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`monthlyPageTraffic-${scenarioNumber}`}>
//             Current Monthly Page Traffic
//           </Label>
//           <Input
//             id={`monthlyPageTraffic-${scenarioNumber}`}
//             type="number"
//             value={data.monthlyPageTraffic}
//             onChange={(e) => onChange("monthlyPageTraffic", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`orderSize-${scenarioNumber}`}>
//             Average Order Size
//           </Label>
//           <Input
//             id={`orderSize-${scenarioNumber}`}
//             type="number"
//             value={data.orderSize}
//             onChange={(e) => onChange("orderSize", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`profilePerOrder-${scenarioNumber}`}>
//             Profit % Per Order
//           </Label>
//           <Input
//             id={`profilePerOrder-${scenarioNumber}`}
//             type="number"
//             value={data.profilePerOrder}
//             onChange={(e) => onChange("profilePerOrder", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`cost-${scenarioNumber}`}>Improvement Cost</Label>
//           <Input
//             id={`cost-${scenarioNumber}`}
//             type="number"
//             value={data.cost}
//             onChange={(e) => onChange("cost", e.target.value)}
//             placeholder="0"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor={`projectLife-${scenarioNumber}`}>
//             Expected Project Life (Years)
//           </Label>
//           <Input
//             id={`projectLife-${scenarioNumber}`}
//             type="number"
//             value={data.projectLife}
//             onChange={(e) => onChange("projectLife", e.target.value)}
//             placeholder="0"
//           />
//         </div>
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
//       </div>
//     </>
//   );
// };

// export default ScenarioForm;
