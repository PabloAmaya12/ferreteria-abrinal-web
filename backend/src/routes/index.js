import { Router } from 'express';
import healthRoutes from './health.routes.js';
import brandRoutes from './brands.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/brands', brandRoutes);

export default router;
