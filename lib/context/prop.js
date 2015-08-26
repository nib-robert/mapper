
module.exports = function(path, fn) {
  return function(context) {
    return fn(context[path]);//TODO: extract the path e.g. context['location']['state'] - use something like https://www.npmjs.com/package/object-path-get
  };
};