import express from "express";
import Update from "../../models/Update.js";

const router = express.Router();

// -------------------
//    UPDATE ROUTES
// -------------------

// Gets updates when the 'recent updates' page is visited
router.get("/", async (req, res) => {
  const updates = await Update.find()
    .sort({ date: -1 })
    .then((updates) => updates);

  return res.json(updates);
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/updates/test",
    method: "GET",
    status: "SUCCESS",
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/updates/test",
    method: "POST",
    status: "SUCCESS",
  });
});

export default router;
