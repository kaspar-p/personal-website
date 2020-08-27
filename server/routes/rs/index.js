import express from "express";
import childProcess from "child_process";

const router = express.Router();

// -------------------------
//    REED-SOLOMON ROUTES
// -------------------------

// For the Reed-Solomon encoder/decoder in projects
router.post("/program", async (req, res) => {
  // Run the java program
  try {
    childProcess.exec(
      "cd client/src/assets/code " + "&& java qrcode/Main " + req.body.message,
      (err, stdout, stderr) => {
        if (err) console.log(err);
        if (stderr) console.log(stderr.toString());
        const dataArray = stdout.split("\n").slice(0, -1);
        // Return the data back to the page that wanted it
        return res.send(dataArray);
      }
    );
  } catch (error) {
    return res.json({
      ERROR: error,
    });
  }
});

// Sends back the PDF file of the paper
router.get("/paper", async (req, res) => {
  return res.sendFile("OntheConstructionofReedSolomonCodes.pdf", {
    root: "client/public/",
  });
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/rs/test",
    method: "GET",
    status: "SUCCESS",
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/rs/test",
    method: "POST",
    status: "SUCCESS",
  });
});

export default router;
