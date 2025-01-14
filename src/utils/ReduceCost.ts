export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  reduction: string;
  targetUsers: string;
  duration: string;
  traineeSalary: string;
  trainerSalary: string;
  classes: string;
  daysPerYear: string;
  workHoursPerDay: string;
  improvementCost: string;
  expectedProjectLife: string;
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 0.05 or 5%)
  const reduction = parseFloat(formData.reduction) / 100 || 0;
  const targetUsers = parseFloat(formData.targetUsers) || 0;
  const duration = parseFloat(formData.duration) || 0;
  const traineeSalary = parseFloat(formData.traineeSalary) || 0;
  const trainerSalary = parseFloat(formData.trainerSalary) || 0;
  const classes = parseFloat(formData.classes) || 0;
  const daysPerYear = parseFloat(formData.daysPerYear) || 0;
  const workHoursPerDay = parseFloat(formData.workHoursPerDay) || 0;
  const improvementCost = parseFloat(formData.improvementCost) || 0;
  const expectedProjectLife = parseFloat(formData.expectedProjectLife) || 0;

  // Hourly Rate Calculation
  const traineeHourlyWages = traineeSalary / (daysPerYear * workHoursPerDay);
  const trainerHourlyWages = trainerSalary / (daysPerYear * workHoursPerDay);

  // Future Gain from Improvement Calculation
  const futureGain =
    ((targetUsers * traineeHourlyWages * duration +
      classes * trainerHourlyWages * duration) *
      reduction *
      (Math.pow(1 + i, expectedProjectLife) - 1)) /
      i -
    improvementCost * Math.pow(1 + i, expectedProjectLife);

  const totalGain = futureGain / Math.pow(1 + i, expectedProjectLife);

  // Annual Gain Calculation
  const annualGain = totalGain / expectedProjectLife;

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
  reduction: "",
  targetUsers: "",
  duration: "",
  traineeSalary: "",
  trainerSalary: "",
  classes: "",
  daysPerYear: "",
  workHoursPerDay: "",
  improvementCost: "",
  expectedProjectLife: "",
});
