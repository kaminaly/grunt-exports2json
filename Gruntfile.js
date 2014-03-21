 /*
 * grunt-exports2json
 * https://github.com/kaminaly/grunt-exports2json
 *
 * Copyright (c) 2014 kaminaly
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      test: ['tmp']
    },

    exports2json: {
      js: {
        options: {
        },
        files: [
          {
            src: 'test/fixtures/data.js',
            dest: 'tmp/js.json'
          }
        ]
      },
      coffee: {
        options: {
        },
        files: [
          {
            src: 'test/fixtures/data.coffee',
            dest: 'tmp/coffee.json'
          }
        ]
      },
      mix: {
        options: {
        },
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: ['mix/**/*.coffee', 'mix/**/*.js'],
            dest: 'tmp',
            ext: '.json'
          }
        ]
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'exports2json', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
