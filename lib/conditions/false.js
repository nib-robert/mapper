
/**
 * Always false
 * @returns {function(Object)}
 */
module.exports = function() {
  return function(context) {
    return false;
  };
};