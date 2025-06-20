<?php

use App\Http\Controllers\FoodController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/food');
});

Route::get('/food', [FoodController::class, 'index'])->name('food.index');
Route::inertia('/food/create', 'Food/Create')->name('food.create');

Route::get('/transaksi', function () {
    return Inertia::render('Transaksi');
})->name('transaksi');