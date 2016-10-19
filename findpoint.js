// findpoint.js
// https://www.hackerrank.com/challenges/find-point/submissions/code/17585574
function processData(input) {
    //Enter your code here
    var rows = input.split("\n"),
        t = rows.shift();
    
    for (var i=0; i<t; i++) {
        var coords = rows.shift().split(" "),
            x1 = parseInt(coords[0]),
            y1 = parseInt(coords[1]),
            x2 = parseInt(coords[2]),
            y2 = parseInt(coords[3]);
        
        console.log(x2 + (x2-x1),y2 + (y2-y1));
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
