var $ = window.$ = require('jquery');
var riot = require('riot');
    riot.router = require('riot-router');

var Route = riot.router.Route,
    DefaultRoute = riot.router.DefaultRoute,
    NotFoundRoute = riot.router.NotFoundRoute,
    RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
  new DefaultRoute({tag: 'welcome'}),
  new Route({tag: 'kitchensink'}),
  new Route({tag: 'example'}),
  new Route({tag: 'icons'}),
  new NotFoundRoute({tag: 'not-found'}),
  new RedirectRoute({from: 'x', to: 'example'})
]);

riot.mount('*');
riot.router.start();
