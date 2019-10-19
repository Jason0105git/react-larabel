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

		  if(User::where('email', $request->email)->count() > 0 ){
		  	return response()->json('error: email duplicate ');
		  }

		  $user = User::create([
		  	'phone' => $request->phone,
		  	'lastname' => $request->lastname,		  
		  	'firstname' => $request->firstname,
		    'email' => $request->email,
		    'password' => md5($request->password),
		  ]);

		  return response()->json('user created');
		}
	

		// post request
		public function login(Request $request)
		{

			$condition = ['email' => $request->email, 'password' => md5($request->password)];
		  $user = User::where($condition)->get();
		  if($user){
		  	return response()->json($user);
		  } else {
		  	return response()->json('login error');
		  }
		}

}
