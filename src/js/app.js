(function () {
  'use strict';

  var $ = window.$ = require('jquery');
  var riot = require('riot');
      riot.router = require('riot-router');

  var Route = riot.router.Route,
      DefaultRoute = riot.router.DefaultRoute,
      NotFoundRoute = riot.router.NotFoundRoute,
      RedirectRoute = riot.router.RedirectRoute;

  riot.router.routes([
    new DefaultRoute({tag: 'kitchensink'}),
    new Route({tag: 'icons'}),
    new NotFoundRoute({tag: 'not-found'}),
    new RedirectRoute({from: 'kitchensink', to: ''})
  ]);

  riot.mount('*');
  riot.router.start();
}());

