<iconset>
  <h1><%= fontName %></h1>
  <ul class="glyph"><% _.each(glyphs, function(glyph) { %>
    <li>
      <i class="<%= className %> <%= className %>-<%= glyph.name %> <%= className %>-4x"></i>
      <span class="glyph-name"><%= glyph.name %></span>
      <span class="glyph-codepoint"><%= glyph.codepoint.toString(16).toUpperCase() %></span>
    </li><% }); %>
  </ul>
  <style>
    iconset > h1 { color: #666; margin: 1em 0 }
    .glyph { padding: 0 }
    .glyph > li { display: inline-block; margin: .3rem .2rem; width: 5rem; height: 6.5rem; background: #fff; border-radius: .5rem; position: relative }
    .glyph > li .<%= className %> { display: block; margin-top: .1rem; line-height: 0 }
    .glyph-name { font-size: .8rem; color: #666; display: block }
    .glyph-codepoint { color: #999; font-family: monospace }
  </style>
</iconset>