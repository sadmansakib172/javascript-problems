let friends = ['Abulla', 'Babul', 'Kabul', 'Dabul', 'Gabul', 'chabullla'];

function bestFriend(friends){
    let largestFriend =friends[0];
    for(let i = 0; i< friends.length; i++){
        let friend = friends[i];
        if(friend.length > friends[0].length){
            largestFriend = friend;
        }
    }
    return largestFriend;
}

let biggestFriend = bestFriend(friends);
console.log(biggestFriend);