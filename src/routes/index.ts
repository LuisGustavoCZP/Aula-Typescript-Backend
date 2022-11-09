import { Router } from "express";
import accountRouter from "./accounts";
const router = Router();

router.use("/accounts", accountRouter);

export default router;