<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function __invoke(Request $request)
    {
        $categories = Category::orderBy('sort_order')->get();

        $brands = Brand::active()
            ->with('category')
            ->byCategory($request->query('category'))
            ->search($request->query('q'))
            ->orderBy('sort_order')
            ->paginate(24)
            ->withQueryString();

        return Inertia::render('Catalog', [
            'brands' => $brands,
            'categories' => $categories,
            'filters' => [
                'category' => $request->query('category', 'all'),
                'q' => $request->query('q', ''),
            ],
        ]);
    }
}
