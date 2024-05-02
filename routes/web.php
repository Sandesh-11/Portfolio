<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Portfoliocontroller;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home',[Portfoliocontroller::class,'start']);
Route::get('/about',[Portfoliocontroller::class,'about']);