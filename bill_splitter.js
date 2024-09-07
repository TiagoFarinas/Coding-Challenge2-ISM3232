// Task 1-Calculate the tips

var bill_size =163;
var tip = bill_size >= 50 && bill_size <= 300 ? bill_size*0.15 : bill_size*0.20; //identify the bill size and check in what "tip bracket" does that bill fits in.