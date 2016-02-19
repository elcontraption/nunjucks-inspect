const NunjucksInspect = require('../src');
const nunjucks = require('nunjucks');
const should = require('should');

describe('inspect()', function () {

    beforeEach(function (done) {
        env = new nunjucks.Environment();
        env.addExtension('inspect', new NunjucksInspect());
        done();
    });

    it('should render a string that includes inspected object property keys and values.', function () {
        var obj = { testPropKey1: 'testPropValue1', testPropKey2: 'testPropValue2' };
        var result = env.renderString('{% inspect obj %}', { obj: obj });

        for (prop in obj) {
            result.indexOf(prop).should.be.greaterThan(-1);
            result.indexOf(obj[prop]).should.be.greaterThan(-1);
        }
    });
});