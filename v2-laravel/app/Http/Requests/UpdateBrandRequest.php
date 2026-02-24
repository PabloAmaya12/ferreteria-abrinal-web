<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBrandRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->hasRole('admin');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('brands')->ignore($this->route('brand'))],
            'category_id' => ['required', 'exists:categories,id'],
            'image_url' => ['nullable', 'string', 'max:500'],
            'link' => ['nullable', 'url', 'max:500'],
            'active' => ['boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre de la marca es obligatorio.',
            'name.unique' => 'Esta marca ya existe.',
            'category_id.required' => 'Selecciona una categoría.',
            'category_id.exists' => 'La categoría seleccionada no existe.',
            'link.url' => 'El enlace debe ser una URL válida.',
        ];
    }
}
