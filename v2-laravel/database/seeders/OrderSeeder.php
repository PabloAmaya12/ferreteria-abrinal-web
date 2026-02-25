<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::factory()->count(20)->create();
        $users->each(fn ($u) => $u->assignRole('user'));

        $products = Product::all();

        Order::factory()->count(100)->create([
            'user_id' => fn () => $users->random()->id,
        ])->each(function (Order $order) use ($products) {
            $selected = $products->random(random_int(1, 5));
            $total = 0;

            foreach ($selected as $product) {
                $qty = random_int(1, 4);
                $order->products()->attach($product->id, [
                    'quantity' => $qty,
                    'unit_price' => $product->prec_pub,
                ]);
                $total += $product->prec_pub * $qty;
            }

            $order->update(['total' => $total]);
        });
    }
}
