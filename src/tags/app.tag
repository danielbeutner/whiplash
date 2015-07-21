<app class="loading">
  <navigation/>
  <route/>
  <script>
    this.on('mount', function () {
      $(window).load(function () {
        $('app').removeClass('loading');
        $('html').removeClass('no-js');
      });
    })
  </script>
</app>