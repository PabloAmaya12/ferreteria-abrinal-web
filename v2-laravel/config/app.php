<?php

return [
    'name' => env('APP_NAME', 'Ferretería Abrinal'),
    'env' => env('APP_ENV', 'production'),
    'debug' => (bool) env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'America/Mexico_City',
    'locale' => 'es',
    'fallback_locale' => 'es',
    'faker_locale' => 'es_MX',
    'cipher' => 'AES-256-CBC',
    'key' => env('APP_KEY'),
    'maintenance' => [
        'driver' => 'file',
    ],
];
