import { Router } from 'express';
import regionsSchema from '../schemas/regions.js';
import validate from '../middleware/validate.js';
import controller from '../controllers/regions.controller.js';

const router = Router();

router.get(
    '/list',
    controller.getRegions
);

router.get(
    '/countries/:regionId',
    validate(regionsSchema.getRegions, 'params'),
    controller.getRegionsCountries
);

export default router;