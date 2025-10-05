<?php


use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::options('{any}', function () {
//     return response()->json('OK', 200)
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// })->where('any', '.*');

Route::middleware('auth:sanctum')
    ->group(function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::apiResource('/users', UserController::class);
    });

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

