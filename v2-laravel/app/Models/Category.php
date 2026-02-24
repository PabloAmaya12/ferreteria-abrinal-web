<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Category extends Model
{
    public $timestamps = false;

    protected $fillable = ['name', 'slug', 'sort_order'];

    public function brands(): HasMany
    {
        return $this->hasMany(Brand::class)->orderBy('name');
    }

    protected static function booted(): void
    {
        static::creating(function (Category $category) {
            $category->slug = $category->slug ?: Str::slug($category->name);
        });

        static::saved(function () {
            static::reorderAlphabetically();
        });

        static::deleted(function () {
            static::reorderAlphabetically();
        });
    }

    public static function reorderAlphabetically(): void
    {
        $categories = static::orderByRaw('LOWER(name) ASC')->get();
        foreach ($categories as $i => $category) {
            static::withoutEvents(function () use ($category, $i) {
                $category->update(['sort_order' => $i]);
            });
        }
    }
}
