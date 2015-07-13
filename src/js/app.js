window.R = window.riot = require('riot');
window.$ = window.jQuery = require('jquery');

var guides = require('./debug/guides');

// Mount all tags
R.mount('*');

// Initial state
$('html').removeClass('no-js');

$("body").baselineOverlay();