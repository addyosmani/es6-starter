module.exports = {
  browser: {
    options: {
      mangle: true
    },
    files: {
      'dist/library-<%= pkg.version %>.min.js': ['dist/library-<%= pkg.version %>.js'],
    }
  },
  browserNoVersion: {
    options: {
      mangle: true
    },
    files: {
      'dist/library.min.js': ['dist/library.js'],
    }
  }
};
