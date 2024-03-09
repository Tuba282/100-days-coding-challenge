console.log('******************day-6************************\n');
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list = [`Tuba jan`, 'Mamma jani', 'Bushra Jan']
guest_list.forEach((guest_list) => {
    console.log(`Hello dear ${guest_list} , would you like to join me for dinner.?\n`)

})
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let cut_invitation = 'Mamma jani';
console.log(`\n sorry to say ${cut_invitation} could'nt make for dinner with us \n`);

let new_invitation = 'Mamma';
guest_list[guest_list.indexOf(cut_invitation)] = new_invitation;
console.log(`${guest_list}\n`)

//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
//I think splice use hoga
guest_list.splice(guest_list.length/2,0,"Muneeb",'Surmad Bhai',"Javeria")
console.log(guest_list)
console.log(`\n\n`);
//Ashraib ali
let guests: string[] = ["Albert Einstein",'surmad','muneeb','abhi', "Marie Curie", "Leonardo da Vinci"];
// console.log("Great news! I found a bigger dinner table!\n\n");

// // Adding more guests
// guests.unshift("Isaac Newton");//unshif wala 1 first place per ajaye ga
// guests.splice(guests.length / 2, 0, "Charles Darwin");//ye guest.length k hisab sy 2 place per aye ga per print me 3 place perhoga qk unshift laga kar 1place per 'Isaac 'ko rakha hai.
// guests.push("Ada Lovelace");// push sy ye'Ada Lovelace' end me add hongi.

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// })

console.log(`\n\n`);

// let guest_list = [`Tuba jan`,'Muneeb','Surmad','Javeria','', 'Mamma jani', 'Bushra Jan']

guest_list.unshift('Muzammil');
guest_list.splice(2,0,' Mr Khan ');
guest_list.push('Ahmed Nazir');

console.log(`\n`);
guest_list.forEach((name) =>{
    console.log(` Hello dear ${name}, you all are listed for the dinner party tonight.`)
});

//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log(`\n`);
console.log(`\n`);
//asharib ali
console.log("Unfortunately, I can only invite two people for dinner.");
//let guests: string[] = ["Albert Einstein",'surmad','muneeb','abhi', "Marie Curie", "Leonardo da Vinci"];

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
console.log(guests)
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list

console.log(`\n`);
//my code
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// 
// let guest_list =[  'Muzammil','Tuba jan',' Mr Khan ','Muneeb','Surmad Bhai','Javeria','Mamma', 'Bushra Jan','Ahmed Nazir']

while(guest_list.length >2){
    let cut_guest= guest_list.pop();
    console.log(`Sorry ${cut_guest} , Budy I can't invite you for the diner`);
}

console.log(`\n`);
//Print a message to each of the two people still on your list, letting them know they’re still invited

guest_list.forEach((name)=>{
    console.log(` hello ${name}, you're still invited for the dinner.\n `)
})

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.pop();
guest_list.pop();
console.log(guest_list.length)
console.log(`\n`)
console.log(`\n`)

let locations=[' America ',' India ',' Canada ',' Pakistan ',' Bangladesh ',' Norway ',' NewYork ']
//• Print your array in its original order.
console.log(`orignal order:  `,locations+`\n`);


// • Print your array in alphabetical order without modifying the actual list.
console.log(`Sort order:  `,[...locations].sort()+`\n`);


// • Show that your array is still in its original order by printing it.
console.log(`orignal order:`,locations+`\n`);


// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`reverse order:`, [...locations].sort().reverse()+`\n`);


// • Show that your array is still in its original order by printing it again.
console.log(`orignal order:`,locations+`\n`);


// • Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log(`reverse order:`,locations);


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log(`reverse order:`,locations);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log(`sort order:`,locations);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort().reverse();
console.log(`sorted reverse order:`,locations);