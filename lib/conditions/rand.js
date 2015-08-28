
module.exports = function(percent) {
  return function(context) {
    return Math.random() <= percent/100;
  };
};