<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfile;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\ProfilesCollection;
use App\Profile;
use App\ProfileImage;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ProfilesCollection(Profile::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProfile $request)
    {
        $profile = new Profile();
        $profile->name = $request->input('name');
        if ($profile->save()) {
            return new ProfileResource($profile);
        }
        // TODO: throw error
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProfileResource(Profile::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreProfile $request, $id)
    {
        $profile = Profile::findOrFail($id);
        $profile->name = $request->input('name');
        if ($profile->save()) {
            if ($request->input('removedImages')) {
                ProfileImage::destroy(collect($request->input('removedImages')));
            }

            return new ProfileResource($profile);
        }
        // TODO: throw error
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();
    }
}
