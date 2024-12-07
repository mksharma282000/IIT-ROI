import { useState } from "react";
import ROICalculator from "@/components/ROICalculator";
import SingleROICalculator from "@/components/SingleROICalculator";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeView, setActiveView] = useState<'productivity' | 'compare'>('productivity');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => setActiveView('productivity')}
            variant={activeView === 'productivity' ? 'default' : 'outline'}
          >
            Calculate Increased Productivity
          </Button>
          <Button 
            onClick={() => setActiveView('compare')}
            variant={activeView === 'compare' ? 'default' : 'outline'}
          >
            Compare ROIs
          </Button>
        </div>

        <div className="flex items-center justify-center">
          {activeView === 'productivity' ? (
            <SingleROICalculator />
          ) : (
            <ROICalculator />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;