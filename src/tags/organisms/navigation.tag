<navigation>
  <nav>
    <ul>
      <li each={ items }><a href="#/{ href }">{ title }</a></li>
    </ul>
  </nav>
  <script>
    this.items = [
      { title: 'Get Started ', href: 'getstarted'},
      { title: 'Atoms', href: 'atoms'},
      { title: 'Molecules', href: 'molecules'},
      { title: 'Organisms', href: 'organisms'},
      { title: 'Layouts', href: 'layouts'}
    ]
  </script>
</navigation>