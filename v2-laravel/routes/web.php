<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/catalogo', CatalogController::class)->name('catalog');
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
});
