const lp3 = require('./toplist');
const _ = require('lodash');

let queen = _.filter(lp3, ["author", "Queen"])
let queenSongs = _.map(queen, (n) => {return n.song})
console.log(queenSongs);

let pinkFloyd = _.map(_.filter(_.filter(lp3, ["author", "Pink Floyd"]), (x) => {if(x.change >= 10){return x}}), (x) => {return x.song})
console.log(pinkFloyd);

n = 3

let sorted = _.sortBy(lp3, ['change']).reverse()
sorted = _.dropRight(sorted, n)
console.log(sorted);

let best = _.sortBy(lp3, "place")[0]
let bestObject = {"author": best.author, "song": best.song}
console.log(bestObject);

const getSong = (arr) => {
    songs = []
    for(let i in arr){
        if(_.isNumber(arr[i])){
            songs.push(_.filter(_.sortBy(lp3, ['change']), ['place', arr[i]])[0])
        }
    }
    return _.map(songs, (n) => {return n.song})
}

console.log(getSong([5,2,1]));

const getRandomSongs = (n, min, max) => {  
    songList = _.times(n, () => _.random(min,max))
    console.log(getSong(songList));
}

getRandomSongs(4, 2, 10)

const showDelayed = (counter = 0) =>{
    if(counter<10){
    _.delay(showDelayed, 1000, counter+1)
    console.log(_.filter(_.sortBy(lp3, ['place']), ['place', i]))
    }
}
