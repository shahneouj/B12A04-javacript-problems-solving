function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object" || Array.isArray(player1) || Array.isArray(player2)) {
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
bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 }, ["France"]
);
