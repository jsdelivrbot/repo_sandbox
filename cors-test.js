'use strict';
/* jshint ignore:start */
var corsTest = (function() {

    function sampleCorsFunction(a) {
      return a.b();
    }

    return {
        sampleCorsFunction: sampleCorsFunction
    };
}());
