const InspectExtension = require('../src');
const nunjucks = require('nunjucks');
const should = require('should');

var env;

before(function (cb) {
    env = new nunjucks.Environment();
    env.addExtension('inspect', new InspectExtension());
    cb();
});

describe('inspect()', function () {
    it('should render a string that includes inspected object property keys and values.', function () {
        var obj = { testPropKey1: 'testPropValue1', testPropKey2: 'testPropValue2' };
        var res = env.renderString('{% inspect obj %}', { obj: obj });

        for (prop in obj) {
            res.indexOf(prop).should.be.greaterThan(-1);
            res.indexOf(obj[prop]).should.be.greaterThan(-1);
        }
    });
});