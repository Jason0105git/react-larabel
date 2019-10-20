
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

тема get запросов к бд

http://qaru.site/questions/34851/how-to-create-multiple-where-clause-query-using-laravel-eloquent

http://qaru.site/questions/51694/laravel-checking-if-record-exists

отправка почты
http://cccp-blog.com/laravel/laravel-mail

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
