import express from "express";

const router = express.Router();

// -------------------------
//    REED-SOLOMON ROUTES
// -------------------------

// Sends back the PDF file of the paper
router.get("/resume", async (req, res) => {
  return res.sendFile("KasparPoland_Resume.pdf", {
    root: "client/public/",
  });
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/dl/test",
    method: "GET",
    status: "SUCCESS",
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/dl/test",
    method: "POST",
    status: "SUCCESS",
  });
});

export default router;
