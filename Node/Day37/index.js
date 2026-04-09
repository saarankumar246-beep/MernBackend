import express from "express";

const app = express();
const PORT = 5000;

// Middleware (important for POST body)
app.use(express.json());

// Route Mounting
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

// Check API
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});