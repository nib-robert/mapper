var assert  = require('assert');
var time    = require('../../lib/conditions/time');

var
  sevenPmOffset = 19*60*60,
  now   = new Date(),
  nowyr  = now.getFullYear()
;

describe('Conditions', function() {
  describe('Time', function() {

    describe('.before()', function() {

      it('should return true', function() {
        var cond = time.before(sevenPmOffset);
        assert(cond({now: new Date(nowyr, 7, 26, 3, 30, 0)}));
      });

      it('should return false', function() {
        var cond = time.before(sevenPmOffset);
        assert(!cond({now: new Date(nowyr, 7, 26, 21, 30, 0)}));
      });

    });

    describe('.after()', function() {

      it('should return true', function() {
        var cond = time.after(sevenPmOffset);
        assert(cond({now: new Date(nowyr, 7, 26, 21, 30, 0)}));
      });

      it('should return false', function() {
        var cond = time.after(sevenPmOffset);
        assert(!cond({now: new Date(nowyr, 7, 26, 4, 30, 0)}));
      });

    });

  });
});