// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

  // index.js

  function superbowlWin(record) {
    const winYear = record.find(function(game) {
        return game.result === 'W';
    });
    if (winYear) {
        return winYear.year;
    } else {
        return undefined;
    }
}

  