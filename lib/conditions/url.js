
module.exports = function(url) {
  return function(context) {
    return context.url === url; //how should we compare? ie with query string etc?
  };
};