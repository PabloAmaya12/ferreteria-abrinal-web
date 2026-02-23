import Brand from '../models/brand.model.js';

export const listBrands = async ({ category, q, page, limit }) => {
  const filter = {};
  if (category) {
    filter.category = category;
  }
  if (q) {
    filter.name = { $regex: q, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Brand.find(filter)
      .sort({ sortOrder: 1, name: 1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Brand.countDocuments(filter),
  ]);

  return {
    items,
    total,
    page,
    limit,
    pages: Math.ceil(total / limit) || 1,
  };
};

export const getBrandById = async (id) => Brand.findById(id).lean();

export const createBrand = async (data) => Brand.create(data);

export const updateBrand = async (id, data) =>
  Brand.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();

export const deleteBrand = async (id) => Brand.findByIdAndDelete(id).lean();
