<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Number;

class FoodController extends Controller
{
    public function index() {
        $foods = Product::all()->map(function($food){
            $food->harga = Number::currency($food->harga, 'IDR', locale: 'id', precision: 0);

            return $food;
        });

        return inertia('food', [
            'foods' => $foods
        ]);
    }
}