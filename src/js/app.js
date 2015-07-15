var R = window.R = window.riot = require('riot');
var $ = window.$ = window.jQuery = require('jquery');

var guides = require('./debug/guides');

// Mount all tags
R.mount('*');

// Initial state
$(window).load(function () {
    $('app').removeClass('loading');
    $("app").baselineOverlay();
    $('html').removeClass('no-js');
});