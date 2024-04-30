<?php

use App\Http\Controllers\QueriesController;
use Illuminate\Support\Facades\Route;



Route::get("/", [QueriesController::class,"index"])->name("index");

Route::post("/", [QueriesController::class,"store"])->name("store");

