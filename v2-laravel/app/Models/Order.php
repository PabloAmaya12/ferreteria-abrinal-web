<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'folio', 'user_id', 'total', 'status', 'notes',
    ];

    protected $casts = [
        'total' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)
            ->withPivot('quantity', 'unit_price');
    }

    public static function generateFolio(): string
    {
        $letter = chr(random_int(65, 90));
        $digits = str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT);
        $folio = $letter . $digits;

        while (static::where('folio', $folio)->exists()) {
            $letter = chr(random_int(65, 90));
            $digits = str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT);
            $folio = $letter . $digits;
        }

        return $folio;
    }
}
