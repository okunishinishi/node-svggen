/**
 * Generate svg xml string.
 * @memberof module:svggen/lib
 * @function asString
 * @param {object} data - SVG data.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.id=randomHash()] - SVG element id.
 * @param {number} [options.width=256] - Image width.
 * @param {number} [options.height=256] - Image width.
 * @param {string} [options.viewbox="0 0 256 256"] - View box size.
 * @returns {string}
 */

"use strict";

var js2xml = require('js2xmlparser'),
    randomval = require('randomval'),
    util = require('util'),
    extend = require('extend');

/** @lends asString */
function asString(data, options) {
    data = data || {};
    options = options || {};
    var width = Number(options.width || 256),
        height = Number(options.height || 256);
    data['@'] = extend(data['@'] || {}, {
        id: options.id || randomval.randomHash(),
        xmlns: options.xml || 'http://www.w3.org/2000/svg',
        width: width,
        height: height,
        viewbox: util.format('%s %s %s %s', 0, 0, width, height)
    });
    return js2xml('svg', data, {
        useCDATA: true
    });
}

module.exports = asString;
