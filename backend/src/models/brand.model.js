import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    imageUrl: { type: String, trim: true },
    link: { type: String, trim: true },
    active: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

brandSchema.index({ name: 1 });
brandSchema.index({ category: 1 });

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
