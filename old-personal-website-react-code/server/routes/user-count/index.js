import express from "express";
import UserCount from "../../models/UserCount.js";

const router = express.Router();

// -------------------
//    UPDATE ROUTES
// -------------------

// Gets updates when the 'recent updates' page is visited
router.post("/set/:count", async (req, res) => {
  const { count } = req.params;

  const userCount = await UserCount.findOne();
  userCount.count = count;
  try {
    userCount.save();
  } catch (error) {
    res.json({ error });
  }

  res.json({ SUCCESS: "Set userCount to: " + count });
});

// -----------------
//    TEST ROUTES
// -----------------

// Test GET method
router.get("/test", (req, res) => {
  return res.json({
    path: "/api/user-count/test",
    method: "GET",
    status: "SUCCESS",
  });
});

// Test POST method
router.post("/test", (req, res) => {
  return res.json({
    path: "/api/user-count/test",
    method: "POST",
    status: "SUCCESS",
  });
});

export default router;
