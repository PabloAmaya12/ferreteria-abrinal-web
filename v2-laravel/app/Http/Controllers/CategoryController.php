<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Categories', [
            'categories' => Category::withCount('brands')
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    public function store(StoreCategoryRequest $request)
    {
        Category::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return back()->with('success', 'Categoría creada correctamente.');
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return back()->with('success', 'Categoría actualizada correctamente.');
    }

    public function destroy(Category $category)
    {
        if ($category->brands()->count() > 0) {
            return back()->withErrors(['error' => "No se puede eliminar: esta categoría tiene {$category->brands()->count()} marca(s) asociada(s)."]);
        }

        $category->delete();

        return back()->with('success', 'Categoría eliminada correctamente.');
    }
}
