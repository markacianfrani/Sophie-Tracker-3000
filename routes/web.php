<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


    Route::get('/', 'DashboardController@show');
    Route::get('/track/stats', 'TrackController@getStats');
    Route::get('/track/list', 'TrackController@getList');
Route::post('/track/new', 'TrackController@postNew');
    Route::get('/stats/update', 'StatsController@getUpdate');
    Route::resource('track', 'TrackController');
    Route::resource('stats', 'StatsController');