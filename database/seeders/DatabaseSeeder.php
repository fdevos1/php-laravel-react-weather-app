<?php

namespace Database\Seeders;

use App\Models\Queries;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Queries::factory(8)->create();

     
    }
}
