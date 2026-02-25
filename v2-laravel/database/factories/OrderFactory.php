<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    public function definition(): array
    {
        return [
            'folio' => Order::generateFolio(),
            'user_id' => User::inRandomOrder()->value('id') ?? 1,
            'total' => 0,
            'status' => fake()->randomElement(['pendiente', 'procesando', 'completado', 'cancelado']),
            'notes' => fake()->optional(0.3)->sentence(),
            'created_at' => fake()->dateTimeBetween('-6 months', 'now'),
        ];
    }
}
