# whiplash [![Build Status](https://travis-ci.org/danielditgens/whiplash.svg)](https://travis-ci.org/danielditgens/whiplash)

The power of riot and browserify within a gulp starter-kit.

No bullshit bingo...

- Automated loading of all tags including precompile
- SCSS support
- Browserify support
- Browser-Sync support
- Organized gulp tasks
- Plain HTML and JavaScript

## Getting started

### Dependencies

You need gulp installed globally, so if you don't have it, install it:

```npm install --global gulp```

### Installation

Easy installation with:

```npm install```

### Build

Build everything you need:

```gulp build```

### Development

Start hacking:

```gulp``` or ```gulp watch```

## Usage

In `src` there are all files you need:

```
src
|-assets/        // All assets
|-css/           // SCSS files for styling
|-html/          // Your initial html file
|-js/            // JavaScript stuff
|-tags/          // Tags with .tag and .scss files
  |-atoms/       // atoms - the smallest component
  |-molecules/   // molecules - component with more than one atom
  |-organism/    // molecules - component with more than one molecule
  |-pages/       // pages - complete pages with content and functionality
  |-templates/   // templates - abstract of a page, only structure
  |-app.scss    // Global style for <app> tag
  |-app.tag     // The initial tag for you app
```

Now you can add atoms, molecules, organisms, pages and templates to your app. It will automatically merge into the app directory.

This could be look like this:

```
app
|-assets/
|-app.css
|-app.css.map
|-app.html
|-app.js
```

That's it.