var riot = window.riot = require('riot');
window.$ = window.jQuery = require('jquery');

// Mount all tags
riot.mount('*');

// Initial state
$('html').removeClass('no-js');