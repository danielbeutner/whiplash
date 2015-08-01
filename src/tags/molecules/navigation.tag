<navigation>
  <a class="menu" href="#/">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <nav>
    <ul>
      <li each={ items }><a href="#/{ href }">{ title }</a></li>
    </ul>
  </nav>
  <script>
    // Items itself
    this.items = [
      { title: 'Home', href: '' },
      { title: 'Kitchensink', href: 'kitchensink' },
      { title: 'Example', href: 'example' },
      { title: 'Icons', href: 'icons' }
    ]
    // Router update
    riot.router.on('route:updated', function() {
      this.update();
    }.bind(this));
    // On mount set initial state and events
    this.on('mount', function () {
      $('navigation nav').on('click', function (e) {
        var $this = $(this).parent();
        $this.removeClass('open');
      });
      $('navigation .menu').on('click', function (e) {
        e.preventDefault();
        var $this = $(this).parent();
        $this.hasClass('open') ? $this.removeClass('open') : $this.addClass('open');
      });
    });
  </script>
</navigation>