/**
 * Generate xml file.
 * @function writexml
 * @param {string} filename - Filename to generate.
 * @param {string} elm - Root element name.
 * @param {object} data - Element data.
 * @param {object} options - Optional settings.
 * @return {Promise}
 */

'use strict'

const js2xml = require('js2xmlparser')
const writeout = require('writeout')
const co = require('co')
const argx = require('argx')

/** @lends writexml */
function writexml (filename, elm, data, options = {}) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no longer supported. Use promise interface instead.')
  }
  let xml = writexml.string(elm, data)
  return co(function * () {
    yield writeout(filename, xml, {
      mkdirp: options.mkdirp
    })
  })
}

writexml.string = function (elm, data) {
  return js2xml(elm || 'root', data, {
    useCDATA: true
  })
}

module.exports = writexml
