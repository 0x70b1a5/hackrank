//stockmaximizer.js
//https://www.hackerrank.com/challenges/stockmax
function processData(input) {
    //Enter your code here
    var rows = input.split("\n"),
        cases = rows[0];
    
    ////////ALGO
    /*
    1. loop over the next [case] items to get each test
        2. put each in 'tests' array
    3. loop over tests
        4. initialize a row of [[profit, buyDay, sellDay],...]
        5. loop over prices
            6. calculate differences between this price and all other prices
            7. find largest profit potential for this price
            8. if profit potential exists, add [profit,buyDay,sellDay] to the row, else add undefined
        9. sort the row by most profitable sales
        10. TODO: should we be greedy here instead????
    */
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});