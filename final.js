function totalFine(fare) {
  if (typeof fare === "number" && fare > 0) {
    let fine = fare + (fare * (20 / 100)) + 30;
    return fine
  } else {
    return "Invalid"
  }
}

function onlyCharacter(str) {

  if (typeof str !== "string") {
    return "Invalid"
  }
  return str.split(" ").join("").toUpperCase();
}

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let team1Play = player1.foul + player1.cardY + player1.cardR;
  let team2play = player2.foul + player2.cardY + player2.cardR;

  if (team1Play == team2play) {
    return "Tie";
  } else if (team1Play < team2play) {
    return player1.name;
  } else {
    return player2.name;
  }
}

function isSame(arr1, arr2) {
  let match = 0;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid"
  } else if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      match++;
    }
  }
  if (match == arr1.length) {
    return true
  } else {
    return false
  };
}

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