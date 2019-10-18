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
		  /*$validatedData = $request->validate([
		    'name' => 'required',
		    'description' => 'required',
		  ]);
*/
		  $user = Project::create([
		    'email' => $validatedData['email'],
		    'password' => $validatedData['password'],
		  ]);

		  return response()->json('user created!');
		}
	
}
