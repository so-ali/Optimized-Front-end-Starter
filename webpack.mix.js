let mix = require('laravel-mix');

mix.sass('assets/styles/entry.scss', 'dist/styles.css').options({
    processCssUrls: false,
});