<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $topBrands = Brand::active()
            ->with('category')
            ->whereIn('name', ['Austromex', 'Truper', 'Milwaukee', 'Dewalt', 'Makita', 'URREA'])
            ->orderBy('sort_order')
            ->get();

        $totalBrands = Brand::active()->count();

        return Inertia::render('Home', [
            'topBrands' => $topBrands,
            'totalBrands' => $totalBrands,
        ]);
    }
}
