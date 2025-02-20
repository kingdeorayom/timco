<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

$pages = [
    'home' => '/',
    'services' => '/services',
    'projects' => '/projects',
    'clients' => '/clients',
    'about' => '/about',
    'accessibility' => '/accessibility',
    'terms-of-use' => '/terms-of-use',
    'privacy-policy' => '/privacy-policy',
];

foreach ($pages as $view => $uri) {
    Route::get($uri, function () use ($view) {
        return view($view);
    });
}
