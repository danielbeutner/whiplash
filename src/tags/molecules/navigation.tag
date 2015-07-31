<navigation>
  <logo/>
  <a class="menu" href="#/"><icon name="hamburger" size="l"/></a>
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
      $('a.menu + nav').hide().on('click', function(e) {
        $(this).hide();
      });
      $('a.menu').on('click', function (e) {
          e.preventDefault();
          var $this = $(this);
          $this.next('nav').is(':visible') ? $this.next('nav').hide() : $this.next('nav').show();
        });
    });
  </script>
</navigation>