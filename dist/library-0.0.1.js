(function() {
define("library/shout", 
  [],
  function() {
    "use strict";
    var shout = function(s) {
      return s.toUpperCase();
    }

    exports.shout = shout;
  });
define("library/ssshh", 
  [],
  function() {
    "use strict";
    var ssshh = function(s) {
      return s.toLowerCase();
    }

    exports.ssshh = ssshh;
  });
define("library", 
  ["./my_library/shout","./my_library/ssshh","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var shout = __dependency1__.shout;
    var ssshh = __dependency2__.ssshh;

    __exports__.shout = shout;
    __exports__.ssshh = ssshh;
  });
}());