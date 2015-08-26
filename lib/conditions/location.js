
/**
 * Get whether the state matches
 * @params  {string} state
 * @returns {function(Object)}
 */
function state(state) {
  return function(context) {
    return context.state === state;
  };
}

module.exports = {
  state: state
};