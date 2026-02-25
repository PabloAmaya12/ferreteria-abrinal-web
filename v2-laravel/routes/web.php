<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BrandCatalogController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductCatalogController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/marcas', BrandCatalogController::class)->name('catalog.brands');
Route::get('/productos', ProductCatalogController::class)->name('catalog.products');
Route::get('/contacto', ContactController::class)->name('contact');

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'show'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
    Route::get('/registro', [RegisterController::class, 'show'])->name('register');
    Route::post('/registro', [RegisterController::class, 'store']);

    Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('google.redirect');
    Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    // Perfil
    Route::get('/perfil', [ProfileController::class, 'show'])->name('profile.show');
    Route::put('/perfil/password', [ProfileController::class, 'updatePassword'])->name('profile.password');
    Route::post('/perfil/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar');
    Route::get('/perfil/pedidos', [ProfileController::class, 'orders'])->name('profile.orders');

    // Carrito (cualquier usuario autenticado)
    Route::get('/carrito', [CartController::class, 'index'])->name('cart.index');
    Route::post('/carrito', [CartController::class, 'store'])->name('cart.store');
    Route::put('/carrito/{cartItem}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/carrito/{cartItem}', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::post('/carrito/checkout', [CartController::class, 'checkout'])->name('cart.checkout');

    // Admin: solo admin puede gestionar usuarios, marcas y categorías
    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function () {
        Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');
        Route::post('/usuarios', [UserController::class, 'store'])->name('users.store');
        Route::put('/usuarios/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/usuarios/{user}', [UserController::class, 'destroy'])->name('users.destroy');

        Route::get('/marcas', [BrandController::class, 'index'])->name('brands.index');
        Route::post('/marcas', [BrandController::class, 'store'])->name('brands.store');
        Route::put('/marcas/{brand}', [BrandController::class, 'update'])->name('brands.update');
        Route::delete('/marcas/{brand}', [BrandController::class, 'destroy'])->name('brands.destroy');

        Route::get('/categorias', [CategoryController::class, 'index'])->name('categories.index');
        Route::post('/categorias', [CategoryController::class, 'store'])->name('categories.store');
        Route::put('/categorias/{category}', [CategoryController::class, 'update'])->name('categories.update');
        Route::delete('/categorias/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');
    });

    // Admin + Manager: gestión de productos y pedidos
    Route::middleware('role:admin|manager')->prefix('admin')->name('admin.')->group(function () {
        Route::get('/productos', [ProductController::class, 'index'])->name('products.index');
        Route::post('/productos', [ProductController::class, 'store'])->name('products.store');
        Route::put('/productos/{product}', [ProductController::class, 'update'])->name('products.update');
        Route::delete('/productos/{product}', [ProductController::class, 'destroy'])->name('products.destroy');

        Route::get('/pedidos', [OrderController::class, 'index'])->name('orders.index');
        Route::patch('/pedidos/{order}/status', [OrderController::class, 'updateStatus'])->name('orders.updateStatus');
    });
});
