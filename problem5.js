function resultReport(marks) {
  let result = {
    finalScore: 0,
    pass: 0,
    fail: 0
  }
  let sum = 0;
  if (!Array.isArray(marks)) {
    return "Invalid";
  } else if (marks.length == 0) {
    return result;
  } else {

    for (let mark of marks) {
      sum += mark
      if (mark < 40) {
        result.fail++;

      } else {
        result.pass++;
      }
    }
    result.finalScore = Math.round(sum / marks.length);

  }
  return result;
}
console.log(resultReport(100))