
/**
 * Get whether the values are equal
 * @param   {*} expected
 * @returns {function(*)}
 */
module.exports = function(expected) {
  return function(actual) {
    return actual === expected;
  };
};