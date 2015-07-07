window.r = window.riot = require('riot');
window.$ = window.jQuery = require('jquery');

// <content>
r.tag('content', '', function (opts) {
  var p = this.parent.root
  while (p.firstChild) this.root.appendChild(p.firstChild)
});

r.settings.brackets = '_ _';

r.mount('*');
