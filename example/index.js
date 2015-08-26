var mapper  = require('..');
var cond    = mapper.conditions;

var
  sevenPmOffset = 19*60*60,
  ninePmOffset  = 21*60*60
;

var m = mapper()
  .rule(0, 'control', cond.control(25))
  .rule(1, 'edm',     cond.url('/?what-fitzy-said'))
  .rule(2, 'afl',     cond.and(cond.location.state('vic'), cond.time(sevenPmOffset, ninePmOffset)))
  .rule(9, 'offer',   cond.true())
;

console.log(m.map({state: 'nsw', date: new Date(2015, 7, 26, 2, 30, 0), url: '/?what-fitzy-said'}));
console.log(m.map({state: 'qld', date: new Date(2015, 7, 26, 2, 30, 0), url: '/'}));
console.log(m.map({state: 'vic', date: new Date(2015, 7, 26, 20, 30, 0), url: '/'}));
console.log(m.map({state: 'vic', date: new Date(2015, 7, 26, 7, 30, 0), url: '/'}));
console.log(m.map({state: 'nsw', date: new Date(2015, 7, 26, 2, 30, 0), url: '/'}));
