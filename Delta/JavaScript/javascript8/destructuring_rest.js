//Destructuring and Rest  


//Arguments ko ik array mn store krany ky liye rest ka concept use krty hain three dots or
//variable ky name ky sath ...rest or ...others or ...args

/*Destructuring neans array ya obejct ki values ko variable mn store kr lia hai 
agar array hai to array variable , agar object hai to object mn variable create kr ky */

//Destructing Variables here

let names= ["Hassan", "Awais", "Muskan", "Ali", "Ahmed"];


let [ me , you , her , ...others]= names;


console.log(me);
console.log(you);
console.log(her);
console.log(others);



//Destructuring objects here

let student= {
    name: "Hassan", 
    age: 24,
    marks: 98,  
    username: "cheeku23",
    gmail: "hassantariq123@gmail.com",
    password: "hassan123",
    city: "Mian Channu",

}


let { username: user, password , city} = student;

// key ko customized name bhi dy sakty hain ya phir wahi name bhi use kr skty hain 


console.log(user);
console.log(password);
console.log(city);



