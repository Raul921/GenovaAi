import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import StatCard from "./StatCard";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Scan, ScanStatus } from "@/types";
import { formatDateString } from "@/lib/utils";

export default function Dashboard() {
  const [, navigate] = useLocation();

  const { data: stats, isLoading: statsLoading } = useQuery<{
    total: number;
    processing: number;
    completed: number;
    failed: number;
  }>({
    queryKey: ['/api/scans/stats'],
  });

  const { data: recentScans, isLoading: scansLoading } = useQuery<Scan[]>({
    queryKey: ['/api/scans/recent'],
  });

  function handleNewScan() {
    navigate("/upload");
  }

  function viewScanDetails(scanId: string) {
    navigate(`/scan/${scanId}`);
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back to GENOVA</p>
        </div>
        <Button onClick={handleNewScan} className="mt-2 lg:mt-0">
          <Plus className="mr-2 h-5 w-5" />
          New Scan
        </Button>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total Scans"
          value={statsLoading ? "Loading..." : `${stats?.total || 0}`}
          description={statsLoading ? "" : "All scans uploaded"}
          icon={<FileText className="h-8 w-8" />}
          color="primary"
        />
        <StatCard 
          title="Processing"
          value={statsLoading ? "Loading..." : `${stats?.processing || 0}`}
          description="Scans in analysis"
          icon={<Clock className="h-8 w-8" />}
          color="secondary"
        />
        <StatCard 
          title="Completed"
          value={statsLoading ? "Loading..." : `${stats?.completed || 0}`}
          description="Successfully analyzed"
          icon={<CheckCircle className="h-8 w-8" />}
          color="success"
        />
        <StatCard 
          title="Failed"
          value={statsLoading ? "Loading..." : `${stats?.failed || 0}`}
          description="Requires attention"
          icon={<AlertCircle className="h-8 w-8" />}
          color="error"
        />
      </div>
      
      {/* Recent scans */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Scans</h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Scan Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {scansLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">Loading recent scans...</td>
                </tr>
              ) : recentScans?.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">No scans found. Upload your first scan!</td>
                </tr>
              ) : (
                recentScans?.map((scan) => (
                  <tr key={scan.id} className="hover">
                    <td>#{scan.scanId}</td>
                    <td>{scan.patientName || 'Unknown'}</td>
                    <td>{scan.scanType}</td>
                    <td>{formatDateString(scan.uploadDate)}</td>
                    <td>
                      <span className={`badge ${
                        scan.status === ScanStatus.COMPLETED ? 'bg-green-100 text-green-800' : 
                        scan.status === ScanStatus.PROCESSING ? 'bg-yellow-100 text-yellow-800' : 
                        scan.status === ScanStatus.FAILED ? 'bg-red-100 text-red-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {scan.status.charAt(0).toUpperCase() + scan.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => viewScanDetails(scan.scanId)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!scansLoading && recentScans && recentScans.length > 0 && (
          <div className="flex justify-center mt-4">
            <div className="join">
              <button className="join-item btn btn-sm">«</button>
              <button className="join-item btn btn-sm btn-active">1</button>
              <button className="join-item btn btn-sm">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">»</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
