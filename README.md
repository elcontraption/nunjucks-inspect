# nunjucks-inspect
An `inspect` tag for Nunjucks, to inspect an object's properties.

## Setup

```js
const InspectTag = require('nunjucks-inspect');
const nunjucks = require('nunjucks');

var env = new nunjucks.Environment();
env.addExtension('inspect', new InspectTag());
```

## Usage

```html
{% inspect obj %}
```