module.exports = {
  browser: {
  	files: {
  		'dist/browser.js': ['tmp/library.browser1.js']
  	}
  },
  amd: {
  	files: {
  		'dist/library-<%= pkg.version %>.amd.js': ['tmp/library-<%= pkg.version %>.amd.js']
  	}
  },
  amdNoVersion: {
  	files: {
  		'dist/library.amd.js': ['tmp/library.amd.js']
  	}
  }
};

