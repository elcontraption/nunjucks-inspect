const highlight = require('highlight.js');
const nunjucks = require('nunjucks');

var Inspect = function () {
    this.tags = ['inspect'];

    this.parse = function (parser, nodes, lexer) {
        var token = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(token.value);

        return new nodes.CallExtension(this, 'run', args);
    };

    this.run = function (context, input, callback) {
        var output = highlight.highlight('js', JSON.stringify(input));
        return new nunjucks.runtime.SafeString('<pre><code>' + output.value + '</code></pre>');
    };
};

module.exports = Inspect;