<?php

/*
|--------------------------------------------------------------------------
		| Web Routes
		|--------------------------------------------------------------------------
		|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

View::addExtension('html', 'php');
/*
Route::get('/', function () {
    return view('app');
});*/
/*
Route::get('/admin', function () {
    return view('admin');
});*/

Route::get('/admin', function()
{
    return View::make('admin');
});


Route::get('/{path?}', function($path = null){ return View::make('app'); })->where('path', '.*');