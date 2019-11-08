
ABOUT

проект - реализация личного кабинта посетителя

(регистрация, логин, логоут, забыл пароль, изменил пароль, изменил данные )

------ CREATE PROJECT -----

composer create-project --prefer-dist laravel/laravel public_html

php artisan key:generate

php artisan preset react

npm install 

npm run dev

php artisan serve

used

React

todo Redux

React-Router-Dom

js-md5  (https://www.npmjs.com/package/js-md5)

-----------------------------

php artisan make:model ModelName -m

migrate
// 
protected $fillable = [...]


php artisan make:controller ControllerName



материалы

laravel restful  api  https://softobzor.com.ua/laravel-restful-api/#Routes_and_Controllers


https://laravel.ru/docs/v5/authentication

https://www.w3schools.com/bootstrap4/default.asp


------------------------

TODO Common

шифрование на стороне клиента   https://www.npmjs.com/package/js-md5

повторное шифрование на стороне сервера


todo

для не залогиненного есть пункты регистрация и логин (в логине есть напомнить пароль)

для залогиненого есть кабинет и выйти
в кабинете можно менять контактные данные, пароль

в качестве логина используем email

форма регистрации - DONE

TODO:  - валидация пароля длина, символы и т.п.   - проверка на уникальность email на бекенде DONE

TODO passwordvalidator в отдельный модуль DONE

FIXME сервер отзівается через раз  FIXED (вопрос отпал после проверки уникальности email)

---------- 
TODO login  DONE

TODO   

0  use confirmPassword

1 ForgotPassword

2 ResetPassword


отправка почты. используем google smtp

materials

(http://laravel.su/docs/5.0/mail)

(https://www.hostinger.com.ua/rukovodstva/kak-ispolzovat-smtp-server)

(https://www.tutorialspoint.com/laravel/laravel_sending_email.htm)



для приложения в подкаталоге (в данном случае admin ) с использованием create-react-app


размещаем сборку react-приложения в /public/admin/
при в package.json сборке указать 
  "homepage": "http://.../admin", 


файл index.html =>  /public/resources/views/admin.blade.php

в /public/routers/web.php

....

Route::get('/admin', function()
{
    return View::make('admin');
});


uses

redux  react-redux  react-router-dom

(https://github.com/reduxjs/redux-thunk)

TODO: удаление акк