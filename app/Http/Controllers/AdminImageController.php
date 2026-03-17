<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSiteImageRequest;
use App\Models\SiteImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class AdminImageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/index', [
            'images' => SiteImage::all()->groupBy('section'),
        ]);
    }

    public function update(UpdateSiteImageRequest $request, SiteImage $image): RedirectResponse
    {
        $file = $request->file('image');
        $filename = $image->slot . '_' . time() . '.png';
        $oldPath = $image->path;

        $path = $file->storeAs('site-images', $filename, 'public');

        DB::transaction(function () use ($image, $path) {
            $image->update(['path' => $path]);
        });

        if ($oldPath && Storage::disk('public')->exists($oldPath)) {
            Storage::disk('public')->delete($oldPath);
        }

        return back();
    }
}
