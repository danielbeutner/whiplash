<panel>
  <panel-header class="{state}" if="{ header }">{ header }</panel-header>
  <panel-content><yield/></panel-content>
  <panel-footer if="{ footer }">{ footer }</panel-footer>
  <script>
    this.state = opts.state;
    this.header = opts.header;
    this.footer = opts.footer;
  </script>
</panel>