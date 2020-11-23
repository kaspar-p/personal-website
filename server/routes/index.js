import express from "express";

import mochaRoutes from "./mocha/index.js";
import updateRoutes from "./updates/index.js";
import rsRoutes from "./rs/index.js";
import userCountRoutes from "./user-count/index.js";

const router = express.Router();

router.use("/mocha", mochaRoutes);
router.use("/updates", updateRoutes);
router.use("/rs", rsRoutes);
router.use("/user-count", userCountRoutes);

export default router;
