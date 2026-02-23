import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/async-handler.js';
import {
  createBrand,
  deleteBrand,
  getBrandById,
  listBrands,
  updateBrand,
} from '../controllers/brands.controller.js';

const router = Router();

const brandBodySchema = z.object({
  name: z.string().min(2),
  category: z.string().min(2),
  imageUrl: z.string().url().optional(),
  link: z.string().url().optional(),
  active: z.boolean().optional(),
  sortOrder: z.number().int().nonnegative().optional(),
});

const brandUpdateSchema = brandBodySchema.partial();

const brandParamsSchema = z.object({
  id: z.string().min(1),
});

const brandQuerySchema = z.object({
  category: z.string().min(1).optional(),
  q: z.string().min(1).optional(),
  page: z.coerce.number().int().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

router.get('/', validate({ query: brandQuerySchema }), asyncHandler(listBrands));
router.get('/:id', validate({ params: brandParamsSchema }), asyncHandler(getBrandById));
router.post('/', validate({ body: brandBodySchema }), asyncHandler(createBrand));
router.patch(
  '/:id',
  validate({ params: brandParamsSchema, body: brandUpdateSchema }),
  asyncHandler(updateBrand),
);
router.delete('/:id', validate({ params: brandParamsSchema }), asyncHandler(deleteBrand));

export default router;
