module.exports = {
  amd: {
    src: ['tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'dist/library-<%= pkg.version %>.amd.js'
  },

  amdNoVersion: {
    src: ['tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'dist/library.amd.js'
  },

  deps: {
    src: ['vendor/deps/*.js'],
    dest: 'tmp/deps.amd.js'
  },

  browser: {
    src: ['vendor/loader.js', 'tmp/library/**/*.amd.js', 'tmp/library.amd.js'],
    dest: 'tmp/library.browser1.js'
  }
};
