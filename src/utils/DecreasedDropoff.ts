import { monitorEventLoopDelay } from "perf_hooks";

export interface ROIResults {
  totalGain: number;
  annualGain: number;
  annualROI: number;
  totalROI: number;
}

export interface ScenarioData {
  preDesignRate: string;
  postDesignRate: string;
  monthlyPageTraffic: string;
  orderSize: string;
  profilePerOrder: string;
  cost: string;
  projectLife: string;
}

export const calculateROIResults = (formData: ScenarioData): ROIResults => {
  const i = 0.05; // Interest rate (assumed 0.05 or 5%)
  const preDesignRate = parseFloat(formData.preDesignRate) / 100 || 0;
  const postDesignRate = parseFloat(formData.postDesignRate) / 100 || 0;
  const monthlyPageTraffic = parseFloat(formData.monthlyPageTraffic) || 0;
  const orderSize = parseFloat(formData.orderSize) || 0;
  const profilePerOrder = parseFloat(formData.profilePerOrder) / 100 || 0;
  const cost = parseFloat(formData.cost) || 0;
  const projectLife = parseFloat(formData.projectLife) || 0;

  // Rate Calculation
  const monthlyDropOff = (preDesignRate - postDesignRate) * monthlyPageTraffic;

  // Future Gain from Improvement Calculation
  const futureGain =
    (monthlyDropOff *
      orderSize *
      profilePerOrder *
      12 *
      (Math.pow(1 + i, projectLife) - 1)) /
      i -
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
  preDesignRate: "",
  postDesignRate: "",
  monthlyPageTraffic: "",
  orderSize: "",
  profilePerOrder: "",
  cost: "",
  projectLife: "",
});
