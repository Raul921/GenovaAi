// Export status enums for better type checking
export const ScanStatus = {
  UPLOADED: "uploaded",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

export type ScanStatusType = typeof ScanStatus[keyof typeof ScanStatus];

export const ScanType = {
  BRAIN: "Brain MRI",
  SPINE: "Spine MRI",
  KNEE: "Knee MRI",
  SHOULDER: "Shoulder MRI",
  OTHER: "Other",
} as const;

export type ScanTypeType = typeof ScanType[keyof typeof ScanType];

// Define scan type
export interface Scan {
  id: number;
  scanId: string;
  patientId: number;
  patientName?: string;
  patientDateOfBirth?: string;
  scanType: string;
  uploadDate: string;
  status: ScanStatusType;
  userId: number;
  filePath?: string;
  results: any;
}

// Define patient type
export interface Patient {
  id: number;
  patientId: string;
  name: string;
  dateOfBirth: string;
  createdById: number;
}

// Define user type
export interface User {
  id: number;
  username: string;
  fullName: string;
  role: string;
}
