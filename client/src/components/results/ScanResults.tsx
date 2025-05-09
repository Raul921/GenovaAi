import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  Share2,
  FileEdit,
  Eye,
  Search,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { formatDateString } from "@/lib/utils";
import { Scan, ScanStatus } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

type ScanResultsProps = {
  scanId: string;
};

export default function ScanResults({ scanId }: ScanResultsProps) {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  // Fetch scan details
  const { data: scan, isLoading, isError } = useQuery<Scan>({
    queryKey: [`/api/scans/${scanId}`],
  });

  // Start analysis mutation
  const startAnalysisMutation = useMutation({
    mutationFn: async (scanId: string) => {
      const response = await apiRequest("POST", `/api/scans/${scanId}/analyze`, {});
      return response.json();
    },
    onSuccess: () => {
      // Invalidate the scan query to refetch with updated status
      queryClient.invalidateQueries({ queryKey: [`/api/scans/${scanId}`] });
      queryClient.invalidateQueries({ queryKey: ['/api/scans/stats'] });
      queryClient.invalidateQueries({ queryKey: ['/api/scans/recent'] });
      
      toast({
        title: "Analysis started",
        description: "Your scan is being processed. This page will update automatically.",
      });
    },
    onError: () => {
      toast({
        title: "Analysis failed",
        description: "There was an error starting the analysis. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Poll for updates if scan is processing
  useEffect(() => {
    if (scan?.status === ScanStatus.PROCESSING) {
      const intervalId = setInterval(() => {
        queryClient.invalidateQueries({ queryKey: [`/api/scans/${scanId}`] });
      }, 2000);
      
      return () => clearInterval(intervalId);
    }
  }, [scan?.status, scanId]);
  
  function handleBackToDashboard() {
    navigate("/");
  }

  function handleDownloadReport() {
    toast({
      title: "Report downloaded",
      description: "The report has been downloaded successfully.",
    });
  }

  function handleShareResults() {
    toast({
      title: "Results shared",
      description: "A link to these results has been copied to clipboard.",
    });
  }

  function handleAddNotes() {
    toast({
      title: "Add notes",
      description: "Note taking functionality will be available soon.",
    });
  }

  function renderContent() {
    if (isLoading) {
      return <div className="text-center py-12">Loading scan details...</div>;
    }

    if (isError || !scan) {
      return (
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">Error loading scan details</p>
          <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
        </div>
      );
    }

    if (scan.status === ScanStatus.UPLOADED) {
      return (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Scan Ready for Analysis</h2>
          <p className="mb-4">This scan has been uploaded but not yet analyzed.</p>
          <Button
            onClick={() => startAnalysisMutation.mutate(scan.scanId)}
            disabled={startAnalysisMutation.isPending}
          >
            {startAnalysisMutation.isPending ? "Starting..." : "Start Analysis Now"}
          </Button>
        </div>
      );
    }

    if (scan.status === ScanStatus.PROCESSING) {
      return (
        <div className="text-center py-12">
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
                <h3 className="font-bold">Processing {scan.scanType} scan</h3>
                <AlertDescription>
                  Started at {formatDateString(scan.uploadDate, true)}
                </AlertDescription>
              </div>
            </Alert>
          </div>
        </div>
      );
    }

    if (scan.status === ScanStatus.FAILED) {
      return (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4 text-red-500">Analysis Failed</h2>
          <p className="mb-4">There was an error analyzing this scan. Please try again or contact support.</p>
          <Button
            onClick={() => startAnalysisMutation.mutate(scan.scanId)}
            disabled={startAnalysisMutation.isPending}
          >
            {startAnalysisMutation.isPending ? "Retrying..." : "Retry Analysis"}
          </Button>
        </div>
      );
    }

    // For completed scans
    return (
      <>
        {/* Patient info card */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Patient</h3>
              <p>{scan.patientName || "Unknown"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Patient ID</h3>
              <p>{scan.patientId || "Unknown"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
              <p>{scan.patientDateOfBirth || "Unknown"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Scan Date</h3>
              <p>{formatDateString(scan.uploadDate)}</p>
            </div>
          </div>
        </div>
        
        {/* MRI Visualization Tabs */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <Tabs defaultValue="analysis">
            <TabsList className="mb-4">
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="original">Original Scans</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
              <TabsTrigger value="3d">3D View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Scan visualization */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">MRI Analysis</h3>
                  <div className="relative bg-black rounded-lg" style={{ height: "400px" }}>
                    <div className="w-full h-full flex items-center justify-center text-white">
                      MRI Image Visualization
                    </div>
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <Button variant="ghost" size="icon" className="text-white">
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white">
                        <Search className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white">
                        <Maximize className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="join">
                      <Button variant="outline" size="sm" className="join-item">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="join-item">
                        Slice 14/28
                      </Button>
                      <Button variant="outline" size="sm" className="join-item">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Analysis results */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Analysis Results</h3>
                  <div className="prose">
                    <p>The AI analysis detected the following observations:</p>
                    
                    <Alert variant="warning" className="mb-4">
                      <AlertDescription>
                        AI results require verification by a qualified radiologist.
                      </AlertDescription>
                    </Alert>
                    
                    <ul>
                      {scan.results?.regions.map((region: any, index: number) => (
                        <li key={index}>
                          <strong>{region.name}:</strong> {region.abnormality ? 'Abnormality detected' : 'No abnormalities detected'} {region.abnormality && `(confidence: ${region.confidence}%)`}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold mt-4">Probability Scores</h4>
                    <div className="overflow-x-auto">
                      <table className="table table-compact w-full">
                        <thead>
                          <tr>
                            <th>Finding</th>
                            <th>Confidence</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scan.results?.findings.map((finding: any, index: number) => (
                            <tr key={index}>
                              <td>{finding.name}</td>
                              <td>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div 
                                    className="bg-green-600 h-2.5 rounded-full" 
                                    style={{ width: `${finding.confidence}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs">{finding.confidence}%</span>
                              </td>
                              <td>
                                <Badge variant={finding.status === "Needs Review" ? "outline" : "secondary"}>{finding.status}</Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="original" className="mt-0">
              <div className="text-center py-8">
                <p>Original scan images will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="comparison" className="mt-0">
              <div className="text-center py-8">
                <p>Comparison view will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="3d" className="mt-0">
              <div className="text-center py-8">
                <p>3D visualization will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Actions and Report section */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4">Actions</h3>
            <div className="space-y-2">
              <Button className="w-full" onClick={handleDownloadReport}>
                <Download className="mr-2 h-5 w-5" />
                Download Report
              </Button>
              <Button variant="outline" className="w-full" onClick={handleShareResults}>
                <Share2 className="mr-2 h-5 w-5" />
                Share Results
              </Button>
              <Button variant="outline" className="w-full" onClick={handleAddNotes}>
                <FileEdit className="mr-2 h-5 w-5" />
                Add Notes
              </Button>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4">Summary Report</h3>
            <div className="prose">
              <p>Based on the AI analysis, the following summary has been generated:</p>
              <p>{scan.results?.summary}</p>
              <p className="font-semibold">Recommendations:</p>
              <ul>
                {scan.results?.recommendations.map((rec: string, index: number) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Scan Results</h1>
            {scan && (
              <Badge className="ml-2" variant={
                scan.status === ScanStatus.COMPLETED ? "success" :
                scan.status === ScanStatus.PROCESSING ? "default" :
                scan.status === ScanStatus.FAILED ? "destructive" : "outline"
              }>
                {scan.status.charAt(0).toUpperCase() + scan.status.slice(1)}
              </Badge>
            )}
          </div>
          <p className="text-gray-600">
            {scan ? `${scan.scanType} Analysis for ${scan.patientName || "Unknown"} (#${scan.scanId})` : "Loading scan details..."}
          </p>
        </div>
        <Button variant="outline" onClick={handleBackToDashboard}>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Dashboard
        </Button>
      </div>
      
      {renderContent()}
    </div>
  );
}
