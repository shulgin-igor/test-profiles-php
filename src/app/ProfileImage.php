<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ProfileImage extends Model
{
    public $table = 'profile_images';

    public function getUrlAttribute() {
        return Storage::url($this->path);
    }

    protected static function booted()
    {
        static::deleted(function ($image) {
            Storage::delete($image->url);
        });
    }
}
