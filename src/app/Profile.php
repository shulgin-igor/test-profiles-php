<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function images()
    {
        return $this->hasMany('App\ProfileImage');
    }

    public function getImageAttribute()
    {
        if (sizeof($this->images) === 0) {
            return ['url' => '/images/placeholder.png'];
        }
        return $this->images[0]->only(['id', 'url']);
    }
}
