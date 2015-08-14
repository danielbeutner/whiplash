<sidebar>
  <nav>
    <ul>
      <li><a href="#/">Kitchensink</a></li>
      <li><a href="#/icons">Icons</a></li>
    </ul>
  </nav>
  <script>
    this.on('mount', function () {
      $(this.root).on('toggle.sidebar', function (e) {
        $(this).hasClass('open') ? $(this).removeClass('open') : $(this).addClass('open');
      });
    });
  </script>
</sidebar>