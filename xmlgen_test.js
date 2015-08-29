/**
 * Test for xml gen.
 */

"use strict";

var xmlgen = require('./xmlgen');

exports['Get as string.'] = function (test) {

    var xml = xmlgen.string("baz", {
        foo: 'bar'
    });
    test.ok(xml);
    test.done();
};


exports['Generate xml file.'] = function (test) {
    var filename = __dirname + '/tmp/foo/barbaz.txt';
    xmlgen(filename, "this", {
        foo: 'bar'
    }, {
        mkdirp: true
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};
