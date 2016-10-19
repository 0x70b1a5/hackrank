// sherlockmovingtiles.js
// https://www.hackerrank.com/challenges/sherlock-and-moving-tiles/submissions/code/17586159 
function processData(input) {
    //Enter your code here
    var rows = input.split("\n"),
        lss = rows.shift().split(" "),
        l = parseInt(lss[0]),
        s1 = parseInt(lss[1]),
        s2 = parseInt(lss[2]),
        Q = parseInt(rows.shift()),
        v = parseFloat(Math.abs(s1-s2));
    
    for (var i=0; i<Q; i++) {
        var q = parseInt(rows.shift());
        console.log(((l - Math.sqrt(q)) * Math.sqrt(2))/v);
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
