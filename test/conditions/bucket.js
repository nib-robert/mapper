var assert  = require('assert');
var bucket  = require('../../lib/conditions/bucket');

describe('Conditions', function() {
  describe('Bucket', function() {

    describe('.bucket()', function() {

      it('should return true', function() {
        var cond = bucket('fb');
        assert(cond({bucket: 'fb'}));
      });

      it('should return false', function() {
        var cond = bucket('fb');
        assert(!cond({bucket: 'twitter'}));
        assert(!cond({}));
      });

      it('should return false when undefined', function() {
        var cond = bucket('fb');
        assert(!cond({bucket: 'twitter'}));
        assert(!cond({}));
      });

    });

  });
});