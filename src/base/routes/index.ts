import {Router} from "express";
import {router as userRouter} from "../../users";

const router = Router();

router.use(userRouter);

export {router};