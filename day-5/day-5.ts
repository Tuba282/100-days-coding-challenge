console.log('***********************day-5**************************');
console.log('\n');
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let array1: string[] = ['train', 'flight', 'bus', 'taxi', 'car', 'bike', 'scooty']

let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
// Ashraib Ali ka code 
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}

const myList = [1, 2, 3, 4, 5];
myList.forEach((item) => {
    console.log(item);
});
//My Code 
let my_cousins=['tuba','bushra','mamma']
my_cousins.forEach((item) =>{
    console.log(item+'\n');
});
//Another Example of forEach

let my_family=['tuba jan','bushra jan','mamma jani']
my_family.forEach((item)=>{
    console.log(item+'\n')
});

//let explore another example

let my_fav_color=['blue','green','red','black','grey','pink']
my_fav_color.forEach((item) =>{
    console.log(item+' is one of my favorite color\n')
})

//okay lets dig in food
let my_fav_food=['biryani','korma','chocolates',' every sweet items']

my_fav_food.forEach((item) =>{
    console.log(item+' is one of my favorite food item\n')
})


//Computrize 
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
myMap.forEach((value, key) => {
    console.log(`key: ${key} | value: ${value}`);
});

// my code
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 28 }
];
users.forEach((user) => {
    console.log(`\tName: ${user.name}, Age: ${user.age} \n`);
});
// Output:
// Name: Alice, Age: 30
// Name: Bob, Age: 25
// Name: Charlie, Age: 28

//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list = ['maria','nayab','tuba','bushra']
guest_list.forEach((item) =>{
//  console.log(`${item} would you like to join me for    dinner...?\n`);  
    console.log(item +' would you like to join us for dinner ..?\n');
    console.log('\n \n');
});//Main nay Ashraib Ali ka bad me dekha or uska mera code bhuuuuuuut zyada same hai 
//is ka matlab hai k I am going on a right path
//don't fly on the sky please come down on earth we must have to learn further.
//yes yes

//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.



//I think  is question me Splice() use hoga
guest_list.splice(1,2,'perish');
guest_list.forEach((item) =>{
    console.log(item +' would you like to join us for dinner ..?\n');
});

//Ahshraib Ali ka rode
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


//// is  long code ko dekh k darna ni hai bhut chota sa logic samjh lo bus

let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to  join me for dinner?`);
});

let dinner_people=['Ashraib','Ali',"Nayab",'Bushra']
dinner_people.forEach((items)=>{
    console.log(items +' would you like to join me for dinner..\n' );
});
//ab ek invitation ko cut karna hai.plus print a messahe with that cut invivation.

let cut_invitation ='Ashraib';
console.log('\n')
console.log('\n')
console.log(`${cut_invitation} could'nt make out for dinner..`)
console.log('\n')
console.log('\n')
let new_invitation='laraib'
dinner_people[dinner_people.indexOf( cut_invitation )]= new_invitation;

// generate new invitation

dinner_people.forEach((items)=>{
    console.log(`${items} would you like come and join us for dinner..?\n`)
})