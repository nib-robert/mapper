
/**
 * Filter the rules and return only those which match the context
 * @param   {Object}        ctx
 * @param   {Array.<Rule>}  rules
 * @returns {Array.<Rule>}
 */
function matching(ctx, rules) {
  return rules.filter(function(rule) {
    return rule.condition(ctx);
  });
}

/**
 * Sort the rules by weight, smallest to largest
 * @param   {Array.<Rule>}  rules
 * @returns {Array.<Rule>}
 */
function lightest(rules) {
  return rules.sort(function(a, b) {
    if (a.weight < b.weight) {
      return -1;
    } else if (a.weight > b.weight) {
      return 1;
    } else {
      return 0;
    }
  });
}

module.exports = {
  matching: matching,
  lightest: lightest
};