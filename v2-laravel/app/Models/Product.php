<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'sku', 'prec_pub', 'prec_may', 'prec_min',
        'brand_id', 'image_url', 'stock', 'active',
    ];

    protected $casts = [
        'prec_pub' => 'decimal:2',
        'prec_may' => 'decimal:2',
        'prec_min' => 'decimal:2',
        'stock' => 'integer',
        'active' => 'boolean',
    ];

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function scopeActive($query)
    {
        return $query->where('active', true);
    }

    public function scopeSearch($query, ?string $term)
    {
        if ($term) {
            return $query->whereRaw('LOWER(name) LIKE ?', ['%' . mb_strtolower($term) . '%']);
        }
        return $query;
    }
}
