
/**
 * Get whether the values are equal
 * @returns {function(*)}
 */
module.exports = function(expected) {
  return function(actual) {
    return actual === expected;
  };
};