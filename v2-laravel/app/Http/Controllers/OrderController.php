<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::with(['user', 'products'])
            ->when($request->query('status'), fn ($q, $s) => $q->where('status', $s))
            ->when($request->query('q'), fn ($q, $term) =>
                $q->where(function ($sub) use ($term) {
                    $sub->whereRaw('LOWER(folio) LIKE ?', ['%' . mb_strtolower($term) . '%'])
                        ->orWhereHas('user', fn ($u) =>
                            $u->whereRaw('LOWER(name) LIKE ?', ['%' . mb_strtolower($term) . '%'])
                        );
                })
            )
            ->latest()
            ->paginate(25)
            ->withQueryString();

        return Inertia::render('Admin/Orders', [
            'orders' => $orders,
            'filters' => [
                'status' => $request->query('status', ''),
                'q' => $request->query('q', ''),
            ],
        ]);
    }

    public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|in:pendiente,procesando,completado,cancelado',
        ]);

        $order->update(['status' => $request->status]);

        return back()->with('success', 'Estado del pedido actualizado.');
    }
}
