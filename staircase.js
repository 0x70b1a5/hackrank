// staircase.js 
// https://www.hackerrank.com/challenges/staircase/submissions/code/17373317
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine()),
        stairs="", spaces="";
    for (var i=1;i<=n;i++) spaces+=" ";
    for (var i=0;i<n;i++) {
        stairs+="#";
        spaces=spaces.split("").splice(1).join("");
        console.log(spaces+stairs);
    }
}