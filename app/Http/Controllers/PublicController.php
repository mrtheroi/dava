<?php

namespace App\Http\Controllers;

use App\Models\SiteImage;
use Inertia\Inertia;
use Inertia\Response;

class PublicController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('public/home', [
            'images' => SiteImage::where('section', 'home')->get(),
        ]);
    }

    public function servicios(): Response
    {
        return Inertia::render('public/servicios', [
            'images' => SiteImage::where('section', 'servicios')->get(),
        ]);
    }

    public function nosotros(): Response
    {
        return Inertia::render('public/nosotros', [
            'images' => SiteImage::where('section', 'nosotros')->get(),
        ]);
    }

    public function contacto(): Response
    {
        return Inertia::render('public/contacto', [
            'images' => SiteImage::where('section', 'contacto')->get(),
        ]);
    }
}
