import {Router} from "express";
import { register, list, update } from "../controllers";

const router = Router();

router.post("/users/", register);
router.get("/users/", list);
router.patch("/users/", update);

export {router};