<?php

namespace App\Models;

use Database\Factories\SiteImageFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteImage extends Model
{
    /** @use HasFactory<SiteImageFactory> */
    use HasFactory;

    protected $fillable = [
        'slot',
        'label',
        'section',
        'path',
        'alt_text',
    ];
}