// Task 1-Calculate the tips

var bill_size =163;
var tip = bill_size >= 50 && bill_size <= 300 ? bill_size*0.15 : bill_size*0.20; //identify the bill size and check in what "tip bracket" does that bill fits in.

//Task 2-Output Details

console.log(`The bill was $${bill_size}, the tip was $${tip}, and the total value is $${bill_size + tip}`); //Display a message in the console saying the bill amount, the tip amount and how much was the total value when the bill and the tip are added up.

//Task 3-Create a Function

function calculateTip(bill_size) {
    if (bill_size>= 50 && bill_size<=300){
        return bill_size*0.15} 
        else{ return bill_size*0.20}}
 // I tried to use if else statements instead of just repeating the ternary operator of the first task to see if it would work in this function, doing a similar task

var TestBillFunction = 100;
var Test_Tip = calculateTip(TestBillFunction);
console.log(`The bill was $${TestBillFunction}, the tip was $${Test_Tip}, and the total value is $${TestBillFunction + Test_Tip}`) //Display a message in the console saying the bill amount, the tip amount and how much was the total value when the bill and the tip are added up.

//Task 4-Utilize Arrays

var bills = [125, 555, 44];
var tips = bills.map(function(bill){
    return calculateTip(bill)});
var totals = bills.map(function(bill,index){
    return bill + tips [index];
}); 
// This section of the code will use map to execute the calculateTip function to all the bills in the array and also calculate the total with the respective tips of each bill in the array

console.log(`This are the respective bills`,bills);
console.log(`This are the respective tips`,tips);
console.log(`This are the respective totals`,totals);
//This second part will delivery each persons bill, tip, and total.