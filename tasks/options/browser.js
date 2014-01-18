module.exports = {
  dist: {
    src: 'tmp/library.browser1.js',
    dest: 'dist/library-<%= pkg.version %>.js'
  },
  distNoVersion: {
    src: 'tmp/library.browser1.js',
    dest: 'dist/library.js'
  }
};
