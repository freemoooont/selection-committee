import express from "express";
import program from "./program";


const router = express.Router();

router.use('/program', program);

export default router;