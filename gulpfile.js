const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('laravel-elixir-imagemin-wrapper');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
    mix.less('style.less')
    mix.copy('resources/assets/fonts', 'public/fonts')
    mix.styles([
        'resources/assets/'
    ])
    mix.scripts([
        '../../../node_modules/gridster/dist/jquery.gridster.js',
    'resources/assets/js/activity.js',
    'resources/assets/js/bath.js',
    'resources/assets/js/Chart.js',
    'resources/assets/js/diaper.js',
    'resources/assets/js/feed.js',
    'resources/assets/js/flip.js',
    'resources/assets/js/food.js',
    'resources/assets/js/lastevent.js',
    'resources/assets/js/medicine.js',
    'resources/assets/js/milestone.js',
    'resources/assets/js/mobile.js',
    'resources/assets/js/note.js',
    'resources/assets/js/notification.js',
    'resources/assets/js/pump.js',
    'resources/assets/js/sleep.js',
    'resources/assets/js/spinner.js',
    'resources/assets/js/stats.js',
    'resources/assets/js/supplies.js',
    'resources/assets/js/track.js'
], 'public/js/js.js')
        .imagemin()
        .browserSync({
            proxy: 'babytracker.dev'
        });
});
