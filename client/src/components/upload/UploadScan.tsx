import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FileDropzone from "./FileDropzone";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ScanType } from "@/types";

// Form validation schema
const uploadFormSchema = z.object({
  patientName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  patientId: z.string().min(1, { message: "Patient ID is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  scanType: z.string().min(1, { message: "Scan type is required" }),
});

type UploadFormValues = z.infer<typeof uploadFormSchema>;

export default function UploadScan() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);

  // Create form
  const form = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      patientName: "",
      patientId: "",
      dateOfBirth: "",
      scanType: "",
    },
  });

  // Create patient mutation
  const createPatientMutation = useMutation({
    mutationFn: async (data: { patientId: string; name: string; dateOfBirth: string; createdById: number }) => {
      const response = await apiRequest("POST", "/api/patients", data);
      return response.json();
    },
  });

  // Create scan mutation
  const createScanMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/scans", data);
      return response.json();
    },
  });

  // Start analysis mutation
  const startAnalysisMutation = useMutation({
    mutationFn: async (scanId: string) => {
      const response = await apiRequest("POST", `/api/scans/${scanId}/analyze`, {});
      return response.json();
    },
  });

  // Handle form submission
  async function onSubmit(data: UploadFormValues) {
    try {
      if (files.length === 0) {
        toast({
          title: "No files selected",
          description: "Please upload at least one MRI scan file",
          variant: "destructive",
        });
        return;
      }

      // Create a patient (In a real app, we would check if the patient exists first)
      const patientResult = await createPatientMutation.mutateAsync({
        patientId: data.patientId,
        name: data.patientName,
        dateOfBirth: data.dateOfBirth,
        createdById: 1, // In a real app, this would be the current user's ID
      });

      // Create a scan
      const scanResult = await createScanMutation.mutateAsync({
        patientId: patientResult.id,
        scanType: data.scanType,
        userId: 1, // In a real app, this would be the current user's ID
        filePath: files[0].name, // In a real app, we would upload the file and store the path
      });

      // Start the analysis
      await startAnalysisMutation.mutateAsync(scanResult.scanId);

      // Navigate to the processing view
      navigate(`/scan/${scanResult.scanId}`);

      toast({
        title: "Analysis started",
        description: "Your scan is being processed. You'll be notified when it's complete.",
      });
    } catch (error) {
      console.error("Error uploading scan:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your scan. Please try again.",
        variant: "destructive",
      });
    }
  }

  function handleFilesAdded(newFiles: File[]) {
    setFiles(newFiles);
  }

  function handleFileRemoved(fileIndex: number) {
    setFiles(files.filter((_, index) => index !== fileIndex));
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Upload New Scan</h1>
          <p className="text-gray-600">Upload MRI scans for AI analysis</p>
        </div>
        <Button variant="outline" onClick={handleCancel}>
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Patient Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="patientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="patientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient ID</FormLabel>
                    <FormControl>
                      <Input placeholder="ID number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="scanType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Scan Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={ScanType.BRAIN}>Brain MRI</SelectItem>
                        <SelectItem value={ScanType.SPINE}>Spine MRI</SelectItem>
                        <SelectItem value={ScanType.KNEE}>Knee MRI</SelectItem>
                        <SelectItem value={ScanType.SHOULDER}>Shoulder MRI</SelectItem>
                        <SelectItem value={ScanType.OTHER}>Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Upload MRI Scans</h2>
            <FileDropzone
              onFilesAdded={handleFilesAdded}
              onFileRemoved={handleFileRemoved}
              files={files}
            />
          </div>

          <div className="flex justify-end">
            <Button 
              variant="outline" 
              type="button" 
              onClick={handleCancel}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={createPatientMutation.isPending || createScanMutation.isPending || startAnalysisMutation.isPending}
            >
              Start Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
