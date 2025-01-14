import { ROIResults } from "@/utils/IncreasedProductivity";

interface BestResultsProps {
  results: ROIResults;
}

const BestResults = ({ results }: BestResultsProps) => {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-6">Best Results</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            {(results.totalROI / 100).toFixed(0)}:1
          </div>
          <div className="text-sm text-gray-600">Total ROI</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            {(results.annualROI / 100).toFixed(0)}:1
          </div>
          <div className="text-sm text-gray-600">Annual ROI</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            {results.totalGain.toFixed(0)}
          </div>
          <div className="text-sm text-gray-600">
            Total Gain from Improvement ($)
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            {results.annualGain.toFixed(0)}
          </div>
          <div className="text-sm text-gray-600">
            Annual Gain from Improvement ($)
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestResults;