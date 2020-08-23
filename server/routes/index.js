import express from "express";

import mochaRoutes from "./mocha/index.js";
import updateRoutes from "./updates/index.js";
import rsRoutes from "./rs/index.js";

const router = express.Router();

router.use("/mocha", mochaRoutes);
router.use("/updates", updateRoutes);
router.use("/rs", rsRoutes);

export default router;
