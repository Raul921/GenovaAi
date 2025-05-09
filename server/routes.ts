import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ScanStatus, insertPatientSchema, insertScanSchema, insertUserSchema } from "@shared/schema";
import { randomUUID } from "crypto";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simulate AI analysis
function simulateAIAnalysis(scanId: string) {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      // Generate analysis results
      const results = {
        regions: [
          { name: "Region A", abnormality: true, confidence: 87, status: "Needs Review" },
          { name: "Region B", abnormality: false, confidence: 4, status: "Normal" },
          { name: "Region C", abnormality: false, confidence: 2, status: "Normal" },
          { name: "Region D", abnormality: true, confidence: 62, status: "Needs Review" }
        ],
        findings: [
          { name: "Finding 1", confidence: 87, status: "Needs Review" },
          { name: "Finding 2", confidence: 62, status: "Needs Review" },
          { name: "Finding 3", confidence: 12, status: "Normal" }
        ],
        summary: "The scan shows generally normal brain structure with two regions of interest that require further examination. Region A shows a small abnormality with 87% confidence, which should be evaluated by a radiologist. Region D shows a potential area of interest with lower confidence (62%).",
        recommendations: [
          "Clinical correlation recommended",
          "Radiologist review of highlighted areas",
          "Consider follow-up imaging in 3-6 months"
        ]
      };
      
      resolve(results);
    }, 5000); // Simulate a 5 second analysis
  });
}

// API для отправки электронных писем
async function sendEmail(data: any) {
  console.log('Отправка email:', data);
  // Здесь была бы реальная отправка email
  return { success: true };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up routes for API endpoints
  const apiRouter = app.use("/api", (req, res, next) => {
    // Middleware for API routes
    next();
  });
  
  // Эндпоинт для отправки сообщений с формы контактов
  app.post("/api/sendEmail", async (req: Request, res: Response) => {
    try {
      const { name, email, phone, message, contactMethod, countryCode } = req.body;
      
      if (!name || !email || !phone) {
        return res.status(400).json({ success: false, message: "Пожалуйста, заполните все обязательные поля" });
      }
      
      // Формируем данные для отправки
      const emailData = {
        to: "info@genova.ai", // Адрес получателя
        subject: "Новая заявка с сайта",
        name,
        email,
        phone: `${countryCode} ${phone}`,
        message,
        contactMethod,
        date: new Date().toISOString()
      };
      
      // Отправляем письмо
      const result = await sendEmail(emailData);
      
      if (result.success) {
        return res.status(200).json({ success: true, message: "Ваша заявка успешно отправлена!" });
      } else {
        return res.status(500).json({ success: false, message: "Не удалось отправить заявку" });
      }
    } catch (error) {
      console.error("Ошибка отправки email:", error);
      return res.status(500).json({ success: false, message: "Внутренняя ошибка сервера" });
    }
  });

  // Auth routes
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }

      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // In a real app, would use proper auth (JWT, sessions, etc.)
      return res.status(200).json({ 
        id: user.id, 
        username: user.username,
        fullName: user.fullName,
        role: user.role
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // User routes
  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const userResult = insertUserSchema.safeParse(req.body);
      
      if (!userResult.success) {
        return res.status(400).json({ message: "Invalid user data", errors: userResult.error.format() });
      }

      const existingUser = await storage.getUserByUsername(userResult.data.username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }

      const user = await storage.createUser(userResult.data);
      
      return res.status(201).json({
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        role: user.role
      });
    } catch (error) {
      console.error("Create user error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Patient routes
  app.post("/api/patients", async (req: Request, res: Response) => {
    try {
      const patientResult = insertPatientSchema.safeParse(req.body);
      
      if (!patientResult.success) {
        return res.status(400).json({ message: "Invalid patient data", errors: patientResult.error.format() });
      }

      const existingPatient = await storage.getPatientByPatientId(patientResult.data.patientId);
      if (existingPatient) {
        return res.status(409).json({ message: "Patient ID already exists" });
      }

      const patient = await storage.createPatient(patientResult.data);
      
      return res.status(201).json(patient);
    } catch (error) {
      console.error("Create patient error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/patients", async (_req: Request, res: Response) => {
    try {
      const patients = await storage.listPatients();
      return res.status(200).json(patients);
    } catch (error) {
      console.error("List patients error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Scan routes
  app.post("/api/scans", async (req: Request, res: Response) => {
    try {
      // In a real app, we would handle file uploads
      // For this demo, we'll just create the scan record
      
      // Generate a scan ID (normally this would be based on the uploaded file)
      const scanId = `SC-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const scanData = {
        ...req.body,
        scanId
      };
      
      const scanResult = insertScanSchema.safeParse(scanData);
      
      if (!scanResult.success) {
        return res.status(400).json({ message: "Invalid scan data", errors: scanResult.error.format() });
      }

      const scan = await storage.createScan(scanResult.data);
      
      return res.status(201).json(scan);
    } catch (error) {
      console.error("Create scan error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/scans", async (_req: Request, res: Response) => {
    try {
      const scans = await storage.listScans();
      return res.status(200).json(scans);
    } catch (error) {
      console.error("List scans error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/scans/recent", async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 5;
      const recentScans = await storage.getRecentScans(limit);
      return res.status(200).json(recentScans);
    } catch (error) {
      console.error("Recent scans error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/scans/stats", async (_req: Request, res: Response) => {
    try {
      const stats = await storage.getStats();
      return res.status(200).json(stats);
    } catch (error) {
      console.error("Scan stats error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/scans/:id", async (req: Request, res: Response) => {
    try {
      const scan = await storage.getScanByScanId(req.params.id);
      
      if (!scan) {
        return res.status(404).json({ message: "Scan not found" });
      }
      
      return res.status(200).json(scan);
    } catch (error) {
      console.error("Get scan error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/scans/:id/analyze", async (req: Request, res: Response) => {
    try {
      const scan = await storage.getScanByScanId(req.params.id);
      
      if (!scan) {
        return res.status(404).json({ message: "Scan not found" });
      }
      
      // Update status to processing
      await storage.updateScanStatus(scan.id, ScanStatus.PROCESSING);
      
      // In a real app, we would trigger the AI analysis here
      // For this demo, we'll just simulate the process
      const results = await simulateAIAnalysis(scan.scanId);
      
      // Update the scan with completed status and results
      const updatedScan = await storage.updateScanStatus(scan.id, ScanStatus.COMPLETED, results);
      
      return res.status(200).json(updatedScan);
    } catch (error) {
      console.error("Analyze scan error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
