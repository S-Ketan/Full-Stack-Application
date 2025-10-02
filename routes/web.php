<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
use Illuminate\Container\Attributes\Auth;

Route::get('/', function () {
    return view('welcome');
});


