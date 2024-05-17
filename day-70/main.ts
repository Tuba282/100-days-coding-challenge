console.log("\n\n\t\tIts my day 70 of 100 days coding challenge.\n\n");

// Interface Method
interface full_name {
  first_name: string;
  last_name: string;
  age: number;
  marital_status: boolean;
  address: string;
}

const bio: full_name = {
  first_name: "Tuba",
  last_name: "Jan",
  age: 53,
  marital_status: false,
  address: "Dhaka",
};

// Interface Method And Parameters
interface student {
  st_name: string;
  age: number;
  system(college: string): void;
}

let institude: any = {
  st_name: "Tuba Jan",
  age: 44,
  system: function (college: string) {
    console.log(`I study in ${college} my name is ${this.st_name}`);
  },
};

institude.system(`bahria College Karachi.`);

// Re-Open The Interface And Use Cases

interface lady_s_home {
  //interface declaration
  lady_name: string;
  age: number;
}
interface lady_s_home {
  //interface ReOpen for area
  district: string;
  area: string;
  location_in_karachi: boolean;
}
interface lady_s_home {
  //interface ReOpen for marital status
  married: boolean;
  no_of_kids: number;
}

const lady_home: lady_s_home = {
  // constructing an object
  lady_name: "Sadia ",
  age: 53,
  married: false,
  district: "Kemari town",
  area: "Sadar",
  location_in_karachi: true,
  no_of_kids: 0,
};
console.log(lady_home);

// Interface extending and implementing proccess

interface pet {
  // simple interface declaration
  name:string
  age:number
  wild_nature:boolean
}

interface cat extends pet{
  // interface extending 
  color:string
}

const my_pet :cat={
  name:'mano',
  age:5,
  wild_nature:true,
  color:'black'
}


