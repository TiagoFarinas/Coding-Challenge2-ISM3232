// Task 1-Calculate the tips

var bill_size =163;
var tip = bill_size >= 50 && bill_size <= 300 ? bill_size*0.15 : bill_size*0.20; //identify the bill size and check in what "tip bracket" does that bill fits in.

//Task 2-Output Details

console.log(`The bill was $${bill_size}, the tip was $${tip}, and the total value is $${bill_size + tip}`); //Display a message in the console saying the bill amount, the tip amount and how much was the total value when the bill and the tip are added up.