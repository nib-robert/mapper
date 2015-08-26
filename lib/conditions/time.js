/**
 * Gets the date at the start of today
 * @param   {Date} date
 * @returns {Date}
 */
function getStartOfDay(date) {
  var startOfDay = new Date(date.getTime());
  startOfDay.setHours(0, 0, 0, 0);
  return startOfDay;
}

/**
 * Get the time offset from the start of today in seconds
 * @param   {Date}    date
 * @returns {number}
 */
function getTimeOffset(date) {
  return (date.getTime()-getStartOfDay(date).getTime())/1000;
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
 * @returns {function(Date)}
 */
module.exports = function(start, end) {
  return function(date) {
    var offsetOfNow = getTimeOffset(date);
    return after(start, offsetOfNow) && before(end, offsetOfNow);
  };
};

/**
 * Get whether a date is before a time offset
 * @param   {number}  time   Time offset from the start of today in seconds
 * @returns {function(Date)}
 */
module.exports.before = function(time) {
  return function(date) {
    return before(time, getTimeOffset(date));
  };
};

/**
 * Get whether a date is after a time offset
 * @param   {number}  time   Time offset from the start of today in seconds
 * @returns {function(Date)}
 */
module.exports.after = function(time) {
  return function(date) {
    return after(time, getTimeOffset(date));
  };
};