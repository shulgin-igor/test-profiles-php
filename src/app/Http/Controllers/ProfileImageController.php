<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfileImage;
use App\Http\Resources\ProfileImages;
use App\ProfileImage;

class ProfileImageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($profile, StoreProfileImage $request)
    {
        $files = $request->file('images');
        $images = [];
        foreach ($files as $image) {
            $path = $image->store('public/images');
            $profileImage = new ProfileImage();
            $profileImage->path = $path;
            $profileImage->profile_id = $profile;
            $profileImage->save();
            $images[] = $profileImage;
        }
        return new ProfileImages(collect($images));
    }
}
