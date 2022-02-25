### Hexlet tests and linter status:
[![Actions Status](https://github.com/n1k1t1nat/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/n1k1t1nat/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/n1k1t1nat/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/5ead30c3d9d31b8516b3/maintainability" /></a>
<a href="https://codeclimate.com/github/n1k1t1nat/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5ead30c3d9d31b8516b3/test_coverage" /></a>
[![Node CI](https://github.com/n1k1t1nat/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)]
(https://github.com/n1k1t1nat/frontend-project-lvl2/actions/workflows/node.js.yml)

### Difference generator

The utility compares two configuration files and shows a difference. 

Support formats to compare: json, yml.



### Install

Clone this repository

Run the command: `make install`

Run the command: `npm link`

### Comparison output example

Flat file comparison (JSON) 

[![asciicast](https://asciinema.org/a/PkoOKkVbkSSZBKotLEWGNy7cs.svg)](https://asciinema.org/a/PkoOKkVbkSSZBKotLEWGNy7cs)

Flat file comparison (YML)

[![asciicast](https://asciinema.org/a/bKT5y6suXPiwxej7TB84f9Xrh.svg)](https://asciinema.org/a/bKT5y6suXPiwxej7TB84f9Xrh)

Comparison of nested structures

Default formatter - stylish

Run the command: 
`gendiff __fixtures__/file1.yml __fixtures__/file2.yml` 
`gendiff __fixtures__/file1.json __fixtures__/file2.json`

[![asciicast](https://asciinema.org/a/jM5vlgf0NYp8Hn7vT6IfG2oSd.svg)](https://asciinema.org/a/jM5vlgf0NYp8Hn7vT6IfG2oSd)

Formatter - plain

Run the command: 
`gendiff -f plain __fixtures__/file1.yml __fixtures__/file2.yml` 
`gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json`

[![asciicast](https://asciinema.org/a/J5IVs71KxSM1rpeGlKyiIcm79.svg)](https://asciinema.org/a/J5IVs71KxSM1rpeGlKyiIcm79)

Formatter - json

Run the command: 
`gendiff -f json __fixtures__/file1.yml __fixtures__/file2.yml` 
`gendiff -f json __fixtures__/file1.json __fixtures__/file2.json`

[![asciicast](https://asciinema.org/a/t7lbbrrOKKQp3QOJlYLXANa7x.svg)](https://asciinema.org/a/t7lbbrrOKKQp3QOJlYLXANa7x)