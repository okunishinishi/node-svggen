/**
 * Test for writexml.
 */

"use strict";

var writexml = require('./writexml');

exports['Get as string.'] = function (test) {

    var xml = writexml.string("baz", {
        foo: 'bar'
    });
    test.ok(xml);
    test.done();
};


exports['Generate xml file.'] = function (test) {
    var filename = __dirname + '/tmp/foo/barbaz.txt';
    writexml(filename, "this", {
        foo: 'bar'
    }, {
        mkdirp: true
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};
