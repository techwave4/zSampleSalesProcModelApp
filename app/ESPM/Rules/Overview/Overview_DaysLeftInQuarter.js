
var clientAPI;

/**
 * Describe this function...
 */
export default function Overview_DaysLeftInQuarter(clientAPI) {
  var d = new Date();
  var qEnd = new Date(d);
  qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
  var qNum = Math.floor((qEnd - d) / 8.64e7);
  let returnStr = String(qNum + " Days Left");
  return returnStr;
}
