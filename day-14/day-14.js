"use strict";
console.log(`\t\t they Its my day-14 \n\n`);
//Question 40: Album: Create objects for music albums.
// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.
//Asharib Ali ka code 
function make_album(artist, title, tracks) {
    let album = [artist, title];
    if (tracks) {
        //@ts-ignore
        album[`tracks`] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//my code 
function my_album(artist, song = 'jany tou', no_of) {
    let album = [artist, song];
    if (no_of) {
        // @ts-ignore
        album['no_of'] = no_of;
    }
    return album;
}
console.log(my_album("Arjeet Singh", "koi bhi", 7));
console.log(my_album("Arjeet Singh", "koi bhi"));
console.log(my_album("Arjeet Singh"));
// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
let artist = ['culture art', 'nature art', 'painting art'];
function my_list(artist) {
    artist.forEach(art => {
        console.log(art);
    });
}
my_list(artist);
function add_great(artist) {
    for (let j = 0; j < artist.length; j++) {
        console.log(artist[j] = artist[j] + " the great ");
    }
}
add_great(artist);
//asharib ali ka code 
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
//Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
