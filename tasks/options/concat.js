module.exports = {
  amd: {
    src: ['tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'tmp/library-<%= pkg.version %>.amd.js'
  },

  amdNoVersion: {
    src: ['tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'tmp/library.amd.js'
  },

  deps: {
    src: ['vendor/deps/*.js'],
    dest: 'dist/deps.amd.js'
  },

  browser: {
    src: ['app/loader/loader.js', 'tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'tmp/library.browser1.js'
  }
};
