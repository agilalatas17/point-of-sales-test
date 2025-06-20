<?php

use App\Http\Controllers\FoodController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/food', [FoodController::class, 'index'])->name('food.index');
Route::inertia('/food/create', 'Food/Create')->name('food.create');

// Route::get('/food', [FoodController::class, 'index'])->name('food');
// Route::inertia('/create', 'create-food')->name('create-food');

Route::get('/transaksi', function () {
    return Inertia::render('transaksi');
})->name('transaksi');