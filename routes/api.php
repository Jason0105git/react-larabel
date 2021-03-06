<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Маршруты аутентификации...
//Route::get('login', 'Auth\AuthController@getLogin');
Route::post('login', 'Auth\AuthController@postLogin');
Route::get('logout', 'Auth\AuthController@getLogout');

// Маршруты регистрации...
//Route::get('register', 'Auth\AuthController@getRegister');
//Route::post('register', 'Auth\AuthController@postRegister');


Route::post('register', 'UserController@registerUser');

Route::post('forgot','UserController@sendRestoreLink');

Route::post('reset', 'UserController@resetPassword');

Route::post('login', 'UserController@authLogin');


// !!! в работе
Route::get('user', 'UserController@getUser');  



Route::get('debug', 'UserController@getLink');  
//Route::post('debug', 'DebugController@postData');  