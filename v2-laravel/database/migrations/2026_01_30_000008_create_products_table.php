<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('sku')->unique();
            $table->decimal('prec_pub', 10, 2);
            $table->decimal('prec_may', 10, 2);
            $table->decimal('prec_min', 10, 2);
            $table->foreignId('brand_id')->constrained()->cascadeOnDelete();
            $table->string('image_url')->nullable();
            $table->integer('stock')->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();

            $table->index(['brand_id', 'active']);
            $table->index('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
