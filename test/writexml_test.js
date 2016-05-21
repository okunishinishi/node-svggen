/**
 * Test for writexml.
 */

'use strict'

const writexml = require('../writexml')
const co = require('co')
const fs = require('fs')
const assert = require('assert')

describe('writexml', function () {
  it('Get as string.', () => co(function * () {
    let xml = writexml.string('baz', {
      foo: 'bar'
    })
    assert.ok(xml)
  }))

  it('Generate xml file.', () => co(function * () {
    let filename = __dirname + '/tmp/foo/barbaz.txt'
    yield writexml(filename, 'this', {
      foo: 'bar'
    }, {
      mkdirp: true
    })
    assert.ok(
      fs.existsSync(filename)
    )
    assert.ok(fs.readFileSync(filename).toString())
  }))
})

/* global describe, it */
