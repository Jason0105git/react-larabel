
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

https://laravel.ru/docs/v5/authentication

https://www.w3schools.com/bootstrap4/default.asp

тема get запросов к бд

http://qaru.site/questions/34851/how-to-create-multiple-where-clause-query-using-laravel-eloquent


------------------------
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
TODO login