* DISCLAIMER-- THIS MATIERAL IS NOT MINE NOR DO I INTEND TO PASS IT OFF AS SUCH IT WAS TYPED OUT AND SAVED AS A RESOURCE FOR OTHER STUDENTS FROM ANOTHER SOURCE TO IMPLEMENT MORE IDEAS AND UNDERSTANDING ABOUT THE JAVASCRIPT LANGUAGE -- PLAIN AND SIMPLE -- CREATING A REFERENCE GUIDE FOR THE COMMON GOOD *


JavaScript Understanding the Weird Parts 

Intro---

JS is a different concept and a different mindset from other programming languages.
Philosophy- dont imitate-understand.

video link: https://www.youtube.com/watch?v=Bv_5Zv5c-Ts



Syntax Parser- a program that reads your code and determines what it does and if its grammar is valid. 
programs that read your code. JS

Lexical Environment- where something sits physically in the code you write.  'Lexical' means having to do with words or grammar.  A lexical environment exists in programming languages in which where you write something is important. A variable sits lexically inside a function. 

Execution Context- a wrapper to help manage the code that is running.  there are lots of lexical environments.  which one is currently running is managed via execution contexts. it can contain things beyond what you've written in your code. 

_______________________

NAME/VALUE PAIR----

Name/Value pair - is a name which maps to a unique value.  The name may be defined more than once, but only can have the one value in any given context.
the value may be more name/value pairs 

example: 

address = '100 Main st.'
  name      value 

Objects----
an object is a collection of name/value pairs 

address: {
    street: '100 main st',
    number: 100
    apartment:{
        floor: 3,
        number: 101
    }
};

collection of name/value pairs.

________________________________

The Global Environment and The Global Object----

Global- 'not inside a function'

The base code that is being run in the execution context is Global- the thing that is accessiable everywhere and to everything in your code. 

- it creates a Global Object for you with a special variable attached called 'this'.  These two things are created for you by the JS engine. 

create html boiler plate/script your js file.  open up browser, right click, inspect, console, in console type: 

this (object that is created by the JS engine)

//=> Window {window: Window, self: Window, document: document, name: "", location: Location, …}

'this' is the current 'window' that you are in, your browser window.  

window (global object inside browswers)

//=> Window {window: Window, self: Window, document: document, name: "", location: Location, …}

var a = "Hello World!"; 

function b() {
    
}

// in console 
// a
// "Hello World!"
// window.a
// "Hello World!"

when lexically not sittin inside a function, they are sitting on the global object 

There is a wrapper of Execution Context on the global scale that JS is creating for you that you didnt write and code for 

-this 
and 
-window 

__________________________________
The Execution Context for Creation and 'Hoisting'-----

var a = "Hello World!"; 

function b() {
    console.log("Called b!");
}

// conosle.log(arg)  will write to the conosle in the dev tools in your browser, it is to JS as Ruby is to 'puts' in the terminal 

b();
console.log(a);

in console: 
Called b!
Hello World!


but if you invoke your function and console.log at the top of everything----

b();
console.log(a);

var a = "Hello World!"; 

function b() {
    console.log("Called b!");
}

in console: 
Called b! 
Undefined 

it ran the function, and instead of throwing an error it gave us a value, not the 'Hello World!' that we saved but a thing called 'undefined'.  SO even though the function was defined below where it was executed it still ran.  var a was still available to us but gave us a value of 'undefined', instead of throwing an error, 'a is NOT defined' * remove the var and refresh browser to see the difference *
This is called Hoisting: 

see below for futher example  

_________________________________________________

Execution Context is Created (CREATION PHASE)---
this is the first phase the JS engine goes through.  In this phase we are given 

-The global environment 
-this 
-and the outer environment 

while the JS engine runs it recognizes where you created variables and where you created functions, so it sets up in the creation phase Memory Space for Varibables and Functions "HOISTING".  Before your code begins to be executed line by line, the JS engine has already set aside memory space for the variables and all the functions that you built and created.  So the variables and functions exist in memory, so when the code begins to execute line by line it can access them.  However when it comes to variables its a little bit different.  The function in its entirety is placed into memory space.  However during the EXECUTION PHASE when your code is being executed line by line, that is when variable assignments are set. 


console.log(a);

var a = "Hello World!";

So during the creation phase it wont know the value of 'a' until it starts executing your code and the value is set. SO it will put a place holder called 'undefined'. JS wont know what it is yet, its the same as if you never set a value at all.  ALL VARIABLES in JS are initially set to 'undefined', and functions are sitting in memeory in their entireity. That is why it is unconventional to rely on hoisting in any way.  You can run into trouble when you find that a value you were expecting to have a string comes up 'undefined'. So while this "TECHNICALLY" works: 


b();
console.log(a);

var a = "Hello World!"; 

function b() {
    console.log("Called b!");
}



it is better to do this: 



var a = "Hello World!"; 

function b() {
    console.log("Called b!");
}

b();
console.log(a);

so that you dont get caught in the undefined trap. 

_______________________________________

JS and UNDEFINED 

var a; 
console.log(a); 
//=> undefined 

console.log(a);
//=> app.js:4 Uncaught ReferenceError: a is not defined
    at app.js:4

'undefined'-- a special value that JS has within it internally that means the variable hasnt been set. 

var a; 
console.log(a);
if (a === undefined ) {
    console.log("a is undefined!")
}
else{
    console.log("a is defined!")
};

//=>undefined 
//=> a is undefined!


---
what happens when we set a to a value? 

var a = "Hello World!"; 

console.log(a);

if (a === undefined ) {
    console.log("a is undefined!")
}
else{
    console.log("a is defined!")
};

//=> Hello World!
//=> a is defined!

---

console.log(a);

if (a === undefined ) {
    console.log("a is undefined!")
}
else{
    console.log("a is defined!")
};

//=> app.js:4 Uncaught ReferenceError: a is not defined
    at app.js:4

While going through the Creation phase JS never set up the memory space for a variable of a, so then it had nothing to execute, hence why we are getting the error in the console on line 226. 

undefined is a special value set by JS to tell the developer that the engine has set up the memory space for a variable of a during the creation phase, we are going to give it a placeholder of 'undefined'.  But if you want var a to be executed in the Execution phase you will have to give a value, else it will remain undefined.  

________________________________________

Execution Context CODE EXECUTION: Execution Phase 

We alredy have the :

-Global Object
-this 
-Outer Environment 

THEN 
It runs your code Line by Line. Executing it on the computer. 

function b() {
    console.log("Called b!");
}

b();  
// we're calling b

console.log(a); 

// we're console logging a 

var a = "Hello World!"; 
// we're setting value to a 

console.log(a);

// we're console logging a again.  

in console: 

//=> Called b!
//=> undefined 
//=> Hello World!
the first time we called a it set up the memory space during the creation phase.  but during the execution phase when we ran it the first time it has a value of undefined automatically stored as 'undefined'.  But when we called a the second time during the execution phase, since we set a to a value of 'Hello World' JS know to execute a the second time and give it that value in the console since we set it up that way. 

______________________________________________

Single Threaded and Synchronous Execution: 

Single Threaded-- One command is being executed at a time. 

Synchronous Execution-- One command is being executed at a time, and in the order that it appears. 


______________________________________________

Function Invocation and The Execution Stack ---

Invocation- is the running of a function, in JS by using parenthesis ()

function b(){

}
function a(){
    b();
}
a();

First- the Global Execution Context is Created and code is Executed, b and a will be in memeory, and then execute it line by line. 
Second- when the code hits a(); at the bottom a new execution context is created and executed. becasue we are invoking it.  every new function has an execution phase when its invoked, it looks at how it stacked and creates and executes line by line within the function. 

So the execution is going to see b(); first, then go to a(); and then go to global execution, becuase of how the execution is STACKED, meaning from top to bottom. 

______________________________________

Functions, Context, and Variable Environments--

Variable Environment--- are where the variables live and how they relate to each other in memory. 

function b(){
    var myVar; (not equal to a value)
}
function a(){
    var myVar = 2;
    b();
}
var myVar = 1; 
a();

Gloabl Execution happens and myVar is created in memory space, and when it is executed it then has a memory space with a value of 1. And then the global execution hits the invocation of a(); and then a new execution context is created for a(); and when that is created the variable myVar within a will be put into an execution context myVar variable environment its value will then be 2. Then it invokes b(); and a new execution context with its own variable environment, its own memory space for its variables is created. Since myVar within the context of b(); is not set to a value it will be stored into memory as undefined. This has to do with something called SCOPE. 
Scope--- where are we able to see the variable. 

So even the variable myVar is called three seperate times, they are each unique, and distinct, and they dont touch each other. 

function b() {             (third)
    var myVar;
    console.log(myVar);
}

function a() {              (second)
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;             (first)
console.log(myVar);
a();

We are setting a variable myVar = 1 and then logging it and then invoking a(); 
Within a(); we are setting our own varible of myVar and setting it equal to 2, then logging it, then invoking b();
Then, we are setting a calling a var of myVar and then logging it in the console. 

//=> 1
//=> 2
//=> undefined

So each of these myVar's are sitting in its own execution context. 


_________________________________________
                                                                 
The SCOPE CHAIN----
--(function b() is lexically sitting globally on its own)                                                                            
function b(){
    console.log(myVar); ----(lexically sitting within b(), but JS doesnt know what myVar is from b() so it looks for it globally)
}
function a(){
    var myVar = 2; 
    b();
}

(the var myVar is also sitting lexically globally)  *1

var myVar = 1; 
a();
in console:
//=> 1

In function b() we are not declaring a variable of myVar we are logging it. We get the value of 1 logged in the console because we decared myVar to a value of 1 at the global level and then logging it within the function of b instead of declaring it. But we declare myVar in function a() and set it to a value of 2.  But since we are invoking a function of b() after we are setting that value within a(); JS will then go to the function of b(); see that we are logging the global variable of myVar in which the value of myVar will be bypassed in function a(); 

What is the Outer Environment? it is a reference to the global execution context. 

*1 so to find the value of myVar js will run up and down the scope chain to find a value that is being called locally inside of a function, and if it does not have a value locally, JS will then go outside to the global scope to find in memory where myVar is being stored and if it has a value.  In our case myVar is being stored globally to the value of 1.  So when we log the myVar varible in function b(); Js has to look for  it globally within the Scope Chain. 

BUT WHAT HAPPENS IF WE CHANGE THE LEXICAL ENVIRONMENT OF FUNCTION b();? 

function a() {

    function b() {
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a();
in console: 
//=> 2

Lexically we are setting the fucntion of b() inside of the function a() so it no longer sits on the global scope. So it's environment is different. We can no longer just call b(); out in the global level, what will happen is the global execution will look for a function of b(); and not see it in its scope because now it lives inside a(); But now since we are calling function a(); on the global level and it finds it within its global execution, reads the function a() line by line and sees that it has a var of myVar = 2 and it is invoking the b() function which is logging the value of myVar locally myVar is eqaul to the value of 2 now.  

Another way to think about it is who created me? fucntion b(); doesnt exist without function a(); now. 

But if we move b(); outside of a(); again when was it created?  During the Global Execution phase beacuse that is its outer reference. 


________________________________________
Scope, ES6, AND let------

Scope- is where a variable is available in your code. And if its truly the same variable, or a new copy. 

with ES6 comes let.  let, lets you use block scoping. 

the only difference is youre only allowed to use the value of let when the line of code is run. 

if(a > b ){
    let c = true;
}

here c is still in memory but the js engine wont allow it. also it is being declared inside a block.  the variable of let c is only avaiable within this block of code, no where else. 


______________________________

What about ASYNCHRONOUS callbacks? ----

Asynchronous -- more than one at a time. Since JS is Synchronous how is handiling these Asynchronous events? How does it know to go to a callback function of a EventListener? 

The JS engine does not exist by itself. It relies on pieces of code within certain aspects of the broswer to load JS into it.  With it comes the Rendering Engine and HTTP Request.   The Rendering Engine goes into the JS engine to rely on its hooks to render a piece of information.  It also can fetch data from an HTTP request, and given the code that youve written within JS, retrieve that information for you from a DB. It may seem like all these things are happening Asynchronoulsy with the JS engine, but the broswer is allowing a Synchroumus machine to run Asynchronously by getting an image and fetching some data in a matter of milliseconds. 

Inside JS we have what is called an Event Queue.  Within it we are notifying ourselves of events that are happening. If someboby clicks on somthing, we wont necessarily be notified by we can listen for this event and then pass it to a function that can handle that event. So a Click Event for example: if someone clicks on the screen, what happens if I have a function that is supposed to respond to that click event?  What happens is JS will look at the Event Queue when the Execution Stack is empty. So it finishes what ever execution is at the Global Level and when the stack is empty then JS periodically looks at the Event Queue it waits for something to be there. And if something is there it looks to see if a particular function should be run when that event was triggered.  So it sees a Click Event, processes that Click Event and knows theres a function that needs to be run for that event, so it creates the context for when ever that event needs to happend.  That event is processed, and the next item in the queue moves up  and so on and so forth. The Browser is Asynchromously putting Events in the Event queue but the code is running line by line, but hwen the executiion stack is empty then and only then will it look at the event queue and processes ad sees if it is listenting for an event and if that event is causing a function to be created and executed 

function waitThreeSeconds() {                         (runs first because it is delayed by three seconds )
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms ){}
    console.log("finished function");
}

function clickHandler() {
    console.log("click event!");
}

// listen for the click event! 

document.addEventListener("click", clickHandler);      (waiting for you to click so that it can invoke the function of clickHandler())   

waitThreeSeconds();
console.log("finished execution!");                       (runs second because the JS engine has completed its Execution Phase)

in what order are these going to appear? 
//=> finished function 
//=> finished execution 

after you click on the browser 

//=> click event! 


________________________
Types and JS ---

Dynamic Typing -- You dont tell the engine what type of data a variable holds, it figures it out while your code is running. Variables can hold different types of values because it's all figured out during execution. 

Static Typing -- that means you tell the compilier/engine what type of data you are going to hold in a variable ahead of time. 

bool isNew = "hello"; // an error 

say you want to create a new boolean and pass it a string value, it would error out...JS doesnt do that. 

var isNew = true; // no errors 
isNew = 'yup';
isNew = 1;

In JS there is no keyword to tell the data what you intend it to be. 

_____________________________
PRIMITIVE TYPES----

Primitive Type-- a type of data that represents a single value ; That is, not an object.  

1.) UNDEFINED - represents a lack of existence (you shouldn't set a variable to this.)  What the JS engine will set automatically if you do not set a variable to have a value. 

2.) NULL - ALSO represents lack of existence (you can set a variable to this) Use this when you want to set your variables equal to nothing. 

3.) BOOLEAN - true or false 

4.) NUMBER - it is a floating point number meaning theres always some decimals. Unlike other programming languages, theres only one 'number' type ... and it can make math weird. 

5.) STRING - a sequence of characters ( both '' and "" can be used around it )

6.) SYMBOL - The data type symbol is a primitive data type. The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "new Symbol()".  

Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties; this is the data type's primary purpose, although other use-cases exist, such as enabling opaque data types, or serving as an implementation-supported unique identifier in general.


____________________________
Operators ---

A special function that is syntactically written differently.  Generally operators take two parameters and return one result. 

var a = 3 + 4;
console.log(a);

in conosle: 
//=> 7 

How did the JS engine know that our intent was to add 3 and 4?  The engine saw the plus sign when it ran the code and saw the numbers three and four on either side and knew to add them together.  The plus sign '+' is an operator. And its actually a function. This uses in-fix notation, meaning that the function or operator sits between the two parameters '3 + 4' and returns the value of them which would be '7'

Pre-fix notation + 3 4;
In-fix notation 3 + 4; 
Post-fix notation 3 4+;

var a = 4 - 3;
console.log(a);

in console: 
//=> 1 

var a = 4 > 3;
console.log(a);

in console: 
//=> true 

This is the concept to keep in mind, that when we type these operators, that these are actually special types of functions. That these parameters are being passed to these functions and a value is being returned.  And inside those functions there is pre written code essentially for you that the JS provides to do, run, or invoke these functions.  And whats happening inside those functions is important to understand when dealing with a dynamically typed language. 


_________________________________________________
Operator Presedence and Associativity----

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Operator Presedence-- which operator function gets called first. Functions are called in the order of presedence (HIGHER presedence wins)

Associativity- what order operator functions get called in : left to right or right to left when functions have the same presedence.  

var a = 3 + 4 * 5;
console.log(a);

in console: 
//=> 23; 

There is an order to these operators.  Remember these are two function calls. JS is Synchronous so these aren't going to be run at the same time.    So in this case Multiplication has a higher precedence than addition. Which is why we get 23 and not 35 because it isnt reading left to right.  The JS engine knows that * take presedence over +. 

What happens when a operator has the same associativity as the other operator? 

var a = 2, b = 3, c = 4;

a = b = c; 

console.log(a);
console.log(b);
console.log(c);
//=>4
//=>4
//=>4

They are all equal to 4. Why? Because of associativity.  Associativity is either a left-to-right associativty, meaning the furthest operator to the left will be called first.  Or it will be a right-to-left associativty meaning the furthest operator the the right will be called first. Here we are using the assignment operator '=' and its associativity is right-to-left. It is right associative, meaning that 

a = b = c;

These all take the same presedence over one another, and since the assignment operator is a right-to-left associative it looks to the furthest value to the right. Which we gave a value of four. 

Seeing as operators take in two parameters and return its value like in the plus operator what does equals return?    

b = c;
//=> 4

The method or the function called was invoked, it set the value in memory of 'b' equal to the value and memory of 'c'. And then returned the value of the parameter on the right, the parameter that we are setting equal too. So it returned the value of 4.  So this statment of equals is a function that returns a value. That means we can call it in order. So since this: 

a = b = c; 

Is right-to-left associativity it sets b = 4 and returns a 4.  a also has the value of 4. 

BUT Grouping takes the highest presedence.  What that means is whatever is inside of the parenthesis will get run first.

var a = 3 + 4 * 5;
console.log(a);

This gave us a value of 23.  Because 5 * 4 = 20.  Then it took that value of 20 and added 3 which gave us? 23.  

But what happens when we run this? 

var a = (3 + 4) * 5;
console.log(a);

in console: 
//=> 35; 

The JS engine looked at the presedence of the parenthesis and chose to execute that first which gives you the value of 7, then JS took that value and multiplied it by 5 which gave us 35. 

________________________________

Coercion----







 




