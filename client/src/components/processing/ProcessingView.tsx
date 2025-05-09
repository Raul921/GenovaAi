import { useEffect } from "react";
import { ScanStatus } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { formatDateString } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";

type ProcessingViewProps = {
  scanId: string;
  onComplete: () => void;
};

export default function ProcessingView({ scanId, onComplete }: ProcessingViewProps) {
  const { data: scan, isLoading } = useQuery({
    queryKey: [`/api/scans/${scanId}`],
  });

  // Poll for updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: [`/api/scans/${scanId}`] });
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, [scanId]);

  // Check if processing is complete
  useEffect(() => {
    if (scan && scan.status !== ScanStatus.PROCESSING) {
      onComplete();
    }
  }, [scan, onComplete]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Processing Scan</h1>
          <p className="text-gray-600">Your scan is being analyzed by our AI system</p>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="radial-progress text-primary" style={{ "--value": 65, "--size": "12rem", "--thickness": "2rem" } as any}>65%</div>
          <h2 className="text-xl font-semibold mt-6">AI Analysis in Progress</h2>
          <p className="text-gray-600 mt-2">Please wait while our AI analyzes your MRI scan. This process typically takes 3-5 minutes.</p>
          
          <div className="w-full max-w-md mt-8">
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
              <li className="step step-primary">Upload Complete</li>
              <li className="step step-primary">Preprocessing</li>
              <li className="step step-primary">AI Analysis</li>
              <li className="step">Generating Report</li>
            </ul>
          </div>
          
          <Alert className="mt-8">
            <div>
              <h3 className="font-bold">Processing {scan?.scanType} scan</h3>
              <AlertDescription>
                Started at {scan ? formatDateString(scan.uploadDate, true) : ""}
              </AlertDescription>
            </div>
          </Alert>
          
          <button className="btn btn-outline mt-8">Cancel Processing</button>
        </div>
      </div>
    </div>
  );
}
