/**
 * Gets the start of today
 * @returns {Date}
 */
function getStartOfToday() {
  var startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  return startOfToday;
}

/**
 * Get the time offset from the start of today
 * @param   {Date} date
 * @returns {number}
 */
function getTimeOffset(date) {
  return (date.getTime()-getStartOfToday().getTime())/1000;
}

/**
 * Get whether now is after a time offsets
 * @param   {number}  time    Offset from the start of the day in seconds
 * @param   {number}  now     Offset from the start of the day in seconds
 * @returns {boolean}
 */
function before(time, now) {
  return now <= time;
}

/**
 * Get whether now is after a time offsets
 * @param   {number}  time    Offset from the start of the day in seconds
 * @param   {number}  now     Offset from the start of the day in seconds
 * @returns {boolean}
 */
function after(time, now) {
  return now >= time;
}

/**
 * Get whether now is between two time offsets
 * @param   {number}  start   Offset from the start of the day in seconds
 * @param   {number}  end     Offset from the start of the day in seconds
 * @returns {function(Object)}
 */
module.exports = function(start, end) {
  return function(context) {
    var offsetOfNow = getTimeOffset(context.date);
    return after(start, offsetOfNow) && before(end, offsetOfNow);
  };
};

module.exports.before = function(time) {
  return function(context) {
    return before(time, getTimeOffset(context.date));
  }
};

module.exports.after = function(time) {
  return function(context) {
    return after(time, getTimeOffset(context.date));
  }
};