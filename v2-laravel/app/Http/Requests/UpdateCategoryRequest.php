<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->hasRole('admin');
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('name')) {
            $this->merge([
                'name' => mb_convert_case(trim($this->name), MB_CASE_TITLE, 'UTF-8'),
            ]);
        }
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:100',
                Rule::unique('categories')->ignore($this->route('category')),
                'regex:/^[\pL\s\-]+$/u',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre de la categoría es obligatorio.',
            'name.unique' => 'Esta categoría ya existe.',
            'name.regex' => 'El nombre solo puede contener letras, espacios y guiones.',
        ];
    }
}
