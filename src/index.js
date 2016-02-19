const cJSON = require('circular-json');
const nunjucks = require('nunjucks');

function Inspect () {
    this.tags = ['inspect'];

    this.parse = function (parser, nodes, lexer) {
        var token = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(token.value);

        return new nodes.CallExtension(this, 'run', args);
    };

    this.run = function (context, input, callback) {
        return new nunjucks.runtime.SafeString('<pre><code>' + cJSON.stringify(input, null, 2) + '</code></pre>');
    };
};

module.exports = Inspect;
