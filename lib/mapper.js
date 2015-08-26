var util = require('./util');
var Rule = require('./Rule');

/**
 * Variant mapper
 * @constructor
 * @returns {Mapper}
 */
function Mapper() {

  if (!(this instanceof Mapper)) {
    return new Mapper();
  }

  /**
   * The rules
   * @type {Array.<Rule>}
   */
  this.rules = [];

}

Mapper.prototype = {

  /**
   * Add a rule
   * @param   {number}                    weight      The weight of the rule
   * @param   {string}                    bucket      The bucket which the rule maps to
   * @param   {function(Object):boolean}  condition   The condition which the rule must match
   * @returns {Mapper}
   */
  rule: function(weight, bucket, condition) {
    this.rules.push(new Rule(weight, bucket, condition));
    return this;
  },

  /**
   * Decide which bucket the context falls under
   * @param   {Object} ctx
   * @returns {string|null}
   */
  map: function(ctx) {

    var rules = util.lightest(util.matching(ctx, this.rules));

    if (rules.length) {
      return rules[0].bucket;
    } else {
      return null;
    }

  }

};

module.exports = Mapper;