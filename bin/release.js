#!/usr/bin/env node

(function() {
    'use strict';
    
    var docs        = require('../release/docs');
    
    docs(function(e, msg) {
        error(e) || console.log(msg);
    });
    
    function error(e) {
        e && console.error(e.message);
        return e;
    }
    
})();
