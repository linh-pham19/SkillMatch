import { Router } from "express";
import { prisma } from "../../config/prisma";

const router = Router();

router.get("/", async (req, res) => {
  const jobs = await prisma.job.findMany();
  res.json(jobs);
});

export default router;
