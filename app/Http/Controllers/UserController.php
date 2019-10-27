<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Mail;  TODO для кульной отправки почты
use Illuminate\Support\Facades\URL;

use App\User;


class UserController extends Controller
{

		// post request
		public function registerUser(Request $request)
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
	public function authLogin(Request $request)
		{

			$condition = ['email' => $request->email, 'password' => md5($request->password)];
		  $user = User::where($condition)->get()->first();
		  if($user !== null){
		  	return response()->json(['result'=>'logged','user'=> $user]);
		  } else {
		  	return response()->json(['result' => 'not found']);
		  }
		}

  // restore password
	public function sendRestoreLink(Request $request){

		$url = Url::to('/');  // будем дальше формировать ссылку по нашим правилам
/*

	if(User::where('email', $request->emailTo)->count() === 0 ){
			return response()->json(['result'=>'email not found']);
		}
*/
		$user = User::where('email', $request->emailTo)->first();
		if(!$user){
			return response()->json(['result'=>'email not found']);
		}

// http://127.0.0.1:8000/?opr=reset&type=confirm&uid=2&n=c81e728d9d4c2f636f067f89cc14862c&sig=665f644e43731f

		$url = Url::to('/').'?opr=reset&type=confirm&uid='.$user->id.'&n='.md5($user->id);	

		$message = '<a href="'.$url.'">ссылка для восстановления</a>';
/*		$sender = (object)['email'=>'dmvoloshin@gmail.com',
			'name' => 'dmitry',
			'subject' => 'test rluser',
			'message' => 'hello world'];



    Mail::send('emails.default', ['sender' => $sender], function($message) use ($sender) {
                $message->from('ditrix2006@gmail.com', 'ditrix');
                $message->to($sender->email, $sender->name)->subject('Test message');
            });*/

    $headers    = "MIME-Version: 1.0;";   
  	$headers   .= "Content-type: application/json; charset=UTF-8";
  	$headers   .= "From:<dmvoloshin@shop.askods.com>";
    if(mail('dmvoloshin@gmail.com', 'test subject', $message, $headers)){
    	return response()->json(['result'=>'restoreOk']);
    } else {
    	return response()->json(['result'=>'error']); 
    }	
	}	

	public function resetPassword(Request $request){
		$uid = $request->uid;
		$user = User::where('id',$request->uid)->first();

		if($user){
			$user->password = md5($request->password);
			$user->update();
			return response()->json(['result'=> 'ok']);
		} else {
			return response()->json(['result'=> 'user ot found']);	
		}
	}


	// в работе!!!
/*	public function getUser(Request $request){
			$condition = ['id' => $request->id];
		  $user = User::where($condition)->get()->first();
		  if($user !== null){
		  	return response()->json(['result'=>'logged','user'=> $user]);
		  } else {
		  	return response()->json(['result' => 'not found']);
		  }
	}
*/

	public function getLink(Request $request){
		$url = Url::to('/');
		$uid = $request->uid;
		return response()->json(['result'=>$url]);
	}


}

	


/*
на тему forgot password

http://cccp-blog.com/laravel/laravel-auth



https://stackoverrun.com/ru/q/11171310



  public function sendResetLinkEmail(Request $request)
    {
        $this->validateEmail($request);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        return $response == Password::RESET_LINK_SENT
                    ? $this->sendResetLinkResponse($request, $response)
                    : $this->sendResetLinkFailedResponse($request, $response);
    }


сброс пароля

 
//POST запрос для отправки email письма пользователю для сброса пароля
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');

//ссылка для сброса пароля (можно размещать в письме)
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');

//страница с формой для сброса пароля
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

//POST запрос для сброса старого и установки нового пароля
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

по идее нужно переделать пару контроллеров
//POST запрос для отправки email письма пользователю для сброса пароля
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');

//ссылка для сброса пароля (можно размещать в письме)
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');

*/
