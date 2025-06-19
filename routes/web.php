<?php

use App\Http\Controllers\FoodController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/food', [FoodController::class, 'index'])->name('food');

Route::get('/transaksi', function () {
    return Inertia::render('transaksi');
})->name('transaksi');