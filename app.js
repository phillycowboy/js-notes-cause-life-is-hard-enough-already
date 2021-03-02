
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms ){}
    console.log("finished function");
}

function clickHandler() {
    console.log("click event!");
}

// listen for the click event! 

document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution!");


// document.body.innerText = "Hello there ben!"





// conosle.log(arg)  will write to the conosle in the dev tools in your browser, it is to JS as Ruby is to 'puts' in the terminal 