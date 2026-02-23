<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Abrasivos', 'Adhesivos', 'Automotriz', 'Carbones', 'Cerrajería',
            'Cintas', 'Electricidad', 'Herramientas', 'Higiene', 'Lubricantes',
            'Pilas', 'Pintura', 'Plomería', 'Seguridad', 'Selladores',
            'Soldadura', 'Trefilados',
        ];

        foreach ($categories as $i => $name) {
            Category::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name, 'sort_order' => $i]
            );
        }
    }
}
