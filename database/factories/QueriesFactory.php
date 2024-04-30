<?php

namespace Database\Factories;

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

require_once 'vendor/autoload.php';



class QueriesFactory extends Factory
{

    public function definition(): array
    {
        return [
            "id" => fake()->numberBetween(rand(1000,2000)),
            'cidade' => fake()->city(),
            'location' => json_encode([
                'name' => fake()->city(),
                'country' => fake()->country(),
                'region' => fake()->state(),
                'lat' => fake()->randomFloat(1, -50, 50),
                'lon' => fake()->randomFloat(1, -50, 50),
                'timezone_id' => fake()->timezone(),
                'localtime' => fake()->dateTime()->format('Y-m-d H:i'),
                'localtime_epoch' => fake()->unixTime(),
                'utc_offset' => fake()->randomFloat(1, -12, 12),
            ]),
            'current' => json_encode([
                'observation_time' => fake()->time(),
                'temperature' => fake()->randomFloat(1, -50, 50),
                'weather_code' => fake()->randomNumber(3),
                'weather_icons' => [fake()->imageUrl()],
                'weather_descriptions' => [fake()->text()],
                'wind_speed' => fake()->randomFloat(1, 0, 50),
                'wind_degree' => fake()->randomNumber(3),
                'wind_dir' => fake()->randomNumber(),
                'pressure' => fake()->randomNumber(4),
                'precip' => fake()->randomFloat(1, 0, 100),
                'humidity' => fake()->numberBetween(0, 100),
                'cloudcover' => fake()->numberBetween(0, 100),
                'feelslike' => fake()->randomFloat(1, -50, 50),
                'uv_index' => fake()->randomNumber(1, 0, 10),
                'visibility' => fake()->randomNumber(2),
                'is_day' => fake()->randomElement(['yes', 'no']),
            ]),
        ];
    }
}
