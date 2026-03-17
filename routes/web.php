<?php

use App\Http\Controllers\AdminImageController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/servicios', [PublicController::class, 'servicios'])->name('servicios');
Route::get('/nosotros', [PublicController::class, 'nosotros'])->name('nosotros');
Route::get('/contacto', [PublicController::class, 'contacto'])->name('contacto');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin', [AdminImageController::class, 'index'])->name('admin.index');
    Route::post('/admin/images/{image}', [AdminImageController::class, 'update'])->name('admin.images.update');
});

require __DIR__.'/settings.php';