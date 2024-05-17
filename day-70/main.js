"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\t\tIts my day 70 of 100 days coding challenge.\n\n");
const bio = {
  first_name: "Tuba",
  last_name: "Jan",
  age: 53,
  marital_status: false,
  address: "Dhaka",
};
let institude = {
  st_name: "Tuba Jan",
  age: 44,
  system: function (college) {
    console.log(`I study in ${college} my name is ${this.st_name}`);
  },
};
institude.system(`bahria College Karachi.`);
const lady_home = {
  lady_name: "Sadia ",
  age: 53,
  married: false,
  district: "Kemari town",
  area: "Sadar",
  location_in_karachi: true,
  no_of_rooms: 5,
};
console.log(lady_home);

let pro_img = document.createElement("img");
pro_img.src = "update slef.png";
pro_img.alt = "my_img";

if (pro_img.complete) {
  console.log(
    `Image dimension = ${pro_img.naturalWidth}x${pro_img.naturalHeight}`
  );
} else {
  pro_img.addEventListener("load", function () {
    console.log(
      `Image dimension = ${pro_img.naturalWidth}x${pro_img.naturalHeight}`
    );
  });
}
