/**
 * Generate xml file.
 * @function writexml
 * @param {string} filename - Filename to generate.
 * @param {string} elm - Root element name.
 * @param {object} data - Element data.
 * @param {object} options - Optional settings.
 * @param {function} callback - Callback when done.
 */

"use strict";

var js2xml = require('js2xmlparser'),
    writeout = require('writeout'),
    argx = require('argx');

/** @lends writexml */
function writexml(filename, elm, data, options, callback) {
    var args = argx(arguments);
    filename = args.shift('string');
    elm = args.shift('string');
    data = args.shift('object');
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    var xml = writexml.string(elm, data);
    writeout(filename, xml, {
        mkdirp: options.mkdirp
    }, callback);
}

writexml.string = function (elm, data) {
    return js2xml(elm || 'root', data, {
        useCDATA: true
    });
};

module.exports = writexml;