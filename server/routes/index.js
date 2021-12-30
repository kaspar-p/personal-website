import express from "express";

import updateRoutes from "./updates/index.js";
import rsRoutes from "./rs/index.js";
import userCountRoutes from "./user-count/index.js";
import dlRoutes from "./dl/index.js";

const router = express.Router();

router.use("/updates", updateRoutes);
router.use("/rs", rsRoutes);
router.use("/user-count", userCountRoutes);
router.use("/dl", dlRoutes);

export default router;
