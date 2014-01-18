module.exports = {
  test: {
    src: [
      'test/vendor/assert.js',
      'test/test-adapter.js',
      'tmp/tests.cjs.js'
    ],
    options: {
      reporter: 'spec'
    }
  }
};
