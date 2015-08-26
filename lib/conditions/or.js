/**
 * Get whether one of the conditions are true
 * @params  {...function(Object)} conditions
 * @returns {function(Object)}
 */
module.exports = function() {
  var conditions = arguments;

  return function(context) {

    for (var i=0; i<conditions.length; ++i) {
      var condition = conditions[i];

      if (condition(context)) {
        return true;
      }

    }

    return false;
  };
};