<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;




class DebugController extends Controller{

	public function getData(Request $request){
		return response()->json('get ok');
	}

	public function postData(Request $request){
		return response()->json('post ok');
	}	

}