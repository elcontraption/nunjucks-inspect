# nunjucks-inspect
An `inspect` tag for Nunjucks, to inspect an object's properties.

## Installation
```sh
$ npm install nunjucks-inspect
```

## Setup

```js
const nunjucks = require('nunjucks');
const NunjucksInspect = require('nunjucks-inspect');

var env = new nunjucks.Environment();
env.addExtension('inspect', new NunjucksInspect());
```

## Usage

```html
{% inspect obj %}
```