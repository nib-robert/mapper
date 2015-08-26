
/**
 * A rule
 * @constructor
 * @param   {number}                    weight      The weight of the rule
 * @param   {string}                    bucket      The bucket which the rule maps to
 * @param   {function(Object):boolean}  condition   The condition which the rule must match
 */
function Rule(weight, bucket, condition) {
  this.weight     = weight;
  this.bucket     = bucket;
  this.condition  = condition;
}

module.exports = Rule;