var R = window.R = window.riot = require('riot');
var $ = window.$ = window.jQuery = require('jquery');

var guides = require('./debug/guides');

// Mount all tags
R.mount('*');

// Initial state
$('html').removeClass('no-js');

$("app").baselineOverlay();