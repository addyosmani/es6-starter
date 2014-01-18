module.exports = {
  dist: {
    src: 'tmp/browser.js',
    dest: 'dist/library-<%= pkg.version %>.js'
  },
  distNoVersion: {
    src: 'tmp/browser.js',
    dest: 'dist/library.js'
  }
};
