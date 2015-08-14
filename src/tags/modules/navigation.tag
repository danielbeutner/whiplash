<navigation>
  <a class="menu" data-sidebar="toggle" href="#/">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <script>
    this.on('mount', function () {
      $(this.root).find('[data-sidebar="toggle"]').on('click', function (e) {
        e.preventDefault();
        $('sidebar').trigger('toggle.sidebar');
      });
    });
  </script>
</navigation>