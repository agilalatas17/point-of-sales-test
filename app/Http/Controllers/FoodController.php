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

        return inertia('Food/Index', [
            'foods' => $foods
        ]);
    }

    public function create() {
        return inertia('Food/Create');
    }

    public function store(Request $request) {
        $gambar = $request->file('gambar');
        $nama_gambar = time() . '_' . $gambar->getClientOriginalName();
        $path_location = public_path('upload/images');
        $gambar->move($path_location, $nama_gambar);

        $dataStore = [
            'nama' => $request->nama,
            'gambar' => $nama_gambar,
            'harga' => $request->harga,
        ];

        Product::create($dataStore);

        return redirect()->route('food.index')->with('success', 'Menu berhasil ditambahkan');;
    }
}