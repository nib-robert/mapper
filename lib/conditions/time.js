/**
 * Gets the date at the start of today
 * @returns {Date}
 */
function getStartOfToday() {
  var startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  return startOfToday;
}

/**
 * Get the time offset from the start of today in seconds
 * @param   {Date}    date
 * @returns {number}
 */
function getTimeOffset(date) {
  return (date.getTime()-getStartOfToday().getTime())/1000;
}

/**
 * Get whether now is after a time offsets
 * @param   {number}  time    Time offset from the start of today in seconds
 * @param   {number}  now     Time offset from the start of today in seconds
 * @returns {boolean}
 */
function before(time, now) {
  return now <= time;
}

/**
 * Get whether now is after a time offsets
 * @param   {number}  time    Time offset from the start of today in seconds
 * @param   {number}  now     Time offset from the start of today in seconds
 * @returns {boolean}
 */
function after(time, now) {
  return now >= time;
}

/**
 * Get whether a date is between two time offsets
 * @param   {number}  start   Time offset from the start of today in seconds
 * @param   {number}  end     Time offset from the start of today in seconds
 * @returns {function(Object)}
 */
module.exports = function(start, end) {
  return function(context) {
    var offsetOfNow = getTimeOffset(context.now);
    return after(start, offsetOfNow) && before(end, offsetOfNow);
  };
};

/**
 * Get whether a date is before a time offset
 * @param   {number}  time   Time offset from the start of today in seconds
 * @returns {function(Object)}
 */
module.exports.before = function(time) {
  return function(context) {
    return before(time, getTimeOffset(context.now));
  }
};

/**
 * Get whether a date is after a time offset
 * @param   {number}  time   Time offset from the start of today in seconds
 * @returns {function(Object)}
 */
module.exports.after = function(time) {
  return function(context) {
    return after(time, getTimeOffset(context.now));
  }
};