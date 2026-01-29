import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/api/ai", aiRoutes);

export default app;
