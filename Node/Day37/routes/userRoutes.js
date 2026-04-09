import express from "express";

const router = express.Router();

// ✅ 1. Check API (GET)
router.get("/", (req, res) => {
  res.json({ message: "User API working ✅" });
});

// ✅ 2. Params Example
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User ID received",
    id: userId,
  });
});

// ✅ 3. POST Body Data
router.post("/", (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: "Data received successfully",
    name,
    age,
  });
});

export default router;