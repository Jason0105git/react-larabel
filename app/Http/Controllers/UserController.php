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
		  $validatedData = $request->validate([
		  	'firstname' => 'required',
		    'email' => 'required',
		    'password' => 'required',
		  ]);

		  $user = User::create([
		  	'lastname' => 'lastname',
		  	'phone' => '+380660646332',
		  	'firstname' => $validatedData['firstname'],
		    'email' => $validatedData['email'],
		    'password' => $validatedData['password'],
		  ]);

		  return response()->json('user created!');
		}
	
}
