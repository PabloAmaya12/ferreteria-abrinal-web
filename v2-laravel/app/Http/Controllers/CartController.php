<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $items = CartItem::where('user_id', $request->user()->id)
            ->with('product.brand')
            ->get();

        return Inertia::render('Cart', [
            'items' => $items,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'integer|min:1|max:99',
        ]);

        $item = CartItem::where('user_id', $request->user()->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($item) {
            $item->update(['quantity' => $item->quantity + ($request->quantity ?? 1)]);
        } else {
            CartItem::create([
                'user_id' => $request->user()->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity ?? 1,
            ]);
        }

        return back()->with('success', 'Producto agregado al carrito.');
    }

    public function update(Request $request, CartItem $cartItem)
    {
        if ($cartItem->user_id !== $request->user()->id) {
            abort(403);
        }

        $request->validate(['quantity' => 'required|integer|min:1|max:99']);
        $cartItem->update(['quantity' => $request->quantity]);

        return back()->with('success', 'Cantidad actualizada.');
    }

    public function destroy(Request $request, CartItem $cartItem)
    {
        if ($cartItem->user_id !== $request->user()->id) {
            abort(403);
        }

        $cartItem->delete();

        return back()->with('success', 'Producto eliminado del carrito.');
    }

    public function checkout(Request $request)
    {
        $items = CartItem::where('user_id', $request->user()->id)
            ->with('product')
            ->get();

        if ($items->isEmpty()) {
            return back()->withErrors(['error' => 'Tu carrito está vacío.']);
        }

        $order = Order::create([
            'folio' => Order::generateFolio(),
            'user_id' => $request->user()->id,
            'total' => 0,
            'status' => 'pendiente',
        ]);

        $total = 0;
        foreach ($items as $item) {
            $order->products()->attach($item->product_id, [
                'quantity' => $item->quantity,
                'unit_price' => $item->product->prec_pub,
            ]);
            $total += $item->product->prec_pub * $item->quantity;
        }

        $order->update(['total' => $total]);

        CartItem::where('user_id', $request->user()->id)->delete();

        return redirect()->route('profile.orders')
            ->with('success', "Pedido {$order->folio} creado correctamente.");
    }
}
