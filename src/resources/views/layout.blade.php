<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

        <title>Laravel</title>

    </head>
    <body>

    <div id="app-wrapper">
        <div id="app"></div>
    </div>

    <script src="{{ (env('APP_ENV') === 'development') ? mix('js/app.js') : asset('js/app.js') }}"></script>
    </body>
</html>
