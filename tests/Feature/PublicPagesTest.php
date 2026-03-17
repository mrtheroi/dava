<?php

use App\Models\SiteImage;

beforeEach(function () {
    $this->withoutVite();

    $slots = [
        ['slot' => 'home_hero_bg', 'label' => 'Hero', 'section' => 'home'],
        ['slot' => 'services_hero_bg', 'label' => 'Hero', 'section' => 'servicios'],
        ['slot' => 'nosotros_hero_bg', 'label' => 'Hero', 'section' => 'nosotros'],
        ['slot' => 'contacto_image', 'label' => 'Contacto', 'section' => 'contacto'],
    ];

    foreach ($slots as $slot) {
        SiteImage::factory()->create($slot);
    }
});

test('home page loads correctly', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('public/home')->has('images'));
});

test('servicios page loads correctly', function () {
    $this->get(route('servicios'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('public/servicios')->has('images'));
});

test('nosotros page loads correctly', function () {
    $this->get(route('nosotros'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('public/nosotros')->has('images'));
});

test('contacto page loads correctly', function () {
    $this->get(route('contacto'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('public/contacto')->has('images'));
});

test('public pages load with placeholder images when path is null', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('public/home')
            ->has('images')
            ->where('images.0.path', null)
        );
});