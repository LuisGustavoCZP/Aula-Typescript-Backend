import { Router } from "express";
import { accounts as accountsController } from "../../controllers";

const router = Router();

router.post("/login", accountsController.login);
router.post("/", accountsController.create);

export default router;