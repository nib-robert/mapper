/**
 * Always true
 * @returns {function(Object)}
 */
module.exports = function() {
  return function(context) {
    return true;
  };
};