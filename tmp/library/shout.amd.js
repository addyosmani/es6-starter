define("library/shout", 
  [],
  function() {
    "use strict";
    var shout = function(s) {
      return s.toUpperCase();
    }

    exports.shout = shout;
  });