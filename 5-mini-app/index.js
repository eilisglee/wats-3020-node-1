// write an app that meets requirements:
// * uses if/else
// * uses at least one operator +, -, *, /, %
// * reads an arg from the command line and provides usage if not present or wrong type
// suggestions:
// * convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00
// * convert Fahrenheit to Celsius C = (F - 32) *  5/9
// * convert pennies to dollars, for example 136 pennies is $1.36

// get an integer using getargs
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();


if (isNaN(input) || !Number.isInteger(input)) {
    console.log("usage: usd to euro <integer>");
  } else {
    let USD = Math.floor((input / 1));
    let EURO = input * 0.9;
  
    let usd = (USD == 1) ? "US dollar" : "US dollars";
    let euro = (EURO == 0.9) ? "Euro" : "Euros";
    
    console.log(`${input} USD is ${USD} ${usd} or ${EURO} ${euro} `)
  }