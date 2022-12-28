const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength= myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]},${myWatchedSeries[1]},${myWatchedSeries[2]}`;
console.log(`I watched ${myWatchedSeriesLength} : ${myWatchedSeriesSentence}`)
// Part II
myWatchedSeries[2] = "friends";
myWatchedSeries.push("Black panther");
myWatchedSeries.unshift("Blacklist");
myWatchedSeries.splice(0, 1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);