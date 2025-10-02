<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;

// Route::options('{any}', function () {
//     return response()->json('OK', 200)
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// })->where('any', '.*');

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
