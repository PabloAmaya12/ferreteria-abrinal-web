<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Brand;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Products', [
            'products' => Product::with('brand')
                ->orderBy('name')
                ->paginate(30),
            'brands' => Brand::active()->orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated());

        return back()->with('success', 'Producto creado correctamente.');
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return back()->with('success', 'Producto actualizado correctamente.');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return back()->with('success', 'Producto eliminado correctamente.');
    }
}
