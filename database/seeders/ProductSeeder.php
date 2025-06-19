<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $foods = [
            [
                'nama' => 'Empal Gentong',
                'gambar' => 'https://akcdn.detik.net.id/community/media/visual/2022/04/22/empal-gentong_169.jpeg',
                'harga' => 13000,
            ],
            [
                'nama' => 'Nasi Jamblang',
                'gambar' => 'https://cdn-1.timesmedia.co.id/images/2023/06/03/Nasi-Jamblang.jpg',
                'harga' => 10000,
            ],
            [
                'nama' => 'Nasi Lengko',
                'gambar' => 'https://akcdn.detik.net.id/community/media/visual/2021/04/21/ilustrasi-nasi-lengko_169.jpeg',
                'harga' => 15000,
            ],
            [
                'nama' => 'Tahu Gejrot',
                'gambar' => 'https://www.finnafood.com/blog/wp-content/uploads/2024/04/resep-tahu-gejrot.webp',
                'harga' => 5000,
            ],
            [
                'nama' => 'Mie Koclok',
                'gambar' => 'https://img-global.cpcdn.com/recipes/686c44e8938800ad/1200x630cq90/photo.jpg',
                'harga' => 10000,
            ],
        ];

        foreach ($foods as $food) {
            Product::create($food);
        }
    }
}