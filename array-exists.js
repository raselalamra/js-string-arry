function megaFriend(friends){
    if (Array.isArray(friends) == false){
        return 'Please provied an arry'
    }

    let mega = friends[0];
    for (const friend of friends){
        if (friend.length > mega.length){
            mega = friend;
        }
    }
    return mega
}

const myFriedns = ['rasel', 'rahim', 'shuvo', 'emon', 'ashik', 'shahidul'];
const bigBuddy = megaFriend(myFriedns)
// console.log(bigBuddy)

// indexOf
if(myFriedns.indexOf('fox') != -1){
     console.log('Rasel exists')
}
else{
    console.log("fox is dosen't exists")
}
// includes
if (myFriedns.includes('rahim')){
    // console.length('rahim exists')
}

// concat
const first = [1, 2, 3, 4]
const second = [5, 6, 7, 8]
const allNumber = first.concat(second);
console.log(allNumber)