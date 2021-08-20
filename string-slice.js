const anthem = 'Amr Sunar Bangla Ami Tumai Valobashi'

// split
const words = anthem.split(' ');
// console.log(words)
const withoutA = anthem.split('a')
// console.log(withoutA)

// slice
const smallSlce = anthem.slice(4, 13)
// console.log(smallSlce)

// substr
const anotherPart = anthem.substr(10, 8)
// console.log(anotherPart)

// substring
const anotherPartAnotherPart = anthem.substring(10, 5)
// console.log(anotherPartAnotherPart)

// concat
const first = 'Rasel'
const second = 'Alam'
const fullName = first.concat(second).concat('jubayed')
// console.log(fullName)

// join
const wod = ['Rasel', 'Alam', 'Jubayed']
const fulName = wod.join(' ')

console.log(fulName)

