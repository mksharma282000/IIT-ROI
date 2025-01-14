export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  changeInTimeTaken: string;
  numberOfUsers: string;
  annualSalary: string;
  daysPerYear: string;
  workHoursPerDay: string;
  improvementCost: string;
  expectedProjectLife: string;
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 0.05 or 5%)
  const changeInTimeTaken = parseFloat(formData.changeInTimeTaken) || 0;
  const numberOfUsers = parseFloat(formData.numberOfUsers) || 0;
  const salary = parseFloat(formData.annualSalary) || 0;
  const daysPerYear = parseFloat(formData.daysPerYear) || 0;
  const workHoursPerDay = parseFloat(formData.workHoursPerDay) || 0;
  const improvementCost = parseFloat(formData.improvementCost) || 0;
  const projectLife = parseFloat(formData.expectedProjectLife) || 0;

  // Hourly Rate Calculation

  // Future Gain from Improvement Calculation
  const futureGain =
    (numberOfUsers *
      (salary / (daysPerYear * workHoursPerDay)) *
      changeInTimeTaken *
      (Math.pow(1 + i, projectLife) - 1)) /
      i -
    improvementCost * Math.pow(1 + i, projectLife);

  // Total Gain from Improvement (Discounted Cash Flow)
  const totalGain = futureGain / Math.pow(1 + i, projectLife);

  // Annual Gain Calculation
  const annualGain = totalGain / projectLife;

  // ROI Calculations
  const annualROI = (annualGain / improvementCost) * 100;
  const totalROI = (totalGain / improvementCost) * 100;

  return {
    totalGain,
    annualGain,
    annualROI,
    totalROI,
  };
};

export const getEmptyScenarioData = (): ScenarioData => ({
  changeInTimeTaken: "",
  numberOfUsers: "",
  annualSalary: "",
  daysPerYear: "",
  workHoursPerDay: "",
  improvementCost: "",
  expectedProjectLife: "",
});
