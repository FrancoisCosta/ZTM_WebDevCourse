//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints(bool) {
    if (winBattle(bool)) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle(true) ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


function fruitSelection(fruit) {
    var fruitPrice;
    switch (fruit) {
        case 'Oranges':
            fruitPrice = 'Oranges are $0.59 a pound.';
            break;
        case 'Apples':
            fruitPrice = 'Apples are $0.32 a pound.';
            break;
        case 'Bananas':
            fruitPrice = 'Bananas are $0.48 a pound.';
            break;
        case 'Cherries':
            fruitPrice = 'Cherries are $3.00 a pound.';
            break;
        case 'Mangoes':
        case 'Papayas':
            fruitPrice = 'Mangoes and papayas are $2.79 a pound.';
            break;
        default:
            fruitPrice = 'Sorry, we are out of ' + fruit + '.';
      }
    return fruitPrice;
}

  
//   console.log("Is there anything else you'd like?");
  