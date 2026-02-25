<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductCatalogController extends Controller
{
    public function __invoke(Request $request)
    {
        $brands = Brand::active()->orderBy('name')->get(['id', 'name']);

        $products = Product::active()
            ->with('brand')
            ->when($request->query('brand'), fn ($q, $brand) =>
                $q->where('brand_id', $brand)
            )
            ->search($request->query('q'))
            ->orderBy('name')
            ->paginate(24)
            ->withQueryString();

        return Inertia::render('Products', [
            'products' => $products,
            'brands' => $brands,
            'filters' => [
                'brand' => $request->query('brand', ''),
                'q' => $request->query('q', ''),
            ],
        ]);
    }
}
