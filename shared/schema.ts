import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull().default("user"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  role: true,
});

// Patients table
export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  patientId: text("patient_id").notNull().unique(),
  name: text("name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  createdById: integer("created_by_id").notNull(),
});

export const insertPatientSchema = createInsertSchema(patients).pick({
  patientId: true,
  name: true,
  dateOfBirth: true,
  createdById: true,
});

// MRI Scans table
export const scans = pgTable("scans", {
  id: serial("id").primaryKey(),
  scanId: text("scan_id").notNull().unique(),
  patientId: integer("patient_id").notNull(),
  scanType: text("scan_type").notNull(),
  uploadDate: timestamp("upload_date").notNull().defaultNow(),
  status: text("status").notNull().default("uploaded"), // uploaded, processing, completed, failed
  userId: integer("user_id").notNull(),
  filePath: text("file_path"),
  results: jsonb("results"),
});

export const insertScanSchema = createInsertSchema(scans).pick({
  scanId: true,
  patientId: true,
  scanType: true,
  userId: true,
  filePath: true,
});

// Export types for each schema
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;

export type InsertScan = z.infer<typeof insertScanSchema>;
export type Scan = typeof scans.$inferSelect;

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
