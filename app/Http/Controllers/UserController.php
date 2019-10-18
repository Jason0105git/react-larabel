<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //

		// post request
		public function register(Request $request)
		{

			/* проверить что email уникален, если нет return response()->json('пользователь с таким email уже есть!');
			*/


		  $validatedData = $request->validate([
		  	'firstname' => 'required',
		  	'lastname' => 'required',
		    'email' => 'required',
		    'password' => 'required',
		    'phone' => 'required',
		  ]);

		  $user = User::create([
		  	'phone' => $validatedData['phone'],
		  	//'lastname' => $validatedData['lastname'],
		  	'lastname' => $request->lastname,
		  	'firstname' => $validatedData['firstname'],
		    'email' => $validatedData['email'],
		    'password' => md5($validatedData['password']),
		  ]);

		  return response()->json('user created!');
		}
	
}
