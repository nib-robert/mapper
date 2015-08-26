
/**
 * Variant mapper
 * @constructor
 * @returns {Mapper}
 */
function Mapper() {

  if (!(this instanceof Mapper)) {
    return new Mapper();
  }

  this.rules = [];
}

Mapper.prototype = {

  /**
   * Add a rule
   * @param   {number}            weight      The weight of the rule if the condition returns true
   * @param   {string}            variant     The name of the variant that should be used if the rule is chosen
   * @param   {function(Object)}  condition   The condition that decides whether the rule applies to the context
   * @returns {Mapper}
   */
  rule: function(weight, variant, condition) {
    this.rules.push({
      weight:     weight,
      variant:    variant,
      condition:  condition
    });
    return this;
  },

  /**
   * Calculate which variant matches the rule with the least weight that applying to the current context
   * @param   {Object} context
   * @returns {string|null}
   */
  map: function(context) {

    var
      lightestRule    = null,
      lightestWeight  = Infinity
    ;

    for (var i=0; i<this.rules.length; ++i) {
      var rule = this.rules[i];

      if (rule.condition(context)) {
        if (rule.weight < lightestWeight) {
          lightestRule    = rule;
          lightestWeight  = rule.weight;
        }
      }

    }

    if (lightestRule) {
      return lightestRule.variant;
    } else {
      return null;
    }

  }

};

module.exports = Mapper;