export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  annualSiteProfit: string; // Annual site profit in dollars
  currentConversionRate: string; // Current conversion rate (as a percentage)
  improvedConversionRate: string; // Improved conversion rate (as a percentage)
  improvementCost: string; // Cost of improvement in dollars
  expectedProjectLife: string; // Expected project life in years
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 5%)
  const annualProfit = parseFloat(formData.annualSiteProfit) || 0;
  const currentRate = parseFloat(formData.currentConversionRate) || 0;
  const improvedRate = parseFloat(formData.improvedConversionRate) || 0;
  const cost = parseFloat(formData.improvementCost) || 0;
  const projectLife = parseFloat(formData.expectedProjectLife) || 0;
  const finalRates = improvedRate / currentRate;

  // Total Gain from Improvement
  const totalGain =
    ((annualProfit * finalRates - annualProfit) *
      (Math.pow(1 + i, projectLife) - 1)) /
      i -
    cost * Math.pow(1 + i, projectLife);

  // Discounted Total Gain
  const discountedGain = totalGain / Math.pow(1 + i, projectLife);

  // Annual Gain
  const annualGain = discountedGain / projectLife;

  // ROI Calculations
  const annualROI = (annualGain / cost) * 100;
  const totalROI = (discountedGain / cost) * 100;

  return {
    totalGain: discountedGain,
    annualGain,
    annualROI,
    totalROI,
  };
};

export const getEmptyScenarioData = (): ScenarioData => ({
  annualSiteProfit: "",
  currentConversionRate: "",
  improvedConversionRate: "",
  improvementCost: "",
  expectedProjectLife: "",
});
