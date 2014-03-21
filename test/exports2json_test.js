'use strict';

var grunt = require('grunt');
var expectedFile = 'test/expected/data.json';

exports.exports2json = {
  js: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/js.json');
    var expected = grunt.file.read(expectedFile);
    test.equal(actual, expected, 'task output should equal ' + expectedFile);

    test.done();
  },
  coffee: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/coffee.json');
    var expected = grunt.file.read(expectedFile);
    test.equal(actual, expected, 'task output should equal ' + expectedFile);

    test.done();
  },
  mix: function(test) {
    test.expect(2);

    var actual1 = grunt.file.read('tmp/mix/data1.json');
    var actual2 = grunt.file.read('tmp/mix/data2.json');
    var expected = grunt.file.read(expectedFile);

    test.equal(actual1, expected, 'task output should equal ' + expectedFile);
    test.equal(actual2, expected, 'task output should equal ' + expectedFile);

    test.done();
  }
};
