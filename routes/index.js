import { Router } from "express";
import users from './users.js';
import cars from "./cars.js";
import regions from "./regions.js";

const router = Router();

router.use('/users', users);
router.use('/cars', cars);
router.use('/regions', regions);

export default router;