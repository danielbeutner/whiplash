<app class="loading">
  <navigation/>
  <sidebar/>
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