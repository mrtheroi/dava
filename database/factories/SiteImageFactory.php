<?php

namespace Database\Factories;

use App\Models\SiteImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SiteImage>
 */
class SiteImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slot' => fake()->unique()->slug(2),
            'label' => fake()->sentence(3),
            'section' => fake()->randomElement(['home', 'servicios', 'nosotros', 'contacto']),
            'path' => null,
            'alt_text' => fake()->sentence(),
        ];
    }
}
