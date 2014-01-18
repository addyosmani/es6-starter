(function() {
var define, requireModule, require, requirejs;
(function() {
  var registry = {}, seen = {};
  define = function(name, deps, callback) {
    registry[name] = {
      deps: deps,
      callback: callback
    };
  };
  requirejs = require = requireModule = function(name) {
    requirejs._eak_seen = registry;
    if (seen[name]) {
      return seen[name];
    }
    seen[name] = {};
    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }
    var mod = registry[name], deps = mod.deps, callback = mod.callback, reified = [], exports;
    for (var i = 0, l = deps.length; i < l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }
    var value = callback.apply(this, reified);
    return seen[name] = exports || value;
    function resolve(child) {
      if (child.charAt(0) !== '.') {
        return child;
      }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, - 1);
      for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (part === '..') {
          parentBase.pop();
        } else if (part === '.') {
          continue;
        } else {
          parentBase.push(part);
        }
      }
      return parentBase.join("/");
    }
  };
})();
define("library/shout", [], function() {
  "use strict";
  var shout = function(s) {
    return s.toUpperCase();
  };
  exports.shout = shout;
});
define("library/ssshh", [], function() {
  "use strict";
  var ssshh = function(s) {
    return s.toLowerCase();
  };
  exports.ssshh = ssshh;
});
define("library", ["./library/shout", "./library/ssshh", "exports"], function(__dependency1__, __dependency2__, __exports__) {
  "use strict";
  var shout = __dependency1__.shout;
  var ssshh = __dependency2__.ssshh;
  __exports__.shout = shout;
  __exports__.ssshh = ssshh;
});

}());