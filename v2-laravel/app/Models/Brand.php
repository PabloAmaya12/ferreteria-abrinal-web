<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Brand extends Model
{
    protected $fillable = [
        'name',
        'category_id',
        'image_url',
        'link',
        'active',
        'sort_order',
    ];

    protected $casts = [
        'active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeActive($query)
    {
        return $query->where('active', true);
    }

    public function scopeByCategory($query, ?string $category)
    {
        if ($category && $category !== 'all') {
            return $query->whereHas('category', fn ($q) => $q->where('slug', $category));
        }
        return $query;
    }

    public function scopeSearch($query, ?string $term)
    {
        if ($term) {
            return $query->where('name', 'like', "%{$term}%");
        }
        return $query;
    }
}
