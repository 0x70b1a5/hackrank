// minimumdraws.js
// https://www.hackerrank.com/challenges/minimum-draws/submissions/code/17585625
function processData(input) {
    //Enter your code here
    var rows = input.split("\n"),
        t = rows.shift();
    
    for (var i=0;i<t;i++) {
        console.log(parseInt(rows.shift()) + 1);
    }
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
