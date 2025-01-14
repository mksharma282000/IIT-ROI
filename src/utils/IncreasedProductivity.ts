export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  users: string;
  usesPerDay: string;
  daysPerYear: string;
  workHoursPerDay: string;
  annualSalary: string;
  increaseInEfficiency: string;
  improvementCost: string;
  expectedProjectLife: string;
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 0.05 or 5%)
  const users = parseFloat(formData.users) || 0;
  const usesPerDay = parseFloat(formData.usesPerDay) || 0;
  const daysPerYear = parseFloat(formData.daysPerYear) || 0;
  const salary = parseFloat(formData.annualSalary) || 0;
  const efficiency = parseFloat(formData.increaseInEfficiency) || 0;
  const cost = parseFloat(formData.improvementCost) || 0;
  const projectLife = parseFloat(formData.expectedProjectLife) || 0;
  const workHoursPerDay = parseFloat(formData.workHoursPerDay) || 0;

  // Hourly Rate Calculation
  const hourlyRate = salary / (daysPerYear * workHoursPerDay);
  const a = efficiency / 3600;

  // Future Gain from Improvement Calculation
  const futureGain =
    users *
      usesPerDay *
      daysPerYear *
      hourlyRate *
      (Math.round(a * 10000) / 10000) *
      ((Math.pow(1 + i, projectLife) - 1) / i) -
    cost * Math.pow(1 + i, projectLife);

  // Total Gain from Improvement (Discounted Cash Flow)
  const totalGain = futureGain / Math.pow(1 + i, projectLife);

  // Annual Gain Calculation
  const annualGain = totalGain / projectLife;

  // ROI Calculations
  const annualROI = (annualGain / cost) * 100;
  const totalROI = (totalGain / cost) * 100;

  return {
    totalGain,
    annualGain,
    annualROI,
    totalROI,
  };
};

export const getEmptyScenarioData = (): ScenarioData => ({
  users: "",
  usesPerDay: "",
  daysPerYear: "",
  workHoursPerDay: "",
  annualSalary: "",
  increaseInEfficiency: "",
  improvementCost: "",
  expectedProjectLife: "",
});
