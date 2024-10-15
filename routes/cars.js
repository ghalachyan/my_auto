import { Router } from 'express';
import carsSchema from '../schemas/cars.js';
import validate from '../middleware/validate.js';
import controller from '../controllers/cars.controller.js';

const router = Router();

router.get(
    '/brands',
    controller.getBrands
);

router.get(
    '/models',
    validate(carsSchema.getModels, 'query'),
    controller.getModels
);

export default router;