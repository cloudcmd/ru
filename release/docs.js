'use strict';

const DIR = '../';
const cl = require('./cl');
const place = require('place');
const rendy = require('rendy');
const shortdate = require('shortdate');
const files = require('files-io');
const {version} = require(DIR + 'package');

module.exports = (callback) => {
    const name = 'Історія версій';
    const history = name + '\n---------------\n';
    const link = '//github.com/coderaiser/cloudcmd/releases/tag/';
    const template = '- *{{ date }}*, '     +
                  '**[v{{ version }}]'      +
                  '(' + link + 'v{{ version }})**\n';
    
    cl((error, versionNew) => {
        if (error)
            return callback(error);
        
        replaceVersion('index.md', version, versionNew, () => {
            const historyNew = history + rendy(template, {
                date        : shortdate(),
                version     : versionNew
            });
            
            replaceVersion('index.md', history, historyNew, () => {
                const to = rendy('v{{ version }}.md', {
                    version: versionNew
                });
                
                files.pipe('index.md', to, (error) => {
                    callback(error, 'done: ok');
                });
            });
        });
    });
};

function replaceVersion(name, version, versionNew, callback) {
    place(name, version, versionNew, (error) => {
        if (error)
            return callback(error);
        
        callback(null, 'done: ' + name);
    });
}
