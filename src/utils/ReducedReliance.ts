export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  callsToCallCenter: string; // # of Calls to Call Center
  callVolumeReduction: string; // Call Volume Reduction (%)
  daysPerYear: string; // Days Per Year
  workHoursPerDay: string; // Work Hours Per Day
  annualSalary: string; // Annual Salary
  averageCallLength: string; // Average Length of Call (minutes)
  improvementCost: string; // Improvement Cost
  expectedProjectLife: string; // Expected Project Life (Years)
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 0.05 or 5%)
  const callsToCallCenter = parseFloat(formData.callsToCallCenter) || 0;
  const callVolumeReduction = parseFloat(formData.callVolumeReduction) || 0;
  const daysPerYear = parseFloat(formData.daysPerYear) || 0;
  const workHoursPerDay = parseFloat(formData.workHoursPerDay) || 0;
  const salary = parseFloat(formData.annualSalary) || 0;
  const averageCallLength = parseFloat(formData.averageCallLength) || 0; // in minutes
  const cost = parseFloat(formData.improvementCost) || 0;
  const projectLife = parseFloat(formData.expectedProjectLife) || 0;

  // Rate Calculation
  const hourlyRate = salary / (daysPerYear * workHoursPerDay);
  const callVolume = callVolumeReduction / 100;
  const a = averageCallLength / 60;

  // Future Gain from Improvement Calculation
  const futureGains =
    callsToCallCenter *
      callVolume *
      (Math.round(a * 100) / 100) *
      hourlyRate *
      ((Math.pow(1 + i, projectLife) - 1) / i) -
    cost * Math.pow(1 + i, projectLife);
  console.log(futureGains);

  const totalGain = futureGains / Math.pow(1 + i, projectLife);

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
  callsToCallCenter: "",
  callVolumeReduction: "",
  daysPerYear: "",
  workHoursPerDay: "",
  annualSalary: "",
  averageCallLength: "",
  improvementCost: "",
  expectedProjectLife: "",
});
