import {
  createBrand as createBrandService,
  deleteBrand as deleteBrandService,
  getBrandById as getBrandByIdService,
  listBrands as listBrandsService,
  updateBrand as updateBrandService,
} from '../services/brands.service.js';

const notFoundError = () => {
  const error = new Error('Brand not found');
  error.status = 404;
  return error;
};

export const listBrands = async (req, res) => {
  const { category, q } = req.query;
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 20);

  const result = await listBrandsService({ category, q, page, limit });
  res.json(result);
};

export const getBrandById = async (req, res) => {
  const brand = await getBrandByIdService(req.params.id);
  if (!brand) {
    throw notFoundError();
  }
  res.json(brand);
};

export const createBrand = async (req, res) => {
  const brand = await createBrandService(req.body);
  res.status(201).json(brand);
};

export const updateBrand = async (req, res) => {
  const brand = await updateBrandService(req.params.id, req.body);
  if (!brand) {
    throw notFoundError();
  }
  res.json(brand);
};

export const deleteBrand = async (req, res) => {
  const deleted = await deleteBrandService(req.params.id);
  if (!deleted) {
    throw notFoundError();
  }
  res.status(204).send();
};
