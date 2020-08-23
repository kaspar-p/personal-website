import express from "express";

import mochaRoutes from "./mocha.js";
import generalRoutes from "./routes.js";

const router = express.Router();

router.use("/mocha", mochaRoutes);
router.use("/", generalRoutes);

export default router;
