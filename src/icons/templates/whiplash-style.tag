<iconset>
  <h1><%= fontName %></h1>
  <ul class="glyph"><% _.each(glyphs, function(glyph) { %>
    <li>
      <i class="<%= className %> <%= className %>-<%= glyph.name %> <%= className %>-4x"></i>
      <span class="glyph-name"><%= glyph.name %></span>
      <span class="glyph-codepoint"><%= glyph.codepoint.toString(16).toUpperCase() %></span>
    </li><% }); %>
  </ul>
</iconset>