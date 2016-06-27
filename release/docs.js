(function() {
    'use strict';
    
    var DIR         = '../',
        
        cl          = require('./cl'),
        place       = require('place'),
        rendy       = require('rendy'),
        shortdate   = require('shortdate'),
        files       = require('files-io'),
        Info        = require(DIR + 'package');
        
    module.exports = function(callback) {
        var name        = 'История версий',
            history     = name + '\n---------------\n',
            link        = '//github.com/coderaiser/cloudcmd/releases/tag/,
            template    = '- *{{ date }}*, '    +
                          '**[v{{ version }}]'   +
                          '(' + link + 'v{{ version }})**\n',
            version     = Info.version;
        
        cl(function(error, versionNew) {
            if (error) {
                callback(error);
            } else {
                replaceVersion('index.md', version, versionNew, function() {
                    var historyNew = history + rendy(template, {
                        date        : shortdate(),
                        version     : versionNew
                    });
                    
                    replaceVersion('index.md', history, historyNew, function() {
                        var to = rendy('v{{ version }}.md', {
                            version: versionNew
                        });
                        
                        files.pipe('index.md', to, function(error) {
                            callback(error, 'done: ok');
                        });
                    });
                });
            }
        });
    };
    
    function replaceVersion(name, version, versionNew, callback) {
        place(name, version, versionNew, function(error) {
            var msg;
            
            if (!error)
                msg = 'done: ' + name;
            
            callback(error, msg);
        });
    }
})();
