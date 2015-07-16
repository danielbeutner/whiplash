var R = window.R = window.riot = require('riot');
var $ = window.$ = window.jQuery = require('jquery');

// Mount all tags
R.mount('*');

// Initial state
$(window).load(function () {
  $('app').removeClass('loading');
  $('html').removeClass('no-js');
});