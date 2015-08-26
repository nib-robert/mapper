
module.exports = function(bucket) {
  return function(context) {
    return context.bucket === bucket;
  };
};