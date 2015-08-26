var assert  = require('assert');
var or      = require('../../lib/conditions/or');
var fnTrue  = require('../../lib/conditions/true');
var fnFalse = require('../../lib/conditions/false');

describe('Conditions', function() {
  describe('OR', function() {

    describe('.or()', function() {

      it('should return true with one true condition', function() {
        var cond = or(fnTrue());
        assert(cond({}));
      });

      it('should return false with one false condition', function() {
        var cond = or(fnFalse());
        assert(!cond({}));
      });

      it('should return true with two true conditions', function() {
        var cond = or(fnTrue(), fnTrue());
        assert(cond({}));
      });

      it('should return false with two false conditions', function() {
        var cond = or(fnFalse(), fnFalse());
        assert(!cond({}));
      });

      it('should return true with one true and one false condition', function() {
        var cond = or(fnFalse(), fnTrue());
        assert(cond({}));
      });

    });

  });
});