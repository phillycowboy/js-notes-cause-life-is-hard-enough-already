
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms ){}
//     console.log("finished function");
// }

// function clickHandler() {
//     console.log("click event!");
// }

// // listen for the click event! 

// document.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log("finished execution!");


// document.body.innerText = "Hello there ben!"





// conosle.log(arg)  will write to the conosle in the dev tools in your browser, it is to JS as Ruby is to 'puts' in the terminal 

// Operators ---

// var a = 3 + 4;
// console.log(a);

// var a = 4 - 3;
// console.log(a);

// var a = 4 > 3;
// console.log(a);

// Opertaor presedence and Associativity 
// var a = 3 + 4 * 5;
// console.log(a);

// var a = 2, b = 3, c = 4;

// a = b = c; 

// console.log(a);
// console.log(b);
// console.log(c);

// var a = (3 + 4) * 5;
// console.log(a);

// Coercion 


// var a = 1 + 2; 
// console.log(a); 

// var a = 'hello' + 'world'; 
// console.log(a); 

// var a = 1 + '2'; 
// console.log(a); 

// COMPARISON OPERATORS 

// console.log(1 < 2 < 3);
// console.log(3 < 2 < 1);

// var a = 0; 
// var b = false;

// if (a !== b) {
//     console.log("They are not equal");
// } else {
//     console.log("Equal");
// }




// EXISTENCE AND BOOLEANS 


// some code that goes out into the internet and looks for some value 
// anyhting we put in the if statment the condition will try to coerce it into a boolean true or false 
// so it doesnt really matter what a is if we put it inside the conditional as the thing that we are checking it will attempt to convert it to a boolean 
// var a = 0; 

// if (a || a === 0) {
//     console.log('Something is there');
// }





// DEFAULT VALUES 

// function greet(name="ben") {
    
//     console.log('hello ' + name);
// }

// greet("steve");




// FRAMEWORK ASIDE -- HOW JS CODE CAN BE UNIVERSAL WITH DIFFERENT LIBRAIRIES AND FRAMEWORKS

// console.log(libraryName)


// OBJECTS AND FUNCTIONS 

// var person = new Object();

// person["firstname"] = "Ben";
// person["lastname"] = "Murphy";

// firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();

// person.address.street = "111 Main St";

// person.address.city = "New York";
// person.address.state = "NY";

// console.log(person.address)
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);



// OBJECT AND OBJECT LITERALS 



