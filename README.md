xmlgen
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-xmlgen
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-xmlgen
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-xmlgen.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-xmlgen/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-xmlgen
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-xmlgen.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-xmlgen.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-xmlgen
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-xmlgen.svg
[bd_npm_url]: http://www.npmjs.org/package/xmlgen
[bd_npm_shield_url]: http://img.shields.io/npm/v/xmlgen.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Generate xml file from data.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install xmlgen --save
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
----

```javascript
var xmlgen = require('xmlgen');

xmlgen('person-file.xml', 'person', {
    "telephone": [
        "123-555-4567",
        {
            "#": "789-555-4567",
            "=": "fax"
        },
        "456-555-7890"
    ]
}, function (err) {
    /*...*/
    fs.readFile('person-file.xml', function(err, content){
        console.log(content);
        // <?xml version="1.0" encoding="UTF-8"?>
        // <person>
        //     <telephone>123-555-4567</telephone>
        //     <fax>789-555-4567</fax>
        //     <telephone>456-555-7890</telephone>
        // </person>
    });
});



```
<!-- Section from "docs/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-xmlgen/blob/master/LICENSE).

<!-- LICENSE End -->


