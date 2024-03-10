console.log('******************day-9************************');
//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

let alien='green';

if(alien == 'red'){
    console.log('you got nothing ' )//false
}else{
    console.log("You've got 5 points")
}

let alien_color='red';
console.log(alien_color == 'green')//
if(alien_color == 'green'){
    console.log("Correct answer");// it will print nothing cause our condition is not true
}

//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
 
alien_color='green';
if(alien_color == 'yellow'){
 console.log('Wrong Answer!')
}
if (alien_color == 'red') {
    console.log('wrong Answer')
} else {
    console.log("you've got nothing....sorry! we can't do anything");
}



alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}