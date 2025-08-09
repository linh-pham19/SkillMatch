// express app setup
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./modules/jobs/job.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/jobs", jobRoutes);

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default app;
