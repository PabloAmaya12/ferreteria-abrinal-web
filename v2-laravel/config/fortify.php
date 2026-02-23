<?php

use Laravel\Fortify\Features;

return [

    'guard' => 'web',

    'middleware' => ['web'],

    'auth_middleware' => 'auth',

    'passwords' => 'users',

    'username' => 'email',

    'email' => 'email',

    'views' => false,

    'home' => '/',

    'prefix' => '',

    'domain' => null,

    'limiters' => [
        'login' => 'login',
    ],

    'redirects' => [
        'login' => '/',
        'logout' => '/',
        'password-confirmation' => null,
        'register' => '/',
        'email-verification' => null,
        'password-reset' => null,
    ],

    'features' => [
        Features::registration(),
    ],

];
