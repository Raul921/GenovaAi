import { useParams } from "wouter";
import ScanResults from "@/components/results/ScanResults";

export default function ScanDetailsPage() {
  const params = useParams<{ id: string }>();
  
  if (!params.id) {
    return <div>Scan ID is required</div>;
  }

  return <ScanResults scanId={params.id} />;
}
