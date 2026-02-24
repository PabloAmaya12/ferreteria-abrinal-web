<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Models\Brand;
use App\Models\Category;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Brands', [
            'brands' => Brand::with('category')
                ->orderBy('sort_order')
                ->paginate(30),
            'categories' => Category::orderBy('sort_order')->get(['id', 'name']),
        ]);
    }

    public function store(StoreBrandRequest $request)
    {
        $maxOrder = Brand::max('sort_order') ?? -1;

        Brand::create([
            'name' => $request->name,
            'category_id' => $request->category_id,
            'image_url' => $request->image_url,
            'link' => $request->link,
            'active' => $request->boolean('active', true),
            'sort_order' => $maxOrder + 1,
        ]);

        return back()->with('success', 'Marca creada correctamente.');
    }

    public function update(UpdateBrandRequest $request, Brand $brand)
    {
        $brand->update([
            'name' => $request->name,
            'category_id' => $request->category_id,
            'image_url' => $request->image_url,
            'link' => $request->link,
            'active' => $request->boolean('active', $brand->active),
        ]);

        return back()->with('success', 'Marca actualizada correctamente.');
    }

    public function destroy(Brand $brand)
    {
        $brand->delete();

        return back()->with('success', 'Marca eliminada correctamente.');
    }
}
