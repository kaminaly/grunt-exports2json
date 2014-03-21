 /*
 * grunt-exports2json
 * https://github.com/kaminaly/grunt-exports2json
 *
 * Copyright (c) 2014 kaminaly
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
require('coffee-script/register');

module.exports = function(grunt){

  grunt.registerMultiTask('exports2json', 'exports to json', function(){
    var options = this.options({});
    var cwd = process.cwd();

    this.files.forEach(function(f){
      f.src.filter(function(filepath){
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(src){
        grunt.file.write(f.dest, JSON.stringify(require(path.join(cwd, src))));
      });
      
      grunt.log.writeln('File "' + f.dest + '" created.');
    });

  });

};
