<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;

Route::get('/user', [UserController::class, 'index']);
Route::post('/user', [UserController::class, 'store']);
Route::get('/user/{user}', [UserController::class, 'show']);
Route::put('/user/{user}', [UserController::class, 'update']);
Route::delete('/user/{user}', [UserController::class, 'destroy']);

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/signup', [AuthController::class, 'signup'])->name('signup');  
Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->name('password.forgot');  
Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.reset');  


Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/get-user', [AuthController::class, 'getUser']);
});