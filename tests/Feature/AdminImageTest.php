<?php

use App\Models\SiteImage;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    $this->withoutVite();
});

test('admin can access admin panel', function () {
    $admin = User::factory()->admin()->create();

    $this->actingAs($admin)
        ->get(route('admin.index'))
        ->assertOk();
});

test('non-admin user is redirected from admin panel', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('admin.index'))
        ->assertRedirect('/');
});

test('guest is redirected from admin panel', function () {
    $this->get(route('admin.index'))
        ->assertRedirect(route('login'));
});

test('admin can upload a png image', function () {
    Storage::fake('public');

    $admin = User::factory()->admin()->create();
    $image = SiteImage::factory()->create(['slot' => 'home_hero_bg', 'section' => 'home']);

    $file = UploadedFile::fake()->image('test.png', 800, 600)->size(1024);

    $this->actingAs($admin)
        ->post(route('admin.images.update', $image), ['image' => $file])
        ->assertRedirect();

    $image->refresh();
    expect($image->path)->not->toBeNull();
    Storage::disk('public')->assertExists($image->path);
});

test('admin cannot upload non-png files', function () {
    Storage::fake('public');

    $admin = User::factory()->admin()->create();
    $image = SiteImage::factory()->create(['slot' => 'home_hero_bg', 'section' => 'home']);

    $file = UploadedFile::fake()->image('test.jpg', 800, 600);

    $this->actingAs($admin)
        ->post(route('admin.images.update', $image), ['image' => $file])
        ->assertSessionHasErrors('image');
});

test('admin cannot upload files larger than 5MB', function () {
    Storage::fake('public');

    $admin = User::factory()->admin()->create();
    $image = SiteImage::factory()->create(['slot' => 'home_hero_bg', 'section' => 'home']);

    $file = UploadedFile::fake()->image('test.png', 800, 600)->size(6000);

    $this->actingAs($admin)
        ->post(route('admin.images.update', $image), ['image' => $file])
        ->assertSessionHasErrors('image');
});