<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->hasAnyRole(['admin', 'manager']);
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'sku' => 'required|string|max:20|unique:products,sku',
            'prec_pub' => 'required|numeric|min:0',
            'prec_may' => 'required|numeric|min:0',
            'prec_min' => 'required|numeric|min:0',
            'brand_id' => 'required|exists:brands,id',
            'image_url' => 'nullable|url|max:500',
            'stock' => 'required|integer|min:0',
            'active' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del producto es obligatorio.',
            'sku.required' => 'El SKU es obligatorio.',
            'sku.unique' => 'Este SKU ya está registrado.',
            'prec_pub.required' => 'El precio público es obligatorio.',
            'prec_may.required' => 'El precio mayoreo es obligatorio.',
            'prec_min.required' => 'El precio mínimo es obligatorio.',
            'brand_id.required' => 'Selecciona una marca.',
            'brand_id.exists' => 'La marca seleccionada no existe.',
            'stock.required' => 'El stock es obligatorio.',
        ];
    }
}
