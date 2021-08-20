const numbers = [4, 7, 2, 1, 3, 5, 6, 8]

// sort in array
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers)

const friends = ['mabul', 'kalbul', 'habul', 'chabu;', 'babul', 'tabul']
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// reverse
const sortedFriends = friends.reverse();
console.log(sortedFriends);

// number sorting fun
const bigNumbers = [66, 75, 88, 98, 92, 7, 9, 2, 13]
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);