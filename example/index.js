var mapper  = require('..');
var ctx     = mapper.context;
var cond    = mapper.condition;

var
  sevenPmOffset = 19*60*60,
  ninePmOffset  = 21*60*60
;

var m = mapper()
  .rule(0, 'offer',   cond.rand(25))
  .rule(1, 'edm',     ctx.prop('url', cond.equal('/?what-fitzy-said')))
  .rule(2, 'fb',      cond.or(ctx.prop('url', cond.equal('/?facebook')), ctx.prop('bucket', cond.equal('fb'))))
  .rule(3, 'afl',     cond.and(ctx.prop('state', cond.equal('vic')), ctx.prop('now', cond.time(sevenPmOffset, ninePmOffset))))
  .rule(9, 'offer',   cond.true())
;

console.log(m.map({state: 'nsw', now: new Date(2015, 7, 26, 2, 30, 0), url: '/?what-fitzy-said'}));
console.log(m.map({state: 'qld', now: new Date(2015, 7, 26, 2, 30, 0), url: '/'}));
console.log(m.map({state: 'vic', now: new Date(2015, 7, 26, 20, 30, 0), url: '/'}));
console.log(m.map({state: 'vic', now: new Date(2015, 7, 26, 7, 30, 0), url: '/'}));
console.log(m.map({state: 'nsw', now: new Date(2015, 7, 26, 2, 30, 0), url: '/'}));
console.log(m.map({state: 'tas', now: new Date(2015, 7, 26, 2, 30, 0), url: '/?facebook'}));
console.log(m.map({state: 'tas', now: new Date(2015, 7, 26, 2, 30, 0), url: '/', bucket: 'fb'}));
