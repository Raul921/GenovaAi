import {
  users,
  patients,
  scans,
  type User,
  type InsertUser,
  type Patient,
  type InsertPatient,
  type Scan,
  type InsertScan,
  ScanStatus,
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Patient operations
  getPatient(id: number): Promise<Patient | undefined>;
  getPatientByPatientId(patientId: string): Promise<Patient | undefined>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  listPatients(): Promise<Patient[]>;

  // Scan operations
  getScan(id: number): Promise<Scan | undefined>;
  getScanByScanId(scanId: string): Promise<Scan | undefined>;
  createScan(scan: InsertScan): Promise<Scan>;
  updateScanStatus(id: number, status: string, results?: any): Promise<Scan | undefined>;
  listScans(): Promise<Scan[]>;
  listScansByPatientId(patientId: number): Promise<Scan[]>;
  listScansByUserId(userId: number): Promise<Scan[]>;
  getRecentScans(limit: number): Promise<Scan[]>;
  getStats(): Promise<{ total: number, processing: number, completed: number, failed: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private patients: Map<number, Patient>;
  private scans: Map<number, Scan>;
  
  private userIdCounter: number;
  private patientIdCounter: number;
  private scanIdCounter: number;

  constructor() {
    this.users = new Map();
    this.patients = new Map();
    this.scans = new Map();
    
    this.userIdCounter = 1;
    this.patientIdCounter = 1;
    this.scanIdCounter = 1;

    // Add a demo user
    this.createUser({
      username: "doctor",
      password: "password",
      fullName: "Dr. Alex Johnson",
      role: "radiologist",
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Patient operations
  async getPatient(id: number): Promise<Patient | undefined> {
    return this.patients.get(id);
  }

  async getPatientByPatientId(patientId: string): Promise<Patient | undefined> {
    return Array.from(this.patients.values()).find(
      (patient) => patient.patientId === patientId,
    );
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = this.patientIdCounter++;
    const patient: Patient = { ...insertPatient, id };
    this.patients.set(id, patient);
    return patient;
  }

  async listPatients(): Promise<Patient[]> {
    return Array.from(this.patients.values());
  }

  // Scan operations
  async getScan(id: number): Promise<Scan | undefined> {
    return this.scans.get(id);
  }

  async getScanByScanId(scanId: string): Promise<Scan | undefined> {
    return Array.from(this.scans.values()).find(
      (scan) => scan.scanId === scanId,
    );
  }

  async createScan(insertScan: InsertScan): Promise<Scan> {
    const id = this.scanIdCounter++;
    const scan: Scan = { 
      ...insertScan, 
      id, 
      uploadDate: new Date(),
      status: ScanStatus.UPLOADED,
      results: null 
    };
    this.scans.set(id, scan);
    return scan;
  }

  async updateScanStatus(id: number, status: string, results?: any): Promise<Scan | undefined> {
    const scan = this.scans.get(id);
    if (!scan) return undefined;

    const updatedScan: Scan = {
      ...scan,
      status,
      results: results || scan.results,
    };

    this.scans.set(id, updatedScan);
    return updatedScan;
  }

  async listScans(): Promise<Scan[]> {
    return Array.from(this.scans.values());
  }

  async listScansByPatientId(patientId: number): Promise<Scan[]> {
    return Array.from(this.scans.values()).filter(
      (scan) => scan.patientId === patientId,
    );
  }

  async listScansByUserId(userId: number): Promise<Scan[]> {
    return Array.from(this.scans.values()).filter(
      (scan) => scan.userId === userId,
    );
  }

  async getRecentScans(limit: number): Promise<Scan[]> {
    return Array.from(this.scans.values())
      .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
      .slice(0, limit);
  }

  async getStats(): Promise<{ total: number, processing: number, completed: number, failed: number }> {
    const allScans = Array.from(this.scans.values());
    
    return {
      total: allScans.length,
      processing: allScans.filter(scan => scan.status === ScanStatus.PROCESSING).length,
      completed: allScans.filter(scan => scan.status === ScanStatus.COMPLETED).length,
      failed: allScans.filter(scan => scan.status === ScanStatus.FAILED).length,
    };
  }
}

export const storage = new MemStorage();
