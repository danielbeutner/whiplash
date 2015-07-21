<panel>
  <panel-header class="{state}" if="{ title }">{ title }</panel-header>
  <panel-content><yield/></panel-content>
  <panel-footer if="{ footer }">{ footer }</panel-footer>
  <script>
    this.state = opts.state;
    this.title = opts.title;
    this.footer = opts.footer;
  </script>
</panel>