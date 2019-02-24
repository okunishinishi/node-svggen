/**
 * Test for writexml.
 */

'use strict'

const writexml = require('../writexml')
const fs = require('fs')
const assert = require('assert')

describe('writexml', function () {
  it('Get as string.', async () => {
    let xml = writexml.string('baz', {
      foo: 'bar'
    })
    assert.ok(xml)
  })

  it('Generate xml file.', async () => {
    let filename = __dirname + '/../tmp/foo/barbaz.xml'
    await writexml(filename, 'this', {
      foo: 'bar'
    }, {
      mkdirp: true
    })
    assert.ok(
      fs.existsSync(filename)
    )
    assert.ok(fs.readFileSync(filename).toString())
  })
})

/* global describe, it */
