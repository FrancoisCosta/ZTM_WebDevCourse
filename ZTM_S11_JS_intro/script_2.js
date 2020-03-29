// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var database = [
    {
        username: "fbcosta",
        password: "Arsenal1",
    },
    {
        username: "george",
        password: "environment",
    },
    {
        username: "bea",
        password: "ilovesurfing",
    },

];

var newsFeed = [
    {
        username: "georgy",
        timeline: "jheez that bike was rapid"
    
    },
    {
        username: "tarik",
        timeline: "i love banking"
    
    },
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username &&
            pass === database[i].password) {
            return true;
        } 
    }
    return false;
};

// function signIn(user, pass) {
//     if (isUserValid(user, pass)) {
//         console.log(newsFeed)
//     }
//     else {
//         alert("sorry wrong credentials");
//     }
// };

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed)
    }
    else {
        alert("sorry wrong credentials");
    }
};


signIn(userNamePrompt, passwordPrompt);