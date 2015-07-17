<navigation>
  <nav>
    <ul>
      <li each={ items }><a href="#/{ href }">{ title }</a></li>
    </ul>
  </nav>
  <script>
    this.items = [
      { title: 'Home', href: '' },
      { title: 'Kitchensink', href: 'kitchensink' },
      { title: 'Example', href: 'example' }
    ]
    riot.router.on('route:updated', function() {
      this.update();
    }.bind(this));
  </script>
</navigation>